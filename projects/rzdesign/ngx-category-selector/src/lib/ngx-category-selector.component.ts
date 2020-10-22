import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit, forwardRef
} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface CategoryNode {
  name: string;
  id: string | number;
  children: CategoryNode[];
}

const CATEGORY_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxCategorySelectorComponent),
  multi: true
};

@Component({
  selector: 'lib-ngx-category-selector',
  providers: [CATEGORY_CONTROL_ACCESSOR],
  templateUrl: './ngx-category-selector.component.html',
  styleUrls: ['./ngx-category-selector.component.scss']
})
export class NgxCategorySelectorComponent implements OnInit, ControlValueAccessor {

  preselection: (string | number)[] | null = [];
  private preselectionSubject = new BehaviorSubject<CategoryNode>(null);
  private onTouch: (_: any) => void;
  private onModelChange: (_: any) => void;

  @Input() data: CategoryNode[];

  @Input()
  set select(value: CategoryNode) {
    this.preselectionSubject.next(value);
  }

  @Output() selection: EventEmitter<CategoryNode> = new EventEmitter();

  constructor() {
  }

  writeValue(value: CategoryNode): void {
    this.preselectionSubject.next(value || null);
  }

  registerOnTouched(fn: (_: any) => void): void {
    this.onTouch = fn;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onModelChange = fn;
  }

  ngOnInit(): void {
    this.preselectionSubject
      .subscribe(value => {
        if (value === null) {
          this.preselection = null;
        }
        if (value) {
          this.preselection = this.getSelectionHierarchy(this.data, value);
        }
      });
  }

  onCategorySelection(event: CategoryNode): void {
    this.selection.emit(event);
    if (this.onModelChange) {
      this.onModelChange(event);
      this.onTouch(event);
    }
  }


  private getSelectionHierarchy(tree: CategoryNode[], searchedCategory: CategoryNode): (string | number)[] {
    let result;

    for (const node of tree) {

      if (node.hasOwnProperty('children')) {
        result = this.getSelectionHierarchy(node.children, searchedCategory);
        if (result && result.length) {
          return [node.id, ...result];
        }
      }

      if (node.id === searchedCategory.id) {
        return [node.id];
      }
    }

    return result;
  }

}

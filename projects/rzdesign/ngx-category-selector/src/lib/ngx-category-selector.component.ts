import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'lib-ngx-category-selector',
  templateUrl: './ngx-category-selector.component.html',
  styleUrls: ['./ngx-category-selector.component.scss']
})
export class NgxCategorySelectorComponent implements OnInit {

  preselection: (string | number)[] | null = [];
  private preselectionSubject = new BehaviorSubject<CategoryNode>(null);

  @Input() data: CategoryNode[];

  @Input()
  set select(value: CategoryNode) {
    this.preselectionSubject.next(value);
  }

  @Output() selection: EventEmitter<CategoryNode> = new EventEmitter();

  constructor() {
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


export interface CategoryNode {
  name: string;
  id: string | number;
  children: CategoryNode[];
}

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver, OnInit
} from '@angular/core';
import {CategoryNode} from '../ngx-category-selector.component';
import {BehaviorSubject} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'lib-category-set',
  templateUrl: './category-set.component.html',
  styleUrls: ['./category-set.component.scss'],
})
export class CategorySetComponent implements OnInit {

  private preselectionSubject = new BehaviorSubject<any[]>([]);

  @Input() data: CategoryNode[];

  @Input()
  set selected(value: (string | number)[]) {
    this.preselectionSubject.next(value);
  }

  @Output() selection: EventEmitter<CategoryNode> = new EventEmitter();
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  selectedCategory: CategoryNode;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.preselectionSubject.pipe(delay(0)).subscribe(newValue => {

      if (newValue === null) {
        this.selectedCategory = null;
        this.removeChild();
      }

      if (this.data && newValue) {
        newValue.forEach(nodeID => {
          this.data.forEach(node => {
            if (node.id === nodeID) {
              this.clickChip(null, node, newValue);
            }
          });
        });
      }
    });
  }

  clickChip(_, category, preselection: any[]): void {
    this.removeChild();

    if (preselection || preselection === null) {
      this.selectedCategory = category;
    } else {
      this.selectedCategory = (this.selectedCategory && this.selectedCategory.id === category.id) ? null : category;
      this.selection.emit(this.selectedCategory);
    }

    this.insertChild(preselection);
  }

  emitSelection(category: CategoryNode | null): void {
    if (category) {
      this.selection.emit(category);
    } else {
      this.selection.emit(this.selectedCategory);
    }
  }

  insertChild(preselection: any[]): void {
    if (this.selectedCategory && this.selectedCategory.children.length) {
      const compFactory = this.resolver.resolveComponentFactory(CategorySetComponent);

      const component = this.vc.createComponent(compFactory);
      component.instance.data = this.selectedCategory.children;
      component.instance.selected = preselection;
      component.instance.selection.subscribe(event =>
        this.emitSelection(event));
    }
  }

  trackByFn(item: CategoryNode): string | number {
    return item.id;
  }

  removeChild(): void {
    this.vc.clear();
  }
}


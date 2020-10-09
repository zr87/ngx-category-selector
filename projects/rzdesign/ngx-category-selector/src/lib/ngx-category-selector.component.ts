import {
  Component,
  EventEmitter,
  Input,
  Output, ViewChild,
  ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';

@Component({
  selector: 'lib-ngx-category-selector',
  templateUrl: './ngx-category-selector.component.html',
  styleUrls: ['./ngx-category-selector.component.scss']
})
export class NgxCategorySelectorComponent {

  @Input() data: CategoryNode[];
  @Output() selection: EventEmitter<CategoryNode> = new EventEmitter();
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  selectedCategory: CategoryNode;

  constructor(private resolver: ComponentFactoryResolver) {}

  clickChip(_, category): void {
    this.removeChild();

    this.selectedCategory = (this.selectedCategory && this.selectedCategory.id === category.id) ? null : category;
    this.selection.emit(this.selectedCategory);

    this.insertChild();
  }

  emitSelection(category: CategoryNode | null): void {
    if (category) {
      this.selection.emit(category);
    } else {
      this.selection.emit(this.selectedCategory);
    }
  }

  insertChild(): void {
    if (this.selectedCategory && this.selectedCategory.children.length) {
      const compFactory = this.resolver.resolveComponentFactory(NgxCategorySelectorComponent);

      const component = this.vc.createComponent(compFactory);
      component.instance.data = this.selectedCategory.children;
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

export interface CategoryNode {
  name: string;
  id: string | number;
  children: CategoryNode[];
}

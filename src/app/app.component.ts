import { Component } from '@angular/core';
import { CategoryNode } from 'projects/rzdesign/ngx-category-selector/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'category-selector';
  output: string;

  categoryData: CategoryNode[] = [
    { id: 1, name: 'Fruits', children: [
        { id: 3, name: 'Tropical', children: [
            { id: 9, name: 'Subtropical', children: [
              ]}
          ]},
        { id: 4, name: 'Melons', children: []},
        { id: 5, name: 'Berries', children: []},
        { id: 6, name: 'Citrus', children: []}
      ]},
    { id: 2, name: 'Vegetables', children: [
        { id: 7, name: 'Leaves', children: []},
        { id: 8, name: 'Root', children: []},
      ]},
  ];


  onCategorySelect(category: CategoryNode): void {
    if (category) {
      this.output = `Selected category name:  <strong>${category.name}</strong>  (id: ${category.id})`;

    } else {
      this.output = 'Choose a category!';
    }
  }
}

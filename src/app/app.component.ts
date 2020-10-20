import {Component} from '@angular/core';
import {CategoryNode} from 'projects/rzdesign/ngx-category-selector/src/public-api';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output: string;
  selectedCat: CategoryNode;
  list: CategoryNode[];
  selection: CategoryNode | null;

  categoryData: CategoryNode[] = [
    {
      id: 1, name: 'Fruits', children: [
        {
          id: 3, name: 'Tropical', children: [
            {
              id: 9, name: 'Subtropical', children: []
            }
          ]
        },
        {id: 4, name: 'Melons', children: []},
        {id: 5, name: 'Berries', children: []},
        {id: 6, name: 'Citrus', children: []}
      ]
    },
    {
      id: 2, name: 'Vegetables', children: [
        {id: 7, name: 'Leaves', children: []},
        {id: 8, name: 'Root', children: []},
      ]
    },
  ];

  exampleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Example 2
    this.list = [
      this.categoryData[0].children[0].children[0],
      this.categoryData[0],
      this.categoryData[1],
      this.categoryData[1].children[1],
    ];

    // Example 3
    this.exampleForm = this.fb.group({
      categoryControl: new FormControl(this.list[0])
    });
  }


  onCategorySelect(category: CategoryNode): void {
    this.selectedCat = category;

    if (category) {
      this.output = `Selected category name:  <strong>${category.name}</strong>  (id: ${category.id})`;
    } else {
      this.output = 'Choose a category!';
    }
  }
}

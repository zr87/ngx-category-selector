# NgxCategorySelector [![npm version](https://badge.fury.io/js/%40rzdesign%2Fngx-category-selector.svg)](https://badge.fury.io/js/%40rzdesign%2Fngx-category-selector)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

![NgxCategorySelector Demo](preview.gif)

## Installation

`npm i @rzdesign/ngx-category-selector`

## How to use it
Import `NgxCategorySelectorModule` in your module.

```typescript
import {NgxCategorySelectorModule} from '@rzdesign/ngx-category-selector';
```

##### Selector: `lib-ngx-category-selector`

```angular2html
<lib-ngx-category-selector [data]="categoryData"
                           (selection)="onCategorySelect($event)"></lib-ngx-category-selector>
```

#### Data source example: 
```javascript
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

```

### @Inputs()

| Input            | Type            | Required                   | Description                                                                                               |
| ---------------- | --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| data             | CategoryNode[ ] | **YES**                    | Array of CategoryNodes                                                |
| select           | CategoryNode    | optional                   | Preselects a category                                                |


### @Outputs()

| Output           | Type         | Required | Description                                            |
| ---------------- | ------------ | -------- | ------------------------------------------------------ |
| selection        | CategoryNode | **YES**  | Emits the selected category node                       |


## Planned features

- [ ] add unit tests 
- [ ] implement ControlValueAccessor's `setDisabledState` => add ability to disable the control, add styling according to form state
- [x] implement ControlValueAccessor => add ability to use the component as a form control 
  

## Examples
Check examples by running the app.

1. clone repo `git clone https://github.com/zr87/ngx-category-selector`
2. cd to repo folder and install dependencies `npm install`
3. start application: `ng serve`
 
  Examples are under `src/app/app.component.ts`

## :mailbox_with_mail: License & Postcardware

The package is completely free (MIT license) to use, however the package is licensed as Postcardware. This means that if it makes it to your production environment, we would very much appreciate receiving a postcard from your hometown.

**RZdesign**,
Becsi way 225 8/45,
1032 Budapest,
Hungary

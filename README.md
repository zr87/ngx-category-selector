# NgxCategorySelector [![npm version](https://badge.fury.io/js/%40rzdesign%2Fngx-category-selector.svg)](https://badge.fury.io/js/%40rzdesign%2Fngx-category-selector)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

![NgxCategorySelector Demo](preview.gif)

##Installation

`npm i @rzdesign/ngx-category-selector`

##API
`import {NgxCategorySelectorModule} from '@rzdesign/ngx-category-selector';`

Selector: `lib-ngx-category-selector`

### @Inputs()

| Input            | Type            | Required                   | Description                                                                                               |
| ---------------- | --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| data             | CategoryNode[ ] | **YES**                    | Array of CategoryNodes                                                |
| select           | CategoryNode    | optional                   | Preselects a category                                                |


### @Outputs()

| Output           | Type         | Required | Description                                            |
| ---------------- | ------------ | -------- | ------------------------------------------------------ |
| selection        | CategoryNode | **YES**  | Emits the selected category node                       |


##Planned features

- implement ControlValueAccessor => add ability to use the component as a form control
  

## :mailbox_with_mail: License & Postcardware

The package is completely free (MIT license) to use, however the package is licensed as Postcardware. This means that if it makes it to your production environment, we would very much appreciate receiving a postcard from your hometown.

**RZdesign**,
Becsi way 225 8/45,
1032 Budapest,
Hungary

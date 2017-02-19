# Angular Select View

Group of components to enhance the functionality of a select list. Influenced largely 
by the select2 project.

Currently select2@3.5.1 will need to be installed along side this project and css included in your html for it to work.
 
## Installation
~~~bash
npm install select2@3.5.1 ng2-select-view --save
~~~
 
## Usage

### In your html page
~~~html
<!doctype html>
<html>
    <head>
        ...
        <link rel="stylesheet" href="node_modules/select2/select2.css" />
        <link rel="stylesheet" href="node_modules/select2/select2-bootstrap.css" />
        ...
    </head>
    ...
</html>
~~~

~~~typescript
import {NgModule} from "@angular/core";
import {SelectViewModule} from "ng2-select-view/lib/select-view.module";

@NgModule({
  ...
  imports:      [
    ...,
    SelectViewModule
  ],
  ...
})
export class AppModule { }
~~~

### Somewhere in your project
~~~html
<c-list-one [options]="[{key: '1', value: 'Hello', {key: '2', value: 'Goodbye'}}]"></c-list-one>
<c-list-many [options]="[{key: '1', value: 'Hello'}, {key: '2', value: 'Goodbye'}]"></c-list-many>
~~~




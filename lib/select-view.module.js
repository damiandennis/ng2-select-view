"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var windowRefService_1 = require("./services/windowRefService");
var list_one_component_1 = require("./components/list-one/list-one.component");
var list_many_component_1 = require("./components/list-many/list.many.component");
var droplist_component_1 = require("./components/droplist/droplist.component");
var platform_browser_1 = require("@angular/platform-browser");
var SelectViewModule = (function () {
    function SelectViewModule() {
    }
    return SelectViewModule;
}());
SelectViewModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            droplist_component_1.DroplistComponent,
            list_one_component_1.ListOneComponent,
            list_many_component_1.ListManyComponent
        ],
        exports: [
            list_one_component_1.ListOneComponent,
            list_many_component_1.ListManyComponent
        ],
        providers: [
            windowRefService_1.WindowRefService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SelectViewModule);
exports.SelectViewModule = SelectViewModule;
//# sourceMappingURL=select-view.module.js.map
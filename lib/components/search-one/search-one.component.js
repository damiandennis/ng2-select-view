"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var select_abstract_1 = require("../../select.abstract");
var SearchOneComponent = SearchOneComponent_1 = (function (_super) {
    __extends(SearchOneComponent, _super);
    function SearchOneComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropPosition = "below";
        _this.propagateChange = function (_) { };
        _this.options = [];
        _this.keyId = "key";
        _this.valueId = "value";
        _this.placeholder = "";
        _this.searchTerm = "";
        _this.isBlock = true;
        _this.loading = true;
        return _this;
    }
    SearchOneComponent.prototype.writeValue = function (obj) {
        if (obj !== undefined) {
            this.value = obj;
        }
        this.loading = false;
    };
    SearchOneComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SearchOneComponent.prototype.registerOnTouched = function (fn) { };
    return SearchOneComponent;
}(select_abstract_1.SelectAbstract));
__decorate([
    core_1.ViewChild("listRef"),
    __metadata("design:type", core_1.ElementRef)
], SearchOneComponent.prototype, "listRef", void 0);
__decorate([
    core_1.ViewChild("listDisplayRef"),
    __metadata("design:type", core_1.ElementRef)
], SearchOneComponent.prototype, "listDisplayRef", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchOneComponent.prototype, "keyId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchOneComponent.prototype, "valueId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchOneComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchOneComponent.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchOneComponent.prototype, "isBlock", void 0);
SearchOneComponent = SearchOneComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "c-search-one",
        templateUrl: "search-one.component.html",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return SearchOneComponent_1; }),
                multi: true
            }
        ]
    })
], SearchOneComponent);
exports.SearchOneComponent = SearchOneComponent;
var SearchOneComponent_1;
//# sourceMappingURL=search-one.component.js.map
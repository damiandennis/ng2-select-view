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
var select_abstract_1 = require("../../select.abstract");
var forms_1 = require("@angular/forms");
var ListOneComponent = ListOneComponent_1 = (function (_super) {
    __extends(ListOneComponent, _super);
    function ListOneComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropPosition = "below";
        _this.propagateChange = function (_) { };
        _this.options = [];
        _this.keyId = "key";
        _this.valueId = "value";
        _this.hasSearch = true;
        _this.placeholder = "";
        _this.searchTerm = "";
        _this.isBlock = true;
        _this.loading = true;
        return _this;
    }
    /**
     * Updates the value from the search.
     *
     * @param value
     * @param event
     */
    ListOneComponent.prototype.updateValue = function (value, event) {
        this.value = value;
        this.setTextByKey();
    };
    /**
     * Finds the text for the specified key.
     */
    ListOneComponent.prototype.setTextByKey = function () {
        var _this = this;
        if (this.options && this.value) {
            var index = this.options.findIndex(function (option) { return option[_this.keyId] === _this.value; });
            if (index !== -1) {
                this.valueText = this.options[index][this.valueId];
            }
        }
    };
    /**
     * @inheritDoc
     */
    ListOneComponent.prototype.writeValue = function (obj) {
        if (obj !== undefined) {
            this.value = obj;
            this.setTextByKey();
        }
        this.loading = false;
    };
    /**
     * @inheritDoc
     */
    ListOneComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @inheritDoc
     */
    ListOneComponent.prototype.registerOnTouched = function (fn) { };
    /**
     * @inheritdoc
     */
    ListOneComponent.prototype.ngAfterViewInit = function () {
    };
    return ListOneComponent;
}(select_abstract_1.SelectAbstract));
__decorate([
    core_1.ViewChild("listRef"),
    __metadata("design:type", core_1.ElementRef)
], ListOneComponent.prototype, "listRef", void 0);
__decorate([
    core_1.ViewChild("listDisplayRef"),
    __metadata("design:type", core_1.ElementRef)
], ListOneComponent.prototype, "listDisplayRef", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListOneComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListOneComponent.prototype, "keyId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListOneComponent.prototype, "valueId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListOneComponent.prototype, "hasSearch", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListOneComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListOneComponent.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListOneComponent.prototype, "isBlock", void 0);
ListOneComponent = ListOneComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "c-list-one",
        templateUrl: "list-one.component.html",
        styleUrls: ["list-one.component.css"],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return ListOneComponent_1; }),
                multi: true
            }
        ]
    })
], ListOneComponent);
exports.ListOneComponent = ListOneComponent;
var ListOneComponent_1;
//# sourceMappingURL=list-one.component.js.map
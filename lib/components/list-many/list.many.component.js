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
var is_primative_1 = require("../../utils/is.primative");
var ListManyComponent = (function (_super) {
    __extends(ListManyComponent, _super);
    function ListManyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = true;
        _this.keyList = [];
        _this.valueList = [];
        _this.dropPosition = "below";
        _this.keyId = "key";
        _this.valueId = "value";
        _this.hasSearch = true;
        _this.placeholder = "";
        _this.searchTerm = "";
        _this.options = [];
        _this.valueChange = new core_1.EventEmitter();
        return _this;
    }
    /**
     * @inheritDoc
     */
    ListManyComponent.prototype.ngOnChanges = function () {
        this.value = this.value || [];
        // Make sure value is not a primitive.
        if (is_primative_1.default(this.value)) {
            return;
        }
        this.setValueListByKey();
        this.loading = false;
    };
    /**
     * Finds the text for the specified key.
     */
    ListManyComponent.prototype.setValueListByKey = function () {
        var _this = this;
        if (this.options) {
            this.keyList = this.value
                .filter(function (value) { return _this.options.findIndex(function (option) { return option[_this.keyId] === value; }) !== -1; })
                .map(function (value) {
                return _this.options.find(function (option) { return option[_this.keyId] === value; })[_this.keyId];
            });
            this.valueList = this.value
                .filter(function (value) { return _this.options.findIndex(function (option) { return option[_this.keyId] === value; }) !== -1; })
                .map(function (value) {
                return _this.options.find(function (option) { return option[_this.keyId] === value; })[_this.valueId];
            });
        }
    };
    /**
     * When value is updates.
     *
     * @param event
     */
    ListManyComponent.prototype.updateValue = function (event) {
        this.value.push(event);
        this.setValueListByKey();
        this.valueChange.emit(this.value);
    };
    /**
     * Removes an item from the list.
     *
     * @param index
     * @param event
     */
    ListManyComponent.prototype.removeItem = function (index, event) {
        event.stopPropagation();
        this.value = this.value.filter(function (option, i) {
            return i !== index;
        });
        this.setValueListByKey();
        this.valueChange.emit(this.value);
    };
    return ListManyComponent;
}(select_abstract_1.SelectAbstract));
__decorate([
    core_1.ViewChild("listRef"),
    __metadata("design:type", core_1.ElementRef)
], ListManyComponent.prototype, "listRef", void 0);
__decorate([
    core_1.ViewChild("listDisplayRef"),
    __metadata("design:type", core_1.ElementRef)
], ListManyComponent.prototype, "listDisplayRef", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListManyComponent.prototype, "keyId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListManyComponent.prototype, "valueId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListManyComponent.prototype, "hasSearch", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListManyComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListManyComponent.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListManyComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListManyComponent.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListManyComponent.prototype, "valueChange", void 0);
ListManyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "c-list-many",
        templateUrl: "list.many.component.html",
        styleUrls: ["list.many.component.css"]
    })
], ListManyComponent);
exports.ListManyComponent = ListManyComponent;
//# sourceMappingURL=list.many.component.js.map
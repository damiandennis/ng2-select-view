"use strict";
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
var key_map_1 = require("../../utils/key.map");
var clone_object_1 = require("../../utils/clone.object");
var is_primative_1 = require("../../utils/is.primative");
var windowRefService_1 = require("../../services/windowRefService");
var DroplistComponent = (function () {
    function DroplistComponent(winRef) {
        this.winRef = winRef;
        this.displayPosition = {};
        this.activeItem = 0;
        this.filteredOptions = [];
        this.searchTerm = "";
        this.isInternalHidden = false;
        this.hasSearch = true;
        this.placeholder = "";
        this.keyId = "key";
        this.valueId = "value";
        this.isSearchHidden = true;
        this.displayRef = null;
        this.dropPosition = "below";
        this.valueChange = new core_1.EventEmitter();
        this.isSearchHiddenChange = new core_1.EventEmitter();
        this.dropPositionChange = new core_1.EventEmitter();
        this.window = winRef.nativeWindow;
        this.document = this.window.document;
    }
    /**
     * @inheritDoc
     */
    DroplistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.value) {
            // For primatives we set the index.
            if (is_primative_1.default(this.value)) {
                this.filteredOptions = clone_object_1.default(this.options);
                this.activeItem = this.options.findIndex(function (option) { return option[_this.keyId] === _this.value; });
            }
            else {
                this.filteredOptions = this.multiFilteredOption();
            }
        }
        else {
            this.filteredOptions = clone_object_1.default(this.options);
        }
    };
    /**
     * If its a multiple selection.
     *
     * @returns {any}
     */
    DroplistComponent.prototype.multiFilteredOption = function () {
        var _this = this;
        if (this.options) {
            return clone_object_1.default(this.options)
                .filter(function (option) {
                return is_primative_1.default(_this.value)
                    ? true
                    : _this.value.indexOf(option[_this.keyId]) === -1;
            });
        }
        else {
            return [];
        }
    };
    /**
     * @inheritDoc
     */
    DroplistComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes["options"]) {
            this.filteredOptions = clone_object_1.default(this.options);
        }
        if (changes["isSearchHidden"]) {
            // Reset search if closing.
            if (changes["isSearchHidden"].previousValue === true &&
                changes["isSearchHidden"].currentValue === false) {
                // Make async to prevent internal expression has changed error since we are only checking on searchHidden check.
                setTimeout(function () {
                    if (_this.value) {
                        _this.resetSearch();
                        _this.filteredOptions = _this.multiFilteredOption();
                        _this.openListSelector(_this.displayRef);
                    }
                }, 0);
            }
        }
    };
    /**
     * @inheritDoc
     */
    DroplistComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.searchControl
            .valueChanges
            .debounceTime(10)
            .subscribe(function () {
            _this.filterOptions();
            setTimeout(function () {
                // Height needs recalculation on search if above.
                if (_this.dropPosition === "above") {
                    var top_1 = _this.listDropDownRef.nativeElement.offsetHeight * -1;
                    _this.displayPosition["top"] = top_1 + "px";
                }
            }, 100);
        });
    };
    /**
     * Updates the drop position.
     * @param value
     */
    DroplistComponent.prototype.updateDropPosition = function (value) {
        this.dropPosition = value;
        this.dropPositionChange.emit(value);
    };
    /**
     * Filters the search response.
     *
     * @returns {any}
     */
    DroplistComponent.prototype.filterOptions = function () {
        var _this = this;
        if (this.searchTerm.length > 0) {
            this.filteredOptions = this.multiFilteredOption()
                .filter(function (option) {
                return option[_this.valueId]
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1;
            })
                .map(function (option) {
                var response = {};
                response[_this.keyId] = option[_this.keyId];
                var start = option[_this.valueId]
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase());
                var underlined = option[_this.valueId].split("");
                var replacement = underlined.slice(start, start + _this.searchTerm.length).join("");
                underlined.splice(start, _this.searchTerm.length, "<span class=\"select2-match\">" + replacement + "</span>");
                response[_this.valueId] = underlined.join("");
                response["original"] = option[_this.valueId];
                return response;
            });
            // Reset active item.
            this.activeItem = 0;
        }
        else {
            this.filteredOptions = this.multiFilteredOption();
        }
    };
    /**
     * When item is scrolled.
     *
     * @param e
     */
    DroplistComponent.prototype.scrollOptions = function (e) {
        // filter 229 keyCodes (input method editor is processing key input)
        if (229 === e.keyCode)
            return;
        if (e.which === key_map_1.KEY.PAGE_UP || e.which === key_map_1.KEY.PAGE_DOWN) {
            // prevent the page from scrolling
            this.killEvent(e);
            return;
        }
        switch (e.which) {
            case key_map_1.KEY.UP:
                if (this.activeItem - 1 > -1) {
                    this.activeItem--;
                }
                this.killEvent(e);
                return;
            case key_map_1.KEY.DOWN:
                if (this.options[this.activeItem + 1]) {
                    this.activeItem++;
                }
                this.killEvent(e);
                return;
            case key_map_1.KEY.ENTER:
                this.selectOption(this.filteredOptions[this.activeItem]);
                this.killEvent(e);
                return;
            case key_map_1.KEY.TAB:
                this.selectOption(this.filteredOptions[this.activeItem]);
                this.closeSearch();
                return;
            case key_map_1.KEY.ESC:
                this.closeSearch();
                this.killEvent(e);
                return;
        }
    };
    /**
     * Selects the option.
     *
     * @param item
     * @param event
     */
    DroplistComponent.prototype.selectOption = function (item, event) {
        if (event === void 0) { event = null; }
        this.valueChange.emit(item[this.keyId]);
        this.closeSearch();
        if (event) {
            this.killEvent(event);
        }
    };
    /**
     * Closes the search container.
     */
    DroplistComponent.prototype.closeSearch = function () {
        this.isSearchHiddenChange.emit(true);
    };
    /**
     * Opens the search container.
     */
    DroplistComponent.prototype.openSearch = function () {
        this.isSearchHiddenChange.emit(false);
    };
    /**
     * Resets the search container.
     */
    DroplistComponent.prototype.resetSearch = function () {
        this.searchTerm = "";
        this.activeItem = 0;
        this.dropPosition = "below";
    };
    /**
     * Opens the search container at the correct position.
     */
    DroplistComponent.prototype.openListSelector = function (parent) {
        var _this = this;
        this.isInternalHidden = false;
        var rect = parent.getBoundingClientRect();
        var offset = {
            top: rect.top + this.document.body.scrollTop,
            left: rect.left + this.document.body.scrollLeft
        };
        var height = parent.offsetHeight;
        var dropHeight = this.listDropDownRef.nativeElement.offsetHeight;
        var windowHeight = this.window.innerHeight;
        var dropTop = offset.top + height;
        var viewportBottom = this.document.body.scrollTop + windowHeight;
        var enoughRoomBelow = dropTop + dropHeight <= viewportBottom;
        var enoughRoomAbove = (offset.top - dropHeight) >= this.document.body.scrollTop;
        var aboveNow = this.dropPosition === "above";
        var above = false;
        var changeDirection = false;
        if (aboveNow) {
            above = true;
            if (!enoughRoomAbove && enoughRoomBelow) {
                changeDirection = true;
                above = false;
            }
        }
        else {
            above = false;
            if (!enoughRoomBelow && enoughRoomAbove) {
                changeDirection = true;
                above = true;
            }
        }
        // if we are changing direction we need to get positions when dropdown is hidden;
        if (changeDirection) {
            this.isInternalHidden = true;
            height = parent.offsetHeight;
            dropHeight = this.listDropDownRef.nativeElement.offsetHeight;
            this.isInternalHidden = false;
        }
        this.updateDropPosition(above ? "above" : "below");
        this.displayPosition = {
            top: (above ? dropHeight * -1 : height) + "px",
            bottom: "auto"
        };
        // added delay to give time for display to be visible.
        setTimeout(function () {
            _this.listSearchRef.nativeElement.focus();
        }, 100);
    };
    /**
     * Kills the current event.
     *
     * @param event
     */
    DroplistComponent.prototype.killEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    DroplistComponent.prototype.onResize = function () {
        // Refresh position on resize.
        if (!this.isSearchHidden) {
            this.openListSelector(this.displayRef);
        }
    };
    DroplistComponent.prototype.onScroll = function () {
        // Refresh position on resize.
        if (!this.isSearchHidden) {
            this.openListSelector(this.displayRef);
        }
    };
    return DroplistComponent;
}());
__decorate([
    core_1.ViewChild("listDropDownRef"),
    __metadata("design:type", core_1.ElementRef)
], DroplistComponent.prototype, "listDropDownRef", void 0);
__decorate([
    core_1.ViewChild("listSearchRef"),
    __metadata("design:type", core_1.ElementRef)
], DroplistComponent.prototype, "listSearchRef", void 0);
__decorate([
    core_1.ViewChild("searchControl"),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "searchControl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "hasSearch", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DroplistComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "keyId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "valueId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DroplistComponent.prototype, "isSearchHidden", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", HTMLElement)
], DroplistComponent.prototype, "displayRef", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "dropPosition", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "valueChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "isSearchHiddenChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DroplistComponent.prototype, "dropPositionChange", void 0);
__decorate([
    core_1.HostListener("window:resize", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DroplistComponent.prototype, "onResize", null);
__decorate([
    core_1.HostListener("window:scroll", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DroplistComponent.prototype, "onScroll", null);
DroplistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "c-droplist",
        templateUrl: "droplist.component.html",
        styleUrls: ["droplist.component.css"]
    }),
    __metadata("design:paramtypes", [windowRefService_1.WindowRefService])
], DroplistComponent);
exports.DroplistComponent = DroplistComponent;
//# sourceMappingURL=droplist.component.js.map
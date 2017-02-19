"use strict";
var SelectAbstract = (function () {
    function SelectAbstract() {
        this.isSearchHidden = true;
        this.valueText = "";
        this.id = ++SelectAbstract.uniqueIndex;
    }
    /**
     * Opens the search container but resets text and sets selection to below.
     */
    SelectAbstract.prototype.openSearch = function () {
        this.isSearchHidden = false;
    };
    return SelectAbstract;
}());
SelectAbstract.uniqueIndex = 0;
exports.SelectAbstract = SelectAbstract;
//# sourceMappingURL=select.abstract.js.map
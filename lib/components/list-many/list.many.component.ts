import {Component, Input, ViewChild, EventEmitter, Output, OnChanges, ElementRef} from "@angular/core";
import {SelectAbstract} from "../../select.abstract";
import isPrimative from "../../utils/is.primative";

@Component({
    moduleId: module.id,
    selector: "c-list-many",
    templateUrl: "list.many.component.html",
    styleUrls: ["list.many.component.css"]
})
export class ListManyComponent extends SelectAbstract implements OnChanges {

    protected loading = true;
    protected keyList: Array<any> = [];
    protected valueList: Array<any> = [];
    protected dropPosition = "below";

    @ViewChild("listRef") public listRef: ElementRef;
    @ViewChild("listDisplayRef") protected listDisplayRef: ElementRef;

    @Input() public keyId = "key";
    @Input() public valueId = "value";
    @Input() public hasSearch = true;
    @Input() public placeholder = "";
    @Input() public searchTerm = "";
    @Input() public options: Array<any> = [];
    @Input() public value: any;
    @Output() public valueChange = new EventEmitter();

    /**
     * @inheritDoc
     */
    public ngOnChanges() {

        this.value = this.value || [];

        // Make sure value is not a primitive.
        if (isPrimative(this.value)) {
            return;
        }

        this.setValueListByKey();

        this.loading = false;
    }

    /**
     * Finds the text for the specified key.
     */
    public setValueListByKey() {
        if (this.options) {
            this.keyList = this.value
                .filter((value: any) => this.options.findIndex((option) => option[this.keyId] === value) !== -1)
                .map((value: any) => {
                    return this.options.find((option) => option[this.keyId] === value)[this.keyId];
                });
            this.valueList = this.value
                .filter((value: any) => this.options.findIndex((option) => option[this.keyId] === value) !== -1)
                .map((value: any) => {
                    return this.options.find((option) => option[this.keyId] === value)[this.valueId];
                });
        }
    }


    /**
     * When value is updates.
     *
     * @param event
     */
    public updateValue(event: Event) {
        this.value.push(event);
        this.setValueListByKey();
        this.valueChange.emit(this.value);
    }

    /**
     * Removes an item from the list.
     *
     * @param index
     * @param event
     */
    public removeItem(index: any, event: Event) {
        event.stopPropagation();
        this.value = this.value.filter(
            (option: any, i: any) => {
                return i !== index;
            }
        );
        this.setValueListByKey();
        this.valueChange.emit(this.value);
    }

}

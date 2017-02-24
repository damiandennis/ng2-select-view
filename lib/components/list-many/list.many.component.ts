import {
    Component,
    Input,
    ViewChild,
    ElementRef,
    forwardRef
} from "@angular/core";
import {SelectAbstract} from "../../select.abstract";
import isPrimative from "../../utils/is.primative";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "c-list-many",
    templateUrl: "list.many.component.html",
    styleUrls: ["list.many.component.css"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListManyComponent),
            multi: true
        }
    ]
})
export class ListManyComponent extends SelectAbstract implements ControlValueAccessor {

    protected loading = true;
    protected keyList: Array<any> = [];
    protected valueList: Array<any> = [];
    protected dropPosition = "below";
    propagateChange = (_: any) => {};

    @ViewChild("listRef") public listRef: ElementRef;
    @ViewChild("listDisplayRef") protected listDisplayRef: ElementRef;

    @Input() public keyId = "key";
    @Input() public valueId = "value";
    @Input() public hasSearch = true;
    @Input() public placeholder = "";
    @Input() public searchTerm = "";
    @Input() public options: Array<any> = [];
    public value: any;

    /**
     * Finds the text for the specified key.
     */
    public setValueListByKey() {
        if (this.options && this.value) {
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
        this.propagateChange(this.value);
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
        this.propagateChange(this.value);
    }

    /**
     * @inheritDoc
     */
    public writeValue(obj: any): void {

        // Make sure value is not a primitive.
        if (isPrimative(obj)) {
            return;
        }

        if (obj !== undefined) {
            this.value = obj;
            this.setValueListByKey();
        }

        this.loading = false;

    }

    /**
     * @inheritDoc
     */
    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /**
     * @inheritDoc
     */
    public registerOnTouched(fn: any): void {}

}

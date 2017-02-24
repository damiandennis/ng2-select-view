import {
    Component,
    Input,
    ViewChild,
    ElementRef,
    forwardRef
} from "@angular/core";
import {SelectAbstract} from "../../select.abstract";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "c-list-one",
    templateUrl: "list-one.component.html",
    styleUrls: ["list-one.component.css"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListOneComponent),
            multi: true
        }
    ]
})
export class ListOneComponent extends SelectAbstract implements ControlValueAccessor {

    protected dropPosition = "below";

    @ViewChild("listRef") protected listRef: ElementRef;
    @ViewChild("listDisplayRef") protected listDisplayRef: ElementRef;
    protected propagateChange = (_: any) => {};

    @Input() public options: Array<any> = [];
    @Input() public keyId = "key";
    @Input() public valueId = "value";
    @Input() public hasSearch = true;
    @Input() public placeholder = "";
    @Input() public searchTerm = "";
    protected loading = true;
    public value: any;

    /**
     * Updates the value from the search.
     *
     * @param value
     * @param event
     */
    public updateValue(value: any, event: Event) {
        this.value = value;
        this.setTextByKey();
    }

    /**
     * Finds the text for the specified key.
     */
    public setTextByKey() {
        if (this.options && this.value) {
            let index = this.options.findIndex((option) => option[this.keyId] === this.value);
            if (index !== -1) {
                this.valueText = this.options[index][this.valueId];
            }
        }
    }

    /**
     * @inheritDoc
     */
    public writeValue(obj: any): void {

        if (obj !== undefined) {
            this.value = obj;
            this.setTextByKey();
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

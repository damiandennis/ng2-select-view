import {Component, ElementRef, forwardRef, Input, ViewChild} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectAbstract} from "../../select.abstract";

@Component({
    selector: "c-search-one",
    templateUrl: "search-one.component.html",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchOneComponent),
            multi: true
        }
    ]
})
export class SearchOneComponent extends SelectAbstract implements ControlValueAccessor {

    protected dropPosition = "below";

    @ViewChild("listRef") protected listRef: ElementRef;
    @ViewChild("listDisplayRef") protected listDisplayRef: ElementRef;
    protected propagateChange = (_: any) => {};

    public options: Array<any> = [];
    @Input() public keyId = "key";
    @Input() public valueId = "value";
    @Input() public placeholder = "";
    @Input() public searchTerm = "";
    @Input() public isBlock = true;
    protected loading = true;
    public value: any;

    public writeValue(obj: any): void {
        if (obj !== undefined) {
            this.value = obj;
        }
        this.loading = false;
    }

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

}

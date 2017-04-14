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

    public dropPosition = "below";

    @ViewChild("listRef") public listRef: ElementRef;
    @ViewChild("listDisplayRef") public listDisplayRef: ElementRef;
    public propagateChange = (_: any) => {};

    public options: Array<any> = [];
    @Input() public keyId = "key";
    @Input() public valueId = "value";
    @Input() public placeholder = "";
    @Input() public searchTerm = "";
    @Input() public isBlock = true;
    public loading = true;
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

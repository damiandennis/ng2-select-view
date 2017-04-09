import { ElementRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { SelectAbstract } from "../../select.abstract";
export declare class SearchOneComponent extends SelectAbstract implements ControlValueAccessor {
    protected dropPosition: string;
    protected listRef: ElementRef;
    protected listDisplayRef: ElementRef;
    protected propagateChange: (_: any) => void;
    options: Array<any>;
    keyId: string;
    valueId: string;
    placeholder: string;
    searchTerm: string;
    isBlock: boolean;
    protected loading: boolean;
    value: any;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}

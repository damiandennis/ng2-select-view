import { ElementRef, OnChanges, SimpleChanges } from "@angular/core";
import { SelectAbstract } from "../../select.abstract";
import { ControlValueAccessor } from "@angular/forms";
export declare class ListOneComponent extends SelectAbstract implements ControlValueAccessor, OnChanges {
    protected dropPosition: string;
    protected listRef: ElementRef;
    protected listDisplayRef: ElementRef;
    protected propagateChange: (_: any) => void;
    options: Array<any>;
    keyId: string;
    valueId: string;
    hasSearch: boolean;
    placeholder: string;
    searchTerm: string;
    isBlock: boolean;
    protected loading: boolean;
    value: any;
    /**
     * Updates the value from the search.
     *
     * @param value
     * @param event
     */
    updateValue(value: any, event: Event): void;
    /**
     * Finds the text for the specified key.
     */
    setTextByKey(): void;
    /**
     * @inheritDoc
     */
    writeValue(obj: any): void;
    /**
     * @inheritDoc
     */
    registerOnChange(fn: any): void;
    /**
     * @inheritDoc
     */
    registerOnTouched(fn: any): void;
    /**
     * @inheritDoc
     */
    ngOnChanges(changes: SimpleChanges): void;
}

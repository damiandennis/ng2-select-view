import { ElementRef } from "@angular/core";
import { SelectAbstract } from "../../select.abstract";
import { ControlValueAccessor } from "@angular/forms";
export declare class ListManyComponent extends SelectAbstract implements ControlValueAccessor {
    protected loading: boolean;
    protected keyList: Array<any>;
    protected valueList: Array<any>;
    protected dropPosition: string;
    propagateChange: (_: any) => void;
    listRef: ElementRef;
    protected listDisplayRef: ElementRef;
    keyId: string;
    valueId: string;
    hasSearch: boolean;
    placeholder: string;
    searchTerm: string;
    options: Array<any>;
    value: any;
    /**
     * Finds the text for the specified key.
     */
    setValueListByKey(): void;
    /**
     * When value is updates.
     *
     * @param event
     */
    updateValue(event: Event): void;
    /**
     * Removes an item from the list.
     *
     * @param index
     * @param event
     */
    removeItem(index: any, event: Event): void;
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
}

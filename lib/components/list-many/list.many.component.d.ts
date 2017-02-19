import { EventEmitter, OnChanges, ElementRef } from "@angular/core";
import { SelectAbstract } from "../../select.abstract";
export declare class ListManyComponent extends SelectAbstract implements OnChanges {
    protected loading: boolean;
    protected keyList: Array<any>;
    protected valueList: Array<any>;
    protected dropPosition: string;
    listRef: ElementRef;
    protected listDisplayRef: ElementRef;
    keyId: string;
    valueId: string;
    hasSearch: boolean;
    placeholder: string;
    searchTerm: string;
    options: Array<any>;
    value: any;
    valueChange: EventEmitter<{}>;
    /**
     * @inheritDoc
     */
    ngOnChanges(): void;
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
}

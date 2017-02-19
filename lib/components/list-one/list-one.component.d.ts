import { EventEmitter, OnInit, ElementRef } from "@angular/core";
import { SelectAbstract } from "../../select.abstract";
export declare class ListOneComponent extends SelectAbstract implements OnInit {
    protected dropPosition: string;
    protected listRef: ElementRef;
    protected listDisplayRef: ElementRef;
    options: Array<any>;
    keyId: string;
    valueId: string;
    hasSearch: boolean;
    placeholder: string;
    searchTerm: string;
    value: any;
    valueChange: EventEmitter<{}>;
    /**
     * @inheritDoc
     */
    ngOnInit(): void;
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
}

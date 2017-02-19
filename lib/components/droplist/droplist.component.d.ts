import { OnInit, AfterViewInit, EventEmitter, OnChanges, ElementRef } from "@angular/core";
import { WindowRefService } from "../../services/windowRefService";
export declare class DroplistComponent implements OnInit, AfterViewInit, OnChanges {
    protected winRef: WindowRefService;
    protected listDropDownRef: ElementRef;
    protected listSearchRef: ElementRef;
    protected searchControl: any;
    protected window: Window;
    protected document: Document;
    protected displayPosition: {};
    protected activeItem: number;
    protected filteredOptions: Array<any>;
    protected searchTerm: string;
    protected isInternalHidden: boolean;
    hasSearch: boolean;
    placeholder: string;
    options: Array<any>;
    value: any;
    keyId: string;
    valueId: string;
    isSearchHidden: boolean;
    displayRef: HTMLElement;
    dropPosition: string;
    valueChange: EventEmitter<{}>;
    isSearchHiddenChange: EventEmitter<{}>;
    dropPositionChange: EventEmitter<{}>;
    constructor(winRef: WindowRefService);
    /**
     * @inheritDoc
     */
    ngOnInit(): void;
    /**
     * If its a multiple selection.
     *
     * @returns {any}
     */
    multiFilteredOption(): any;
    /**
     * @inheritDoc
     */
    ngOnChanges(changes: any): void;
    /**
     * @inheritDoc
     */
    ngAfterViewInit(): void;
    /**
     * Updates the drop position.
     * @param value
     */
    updateDropPosition(value: any): void;
    /**
     * Filters the search response.
     *
     * @returns {any}
     */
    filterOptions(): void;
    /**
     * When item is scrolled.
     *
     * @param e
     */
    scrollOptions(e: any): void;
    /**
     * Selects the option.
     *
     * @param item
     * @param event
     */
    selectOption(item: any, event?: Event): void;
    /**
     * Closes the search container.
     */
    closeSearch(): void;
    /**
     * Opens the search container.
     */
    openSearch(): void;
    /**
     * Resets the search container.
     */
    resetSearch(): void;
    /**
     * Opens the search container at the correct position.
     */
    openListSelector(parent: HTMLElement): void;
    /**
     * Kills the current event.
     *
     * @param event
     */
    protected killEvent(event: Event): void;
    onResize(): void;
    onScroll(): void;
}

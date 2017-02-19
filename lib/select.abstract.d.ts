export declare class SelectAbstract {
    static uniqueIndex: number;
    protected id: any;
    protected isSearchHidden: boolean;
    protected valueText: string;
    constructor();
    /**
     * Opens the search container but resets text and sets selection to below.
     */
    openSearch(): void;
}

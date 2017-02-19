export class SelectAbstract {

    public static uniqueIndex = 0;

    protected id: any;
    protected isSearchHidden: boolean = true;
    protected valueText = "";

    constructor() {
        this.id = ++SelectAbstract.uniqueIndex;
    }

    /**
     * Opens the search container but resets text and sets selection to below.
     */
    public openSearch() {
        this.isSearchHidden = false;
    }

}

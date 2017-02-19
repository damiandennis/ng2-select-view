import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    OnInit, ElementRef
} from "@angular/core";
import {SelectAbstract} from "../../select.abstract";



@Component({
    moduleId: module.id,
    selector: "c-list-one",
    templateUrl: "list-one.component.html",
    styleUrls: ["list-one.component.css"]
})
export class ListOneComponent extends SelectAbstract implements OnInit {

    protected dropPosition = "below";

    @ViewChild("listRef") protected listRef: ElementRef;
    @ViewChild("listDisplayRef") protected listDisplayRef: ElementRef;

    @Input() public options: Array<any> = [];
    @Input() public keyId = "key";
    @Input() public valueId = "value";
    @Input() public hasSearch = true;
    @Input() public placeholder = "";
    @Input() public searchTerm = "";
    @Input() public value: any;
    @Output() public valueChange = new EventEmitter();

    /**
     * @inheritDoc
     */
    public ngOnInit() {
        if (this.value) {
            this.setTextByKey();
        }
    }

    /**
     * Updates the value from the search.
     *
     * @param value
     * @param event
     */
    public updateValue(value: any, event: Event) {
        this.value = value;
        this.setTextByKey();
        this.valueChange.emit(event);
    }

    /**
     * Finds the text for the specified key.
     */
    public setTextByKey() {
        let index = this.options.findIndex((option) => option[this.keyId] === this.value);
        if (index !== -1) {
            this.valueText = this.options[index][this.valueId];
        }
    }

}

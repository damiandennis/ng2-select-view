import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {WindowRefService} from "./services/windowRefService";
import {ListOneComponent} from "./components/list-one/list-one.component";
import {ListManyComponent} from "./components/list-many/list.many.component";
import {DroplistComponent} from "./components/droplist/droplist.component";
import {CommonModule} from "@angular/common";
import {SearchOneComponent} from "./components/search-one/search-one.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DroplistComponent,
        ListOneComponent,
        ListManyComponent,
        SearchOneComponent
    ],
    exports: [
        ListOneComponent,
        ListManyComponent,
        DroplistComponent,
        SearchOneComponent
    ],
    providers: [
        WindowRefService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectViewModule {}
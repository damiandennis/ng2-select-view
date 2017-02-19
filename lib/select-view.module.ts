import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {WindowRefService} from "./services/windowRefService";
import {ListOneComponent} from "./components/list-one/list-one.component";
import {ListManyComponent} from "./components/list-many/list.many.component";
import {DroplistComponent} from "./components/droplist/droplist.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        DroplistComponent,
        ListOneComponent,
        ListManyComponent
    ],
    exports: [
        ListOneComponent,
        ListManyComponent
    ],
    providers: [
        WindowRefService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectViewModule {}
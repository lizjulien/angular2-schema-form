import { Component } from "@angular/core";

import { ControlWidget } from '../../widget';
import { TinyMCEComponent } from "./tinymce.component";
import { TinyMCEValueAccessor } from "./tinymce.valueaccessor";

@Component({
	selector: "ng2sf-tinymce",
	template: require("./tinymce.widget.html"),
})
export class TinyMCEWidget extends ControlWidget {}

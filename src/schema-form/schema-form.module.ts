import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { FormElementComponent } from './formelement.component';
import { FormComponent } from './form.component';
import { WidgetChooserComponent } from './widgetchooser.component';

import { TinyMCEComponent } from "./defaultwidgets/tinymce/tinymce.component";
import { TinyMCEValueAccessor } from "./defaultwidgets/tinymce/tinymce.valueaccessor";

import {
  ArrayWidget,
  ObjectWidget,
  CheckboxWidget,
  FileWidget,
  IntegerWidget,
  TextAreaWidget,
  RadioWidget,
  RangeWidget,
  SelectWidget,
  StringWidget,
  TinyMCEWidget
} from './defaultwidgets';

@NgModule({
  imports : [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormElementComponent,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
    TinyMCEWidget,
    TinyMCEComponent,
    TinyMCEValueAccessor
  ],
  entryComponents: [
    FormElementComponent,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
    TinyMCEWidget
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
    TinyMCEWidget
  ]
})
export class SchemaFormModule {}

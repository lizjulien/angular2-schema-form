import { Component, AfterViewInit } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-multiple-widget',
  template: require('./multiple.widget.html')
})
export class MultipleWidget extends ControlWidget implements AfterViewInit {
  constructor() {
    super();
  }

  ngAfterViewInit() {
     this.formProperty.valueChanges.subscribe((newValue) => {
       if (this.control.value !== newValue) {

        this.schema.collection.forEach(element => {
          newValue.forEach(checked => {
            if (checked === element.key) {
              element.checked = true;
            }
          });
        });
      }
     });
  }

  check(checked) {
    if (!this.formProperty.value) {
      this.formProperty.setValue([], false);
    }

    this.schema.collection.forEach(element => {
      if (checked === element.key && !element.checked) {
        element.checked = true;
        this.formProperty.value.push(element.key);
      } else if (checked === element.key) {
        element.checked = false;
        let index = this.formProperty.value.indexOf(element.key);
        this.formProperty.value.splice(index, 1);
      }
    });
  }
}

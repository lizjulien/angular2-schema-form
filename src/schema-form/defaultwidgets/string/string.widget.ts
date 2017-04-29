import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-string-widget',
  template: require('./string.widget.html')
})
export class StringWidget extends ControlWidget {

    getInputType() {
        if (!this.schema.widget.id || this.schema.widget.id === 'string' || this.schema.widget.id === 'auto-complete') {
            return 'text';
        } else {
            return this.schema.widget.id;
        }
    }
}

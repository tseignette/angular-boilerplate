import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit, OnDestroy {

  /**
   * FormControl to update
   */
  @Input() form: FormControl;

  /**
   * Left choice
   */
  @Input() left: string;

  /**
   * Right choice
   */
  @Input() right: string;

  private valueChangesSub: Subscription;

  choice: 'left'|'right';

  constructor() { }

  ngOnInit() {
    // Listening to form value change to update toggler state
    this.valueChangesSub = this.form.valueChanges.subscribe(() => {
      this.updateChoiceAccordingToForm();
    });

    // If no value is set, default is left
    if (this.form.value) {
      this.updateChoiceAccordingToForm();
    }
    else {
      this.choose(this.left);
    }
  }

  ngOnDestroy() {
    if (this.valueChangesSub) {
      this.valueChangesSub.unsubscribe();
    }
  }

  updateChoiceAccordingToForm() {
    this.choice = this.form.value === this.left ? 'left' : 'right';
  }

  toggleChoice() {
    this.choose(this.choice === 'left' ? this.right : this.left);
  }

  choose(value: string) {
    this.form.setValue(value);
  }

}

import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';

/**
 * Buttons can have 3 behaviors:
 *  - as a button (onClick)
 *  - as an internal link (link, onClick)
 *  - as an external link (href, target, onClick)
 * 
 * and 2 types:
 *  - button (icon, iconOnly, light)
 *  - link (icon, light)
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit {

  /**
   * Button link
   */
  @Input() href = '';

  /**
   * Icon (before label for button, after label for link), should be a Font Awesome class
   */
  @Input() icon: string;

  /**
   * Adapt button style if there is no label
   */
  @Input() iconOnly = false;

  /**
   * Adapt button style if background is dark
   */
  @Input() light: boolean | '' = false;

  /**
   * Parameter given to RouterLink directive
   */
  @Input() link: string | any[];

  /**
   * Button link target
   */
  @Input() target = '';

  /**
   * Button type
   */
  @Input() type: 'normal'|'link' = 'normal';

  /**
   * Emitted on button click
   */
  @Output() onClick = new EventEmitter<MouseEvent>();

  CSSClasses;

  constructor() { }

  ngOnInit() {
    this.computeClasses();
  }

  ngOnChanges() {
    this.computeClasses();
  }

  computeClasses() {
    this.CSSClasses = { light: (this.light === true) || (this.light === '') };
    this.CSSClasses[this.type] = true;

    if (this.type === 'normal') {
      this.CSSClasses.iconOnly = this.iconOnly !== false;
    }
  }

  __onClick($event: MouseEvent) {
    this.onClick.emit($event);
  }

}

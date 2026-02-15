import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agriculture-sec1',
  templateUrl: './agriculture-sec1.component.html',
  styleUrls: ['./agriculture-sec1.component.css']
})
export class AgricultureSec1Component {

  @Input() title!: string;
  @Input() subtitle!: string;

  @Input() card1Image!: string;
  @Input() card1Title!: string;
  @Input() card1Description!: string;

  @Input() card2Image!: string;
  @Input() card2Title!: string;
  @Input() card2Description!: string;

}

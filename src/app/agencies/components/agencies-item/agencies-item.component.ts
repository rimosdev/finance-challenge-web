import { Component, OnInit, Input } from '@angular/core';
import { IAgency } from '../../models/agency';

@Component({
  selector: 'app-agencies-item',
  templateUrl: './agencies-item.component.html',
  styleUrls: ['./agencies-item.component.scss']
})
export class AgenciesItemComponent implements OnInit {

  @Input() agency: IAgency;

  constructor() { }

  ngOnInit(): void {
  }

}

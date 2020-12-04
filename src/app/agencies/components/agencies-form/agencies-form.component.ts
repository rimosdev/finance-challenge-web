import { Component, OnInit } from '@angular/core';
import { IAgency } from '../../models/agency';

@Component({
  selector: 'app-agencies-form',
  templateUrl: './agencies-form.component.html',
  styleUrls: ['./agencies-form.component.scss']
})
export class AgenciesFormComponent implements OnInit {

  agency: IAgency;

  constructor() {
    this.agency = {
      agencia: '',
      departamento: '',
      direccion: '',
      distrito: '',
      lat: 0,
      lon: 0,
      provincia: '',
      featured: false
    }
  }

  ngOnInit(): void {
  }

}

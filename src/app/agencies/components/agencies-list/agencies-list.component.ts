import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../../services/agencies.service';
import { IAgency } from '../../models/agency';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {

  agencies: IAgency[];
  constructor(
    private agenciesService: AgenciesService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.agencies = [];
  }

  ngOnInit(): void {
    this.getAgencies();
  }

  getAgencies() {
    this.agenciesService.getAgencies().subscribe(agencies => {
      this.agencies = agencies;
      console.log(agencies);
    });
  }

  addAgency() {
    this.router.navigate(['/add']);
  }

}

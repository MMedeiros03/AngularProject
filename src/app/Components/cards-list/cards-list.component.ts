import { Component, OnInit } from '@angular/core';
import { GetUnitsService } from 'src/app/Services/get-units.service';
import { Location } from 'src/app/Types/location-interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  unitsList : Location[] = [];

  constructor(private unitService : GetUnitsService) { 

  }

  ngOnInit(): void {
    this.unitsList = this.unitService.getFilteredUnits(); 
  }

}

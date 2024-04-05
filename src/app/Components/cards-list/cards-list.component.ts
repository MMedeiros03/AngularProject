import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from 'src/app/Services/get-units.service';
import { Location } from 'src/app/Types/location-interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() unitsList : Location[] = [];

  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.unitsList)
  }

}

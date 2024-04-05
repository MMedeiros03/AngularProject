import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './Types/location-interface';
import { GetUnitsService } from './Services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';

  showList = new BehaviorSubject(false);
  unitsList : Location[] = []

  constructor(private unitService : GetUnitsService){

  }

  onSubmit(){
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }

}



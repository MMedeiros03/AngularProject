import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/Services/get-units.service';
import { Location } from 'src/app/Types/location-interface';
import { FilterUnitsService } from 'src/app/Services/filter-units.service';

@Component({
selector: 'app-forms',
templateUrl: './forms.component.html',
styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

results: Location[] = [];
filteredResults: Location[] = [];
form!: FormGroup;

constructor(private formBuilder : FormBuilder, 
            private unitService : GetUnitsService,
            private filterUnitService : FilterUnitsService) { }

ngOnInit(): void {
  this.form = this.formBuilder.group({
    hour: '',
    showClosed : true
  })

  this.unitService.getAllUnits().subscribe(data => {
    this.results = data;
    this.filteredResults = data;
  });
}



onClean() : void{
  this.form.reset();
}

onSubmit() : void{
  let { showClosed, hour } = this.form.value;

  this.filteredResults = this.filterUnitService.filter(this.results, showClosed, hour);
  this.unitService.setFilteredUnits(this.filteredResults);
}


}

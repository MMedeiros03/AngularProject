import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/Services/get-units.service';
import { Location } from 'src/app/Types/location-interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results: Location[] = [];
  filteredResults: Location[] = [];
  form!: FormGroup;

  constructor(private formBuilder : FormBuilder, private unitService : GetUnitsService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hour: '',
      showClosed : true
    })

    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onClean() : void{
    this.form.reset();
  }

  onSubmit() : void{
    if(!this.form.value.showClosed){
      this.filteredResults = this.results.filter( location => location.opened === true)
    }else{
      this.filteredResults = this.results;
    }
  }
  

}

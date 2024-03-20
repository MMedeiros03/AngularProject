import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/Services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results = [];
  form!: FormGroup;

  constructor(private formBuilder : FormBuilder, private unitService : GetUnitsService) { }

  ngOnInit(): void {

    this.unitService.getAllUnits().subscribe(data => console.log(data));

    this.form = this.formBuilder.group({
      hour: '',
      showClosed : false
    })
  }

  onClean() : void{
    this.form.reset();
  }

  onSubmit() : void{
    console.log(this.form.value);
  }
  

}

import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/Types/location-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card! : Location;

  constructor() { }

  ngOnInit(): void {
  }

}

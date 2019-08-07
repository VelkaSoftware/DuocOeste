import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() area: string;

  constructor() { }

  ngOnInit() {
  }

}

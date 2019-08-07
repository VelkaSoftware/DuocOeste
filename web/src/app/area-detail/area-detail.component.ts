import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.css']
})
export class AreaDetailComponent implements OnInit {

  @Input() area: string;

  constructor() { }

  ngOnInit() {
  }

}

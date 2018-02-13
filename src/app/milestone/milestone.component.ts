import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
  bar_color = 'primary';
  mode = 'determinate';
  value = 50;
  // bufferValue = 100;

  constructor() { }

  ngOnInit() {
  }

}

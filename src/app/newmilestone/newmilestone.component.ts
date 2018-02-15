import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MilestoneStoreService } from '../service/milestone-store.service';
import { Milestone, MilestoneMaker } from '../model/milestone';

@Component({
  selector: 'app-newmilestone',
  templateUrl: './newmilestone.component.html',
  styleUrls: ['./newmilestone.component.css']
})
export class NewmilestoneComponent implements OnInit {
  title = '';
  days: number[] = [];
  startDate = '';
  endDate = '';

  constructor(public msStore: MilestoneStoreService,
              public router: Router) { }

  public ms = new MilestoneMaker( this.title, this.days, this.startDate, this.endDate, 0 );

  saveMilestone() {
    this.ms.name = this.title;
    this.ms.days = this.days;
    this.ms.startDate = this.startDate.toString();
    this.ms.endDate = this.endDate.toString();
    console.log(this.ms);
    this.msStore.addmilestone(this.ms);
    this.router.navigate(['/dashboard']);
  }
  cancel() {
    this.title = '';
    this.days = [];
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Milestone } from '../../model/milestone';
import { MilestoneStoreService } from '../../service/milestone-store.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  milestonelist = this.msStore.milestones;
  public displayMilestoneName = this.msStore.calendarMilestone;

  constructor(public msStore: MilestoneStoreService) { }


    getColor(d) {
      document.getElementById(d.getDate().toString()).classList.add('active');
    }

  ngOnInit() {
    if (this.displayMilestoneName != null) {
      this.displayMilestoneName = this.msStore.calendarMilestone;
    }

  var d = new Date();
  this.getColor(d);

  }

}

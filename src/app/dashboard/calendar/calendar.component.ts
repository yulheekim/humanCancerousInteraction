import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Milestone } from '../../model/milestone';
import { Calendar } from '../../model/calendar';
import { MilestoneStoreService } from '../../service/milestone-store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit, AfterContentChecked {
  public milestonelist = this.msStore.milestones;
  public calendarMilestone = this.msStore.calendarMilestone;
  public displayMilestoneName = '';
  // public testText = 'testName';

  getName() {
    this.displayMilestoneName = this.msStore.calendarMilestoneName;
  }

  ngAfterContentChecked() {
    this.getName();
  }

  constructor(public msStore: MilestoneStoreService) { }

  getColor(d) {
    document.getElementById(d.getDate().toString()).classList.add('active');

  }


  ngOnInit() {
    if (this.displayMilestoneName !== null) {
      this.calendarMilestone = this.msStore.calendarMilestone;
    }

    const d = new Date();
    this.getColor(d);

  }
}

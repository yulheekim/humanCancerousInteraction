import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MilestoneStoreService } from '../service/milestone-store.service';
import { Milestone, MilestoneMaker } from '../model/milestone';
import {isDate} from 'util';

@Component({
  selector: 'app-newmilestone',
  templateUrl: './newmilestone.component.html',
  styleUrls: ['./newmilestone.component.css']
})
export class NewmilestoneComponent implements OnInit {
  title = '';
  mon = false;
  tue = false;
  wed = false;
  thurs = false;
  fri = false;
  sat = false;
  sun = false;
  daysBool: boolean[] = [this.mon, this.tue, this.wed, this.thurs, this.fri, this.sat, this.sun];
  days: string[] = [];
  startDate = '';
  endDate = '';
  dayseum = {0: 'mon', 1: 'tue', 2: 'wed', 3: 'thurs', 4: 'fri', 5: 'sat', 6: 'sun'};

  constructor(public msStore: MilestoneStoreService,
              public router: Router) { }

  public ms = new MilestoneMaker( this.title, this.days, this.daysBool, this.startDate, this.endDate, 0 );

  freqCheck() {
    this.daysBool[0] = this.mon;
    this.daysBool[1] = this.tue;
    this.daysBool[2] = this.wed;
    this.daysBool[3] = this.thurs;
    this.daysBool[4] = this.fri;
    this.daysBool[5] = this.sat;
    this.daysBool[6] = this.sun;

    for (let i = 0; i < this.daysBool.length; i++) {
      if (this.daysBool[i]) {
        this.days.push(this.dayseum[i]);
      }
    }
  }

  // freqcheckString() {
  //   for (let i = 0; i < this.days.length; i++) {
  //     this.ms.days[i] = 0;
  //   }
  // }
  //

  saveMilestone() {
    this.freqCheck();
    // date input should not be empy
    // startdate must be prior to end date
    if (this.startDate === '' || this.endDate === '' || this.endDate < this.startDate) {
      alert('check your date');
      return 0;
    }
    // date should be in date format
    if ( !(isDate(this.startDate) && isDate(this.endDate)) ) {
      alert('choose a date');
      return 0;
    }

    this.ms.name = this.title;
    this.ms.days = this.days;
    this.ms.startDate = this.startDate;
    this.ms.endDate = this.endDate;
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

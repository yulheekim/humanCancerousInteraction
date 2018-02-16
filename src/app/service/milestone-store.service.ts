import { Injectable } from '@angular/core';
import { Milestone } from '../model/milestone';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class MilestoneStoreService {
  milestones: Milestone[] = [];
  calendarMilestone: Milestone;
  calendarMilestoneName = '';

  getDisplayName() {
    this.calendarMilestoneName = this.calendarMilestone.name;
    console.log(this.calendarMilestoneName);
    // return this.calendarMilestoneName;
  }

  addmilestone(ms) {
    this.milestones.push(ms);
  }

  constructor() { }

}

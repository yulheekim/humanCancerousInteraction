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

  indexChecker(ms) {
    if (ms.id === 0) {
      return;
    }
    // check for empty spaces in array
    for (let i = 0; i < this.milestones.length; i++) {
      if (this.milestones[i] === null) {
        ms.id = i;
        return;
      }
    }
    // if (this.milestones[this.milestones.length] !== null) {
    //   ms.id++;
    // }
  }

  addmilestone(ms) {
    this.indexChecker(ms);
    this.milestones.push(ms);
  }

  constructor() { }

}

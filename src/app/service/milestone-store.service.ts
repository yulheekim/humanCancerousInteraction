import { Injectable } from '@angular/core';
import { Milestone } from '../model/milestone';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class MilestoneStoreService {
  milestones: Milestone[] = [];
  calendarMilestone: Milestone;
  calendarMilestoneName = '';
  tempms: Milestone = null;
  editdecide=false;

  getDisplayName() {
    this.calendarMilestoneName = this.calendarMilestone.name;
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
  }

  addmilestone(ms) {
    this.indexChecker(ms);
    this.milestones.push(ms);
  }

  deletemilestone(ms) {
    for (let i = 0; i < this.milestones.length; i++) {
      if(ms.id === this.milestones[i].id) {
        this.milestones[i] = null;
        return;
      }
    }
  }

  editmilestone() {
    this.editdecide = true;
  }

  constructor() { }

}

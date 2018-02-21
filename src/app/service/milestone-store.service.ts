import { Injectable } from '@angular/core';
import { Milestone } from '../model/milestone';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class MilestoneStoreService {
  milestones: Milestone[] = [];
  calendarMilestone: Milestone;
  calendarMilestoneName = '';
  tempms: Milestone = null;
  editdecide = false;

  getDisplayName() {
    this.calendarMilestoneName = this.calendarMilestone.name;
    // return this.calendarMilestoneName;
  }

  array_sorter() {
    const new_arr = this.milestones.filter(function(n) { return n !== null; });
    console.log('arr_sorter: ' + new_arr.length);
    for (let i = 0; i < new_arr.length; i++) {
      new_arr[i].id = i;
      console.log('index reassigned');
    }
    this.milestones = new_arr;
  }

  addmilestone(ms) {
    // this.indexChecker(ms);
    if (this.milestones[ms.id] !== null) {
      this.milestones[ms.id] = ms;
    } else {
      // this.array_sorter();
      this.milestones.push(ms);
    }
    this.array_sorter();
    console.log(this.milestones);
  }

  deletemilestone(ms) {
    for (let i = 0; i < this.milestones.length; i++) {
      if (ms.id === this.milestones[i].id) {
        this.milestones[i] = null;
        return;
      }
    }
    this.array_sorter();
  }

  editmilestone() {
    this.editdecide = true;
  }

  constructor() { }

}

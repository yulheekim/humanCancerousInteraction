import { Injectable } from '@angular/core';
import { Milestone } from '../model/milestone';

@Injectable()
export class MilestoneStoreService {
  milestones: Milestone[] = [];
  calendarMilestone?: Milestone;

  addmilestone(ms) {
    this.milestones.push(ms);
  }

  constructor() { }

}

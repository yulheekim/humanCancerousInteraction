import { Injectable } from '@angular/core';
import { CalendarComponent } from '../dashboard/calendar/calendar.component';
import { SideboardComponent } from '../dashboard/sideboard/sideboard.component';
import { Milestone } from '../model/milestone';

@Injectable()
export class CalendarcolorService {

  complete() {
    const d = new Date();
    document.getElementById(d.getDate().toString()).classList.add('active');
    document.getElementById(d.getDate().toString()).style['background-color'] = 'limegreen';
    document.getElementById(d.getDate().toString()).style['color'] = 'white';
  }

  incomplete() {
    const d = new Date();
    document.getElementById(d.getDate().toString()).classList.add('active');
    document.getElementById(d.getDate().toString()).style['background-color'] = 'tomato';
    document.getElementById(d.getDate().toString()).style['color'] = 'white';
  }

  update_days_to_work(ms) {
    for (let i = 1; i < 29; i++) {
      if (ms.calender[i] !== null) {
        document.getElementById(`${i}`).classList.remove('active');
      }
    }
    for (let i = 1; i < ms.endDate; i++) {
      if (ms.calender[i] === 1) {
        document.getElementById(`${i}`).classList.add('active');
      } else if (ms.calender[i] === 2) {
      //   document.getElementById(`${i}`).style['background-color'] = 'limegreen';
      // } else if (ms.calendar[i] === 3) {
      //   document.getElementById(`${i}`).style['background-color'] = 'tomato';
      }
    }
  }

  constructor() { }

}

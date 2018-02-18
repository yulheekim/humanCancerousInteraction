import { Injectable } from '@angular/core';
import { CalendarComponent } from '../dashboard/calendar/calendar.component';
import { SideboardComponent } from '../dashboard/sideboard/sideboard.component';

@Injectable()
export class CalendarcolorService {


  complete() {
    const d = new Date();
    document.getElementById(d.getDate().toString()).classList.add('active');
    document.getElementById(d.getDate().toString()).style['background-color'] = "limegreen";
    document.getElementById(d.getDate().toString()).style['color'] = "white";
  }

  incomplete() {
    const d = new Date();
    document.getElementById(d.getDate().toString()).classList.add('active');
    document.getElementById(d.getDate().toString()).style['background-color'] = "tomato";
  }

  constructor() { }

}

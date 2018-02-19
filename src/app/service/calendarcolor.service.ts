import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { CalendarComponent } from '../calendar/calendar.component';
import { SideboardComponent } from '../sideboard/sideboard.component';

@Injectable()
export class CalendarcolorService {
  // calColor:CalendarComponent;
  // sideboard:SideboardComponent;
=======
import { CalendarComponent } from '../dashboard/calendar/calendar.component';
import { SideboardComponent } from '../dashboard/sideboard/sideboard.component';

@Injectable()
export class CalendarcolorService {
>>>>>>> fab617f670bad9595e1075895792bdadd3700584


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

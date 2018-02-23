import { Component, OnInit } from '@angular/core';
import { MilestoneStoreService } from '../../service/milestone-store.service';
import { Milestone } from '../../model/milestone';
import { CalendarcolorService } from '../../service/calendarcolor.service';


@Component({
  selector: 'app-sideboard',
  templateUrl: './sideboard.component.html',
  styleUrls: ['./sideboard.component.css']
})
export class SideboardComponent implements OnInit {
  public msStoreList = this.msStore.milestones;
  checklist: number[] = [];

  // returns the weekday as a number
  public today = new Date().getDay(); // 5 = saturday
  public today_date = new Date().getDate();


  constructor(public msStore: MilestoneStoreService,
              public calColor: CalendarcolorService) { }


  doChecker() {
    for (let i = 0; i < this.msStoreList.length; i++) {
      if (this.msStoreList[i].daysBool[this.today]) {
        this.msStoreList[i].shouldDo = true;
      }
    }
  }

  complete(i) {
    document.getElementById('milestone-box-'+`${i}`).style['background-color'] = 'limegreen';
    document.getElementById('milestone-box-'+`${i}`).style.width = '8rem';
    document.getElementById('yes-btn-'+`${i}` ).style.display = 'none';
    document.getElementById('no-btn-'+`${i}`).style.display = 'none';
    console.log(this.msStore);
    console.log(this.today_date);
    // this.msStore.obs_milestones.subscribe(((val) => {
    //   this.msStoreList = val;
    // }));
    this.msStoreList[i].calender[this.today_date] = 2;
    this.calColor.complete();
  }

  incomplete(i) {
    document.getElementById('milestone-box-'+`${i}`).style['background-color'] = 'tomato';
    document.getElementById('milestone-box-'+`${i}`).style.width = '8rem';
    document.getElementById('yes-btn-'+`${i}`).style.display = 'none';
    document.getElementById('no-btn-'+`${i}`).style.display = 'none';
    console.log(this.today_date);
    this.msStoreList[i].calender[this.today_date] = 3;
    this.calColor.incomplete();
  }

  ngOnInit() {
    this.doChecker();
  }

}

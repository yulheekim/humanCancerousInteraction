import { Component, OnInit } from '@angular/core';
import { MilestoneStoreService } from '../../service/milestone-store.service';
import { Milestone } from '../../model/milestone';

@Component({
  selector: 'app-sideboard',
  templateUrl: './sideboard.component.html',
  styleUrls: ['./sideboard.component.css']
})
export class SideboardComponent implements OnInit {
  public msStoreList = this.msStore.milestones;
  checklist: number[] = [];
  // shouldDo = false;

  // returns the weekday as a number
  public today = new Date().getDay() - 1; //5= saturday


  constructor(public msStore: MilestoneStoreService) { }

  doChekcer() {
    for (let i = 0; i < this.msStoreList.length; i++) {
      if (this.msStoreList[i].daysBool[this.today]) {
        this.msStoreList[i].shouldDo = true;
      }
    }
  }


  complete() {
    document.getElementById("milestone_box").style['background-color'] = "limegreen";

  }

  incomplete() {
    document.getElementById("milestone_box").style['background-color'] = "tomato";
  }

  ngOnInit() {
    this.doChekcer();
    console.log(this.today);
    // for (let j = 0; j < this.msStoreList.length; j++) {
    //   if (this.msStoreList[j].days.length !== 0) {
    //     for (let i = 0; i < this.msStoreList[j].daysBool.length; i++) {
    //       if (this.msStoreList[j].daysBool[i] === true) {
    //         this.checklist.push(i);
    //       }
    //     }
    //   }
    // }
  }

}

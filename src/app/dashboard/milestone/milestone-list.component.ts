import { Component, OnInit, Input } from '@angular/core';
import { Milestone } from '../../model/milestone';
import { MilestoneStoreService } from '../../service/milestone-store.service';

@Component({
  selector: 'app-milestone-list',
  templateUrl: './milestone-list.component.html',
  styleUrls: ['./milestone-list.component.css']
})
export class MilestoneListComponent implements OnInit {
  bar_color = 'primary';
  mode = 'determinate';
  public msStoreList = this.msStore.milestones;

  constructor(private msStore: MilestoneStoreService) { }

  ngOnInit() {
  }

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule, MatProgressBarModule, MatButtonModule } from '@angular/material';
// import { MatProgressBarModule } from '@angular/material/progress-bar';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SideboardComponent } from './sideboard/sideboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MilestoneComponent,
    CalendarComponent,
    SideboardComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

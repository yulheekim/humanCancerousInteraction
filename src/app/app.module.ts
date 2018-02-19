import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule, MatProgressBarModule, MatButtonModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MilestoneListComponent } from './dashboard/milestone/milestone-list.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { SideboardComponent } from './dashboard/sideboard/sideboard.component';
import { NewmilestoneComponent } from './newmilestone/newmilestone.component';
import { routes } from './routes';

// services
import { MilestoneStoreService } from './service/milestone-store.service';
import { CalendarcolorService} from './service/calendarcolor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MilestoneListComponent,
    CalendarComponent,
    SideboardComponent,
    NewmilestoneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    routes,
  ],
  providers: [MilestoneStoreService, CalendarcolorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

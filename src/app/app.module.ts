import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule, MatProgressBarModule, MatButtonModule, MatNativeDateModule, MatFormFieldModule, MatInputModule,
          MatRadioModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MilestoneListComponent } from './dashboard/milestone/milestone-list.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { SideboardComponent } from './dashboard/sideboard/sideboard.component';
import { NewmilestoneComponent } from './newmilestone/newmilestone.component';
import { routes } from './routes';

// services
import { CoreModule } from './core/core.module';
import { MilestoneStoreService } from './service/milestone-store.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MilestoneListComponent,
    CalendarComponent,
    SideboardComponent,
    NewmilestoneComponent,
    LoginComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CoreModule,
  ],
  providers: [MilestoneStoreService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

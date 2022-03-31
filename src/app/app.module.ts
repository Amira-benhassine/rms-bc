import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {   MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { BackendService } from './backend.service';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
  
    { path: '', component: TicketListComponent},
  {path: 'ticket/:id', component: TicketDetailComponent }
  
];
@NgModule({
  
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatSelectModule,
    FormsModule
    
  ],
  exports: [RouterModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

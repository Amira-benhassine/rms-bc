import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  constructor(private router: Router, private backenService: BackendService) { }
  ticket: Ticket;
  description : FormControl =new FormControl('');
  ngOnInit(): void {
    this.getTickets();
    this.ticket = { description: "" ,id:0, assigneeId:null, completed:false};
  }
  getTickets() {
    this.backenService.tickets().subscribe(o => {
      this.isAdding = false;

      this.tickets = o;
      this.dataSource = new MatTableDataSource(this.tickets);
    },
    err => console.log('Error', err));
  }
  displayedColumns = ['id', 'completed', 'assigneeId', 'description', 'action'];
  dataSource: MatTableDataSource<Ticket>;
  tickets: Ticket[] = [];
  id: number;


  // Creates new user.
  createNewUser(id: number) {

  }

  // Adds new user.
  addRow() {

    this.dataSource.filter = "";
    this.ticket = {
      id: this.tickets[this.tickets.length - 1].id + 1,
      completed: false,
      assigneeId: null,
      description: null
    }
    this.isAdding = true;
  }
  isAdding: boolean = false;
  getAddHeaderRowClass(): string {
    if (this.isAdding == true) {
      return 'adding';
    }
    return 'not-adding';
  }

  onAddClick() {
    debugger;
    let payload: { description: string }
    payload = { description: this.ticket.description }

    this.backenService.newTicket(payload).subscribe(res => {
      this.isAdding = false;
      this.getTickets();

    },
    err => console.log('Error', err))

  }
  GetDescription(event)
  {
    this.ticket.description=event;
    
  }
  showInfo(row: Ticket): void {

    this.router.navigate(['/ticket', row.id]);
  }
  onCancelAddClick()
  {
    this.isAdding=false;
  }
  getUserNameById(id):Observable<User>
  {
    return this.backenService.user(id);    
  }


}

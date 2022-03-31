import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  constructor(private backenService: BackendService,
    private route: ActivatedRoute) { }
  ticket: any;
  ticketOb$: any;
  users: any
  ngOnInit(): void {
    this.ticketOb$ = this.route.paramMap.pipe(
      switchMap(params => {
        let p = Number(params.get('id'));
        return this.backenService.ticket(p);
      }));

    this.ticketOb$.subscribe(ticket => this.ticket = ticket);
    this.backenService.users().subscribe(o => this.users = o)
  }
  updateCompleteTicket() {
    this.backenService.complete(this.ticket.id, !this.ticket.isCompleted);
  }
  assignUser(userId) {
    this.backenService.assign(this.ticket.id, userId).subscribe(o => { })
  }

}

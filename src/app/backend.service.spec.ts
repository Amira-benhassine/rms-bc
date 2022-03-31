import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BackendService } from './backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';
import { of } from 'rxjs';

describe('BackendService', () => {
  let service: BackendService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //Test service Tickets
  let storedTickets: Ticket[] = [
    {
        id: 0,
        completed: false,
        assigneeId: 111,
        description: 'Install a monitor arm'
    },
    {
        id: 1,
        completed: false,
        assigneeId: 111,
        description: 'Move the desk to the new location'
    }
];
  it('tickets', async () => {
    const getTickets = spyOn(service, 'tickets')
    .and.returnValues(of(storedTickets));
   
    
    await service.tickets();
    
    expect(getTickets).toHaveBeenCalledTimes(1);
    expect(getTickets).toHaveBeenCalledWith('nextevents', 'nextevents');
 
    });

});

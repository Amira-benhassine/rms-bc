import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackendService } from '../backend.service';

import { TicketDetailComponent } from './ticket-detail.component';
let httpClientSpy: { get: jasmine.Spy };

 let service: BackendService;

describe('TicketDetailComponent', () => {
  let component: TicketDetailComponent;
  let fixture: ComponentFixture<TicketDetailComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//Test unitaire get all tickets
  
});

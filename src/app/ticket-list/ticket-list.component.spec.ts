import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BackendService } from '../backend.service';

import { TicketListComponent } from './ticket-list.component';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [
          TicketListComponent
        ],
        providers: [
            {provide: BackendService, useValue: new BackendService()}
        ]

    }).compileComponents();
}));

it('should create the app', (() => {
    const fixture = TestBed.createComponent(TicketListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
}));

it('should render title in a h1 tag', (() => {
    const fixture = TestBed.createComponent(TicketListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Tickets');
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fixture = TestBed.createComponent(TicketListComponent);
  component = fixture.componentInstance; 
  let h1 = fixture.nativeElement.querySelector('h1');
});

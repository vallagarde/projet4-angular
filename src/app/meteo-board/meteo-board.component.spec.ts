import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoBoardComponent } from './meteo-board.component';

describe('MeteoBoardComponent', () => {
  let component: MeteoBoardComponent;
  let fixture: ComponentFixture<MeteoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

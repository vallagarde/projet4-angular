import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmarkersComponent } from './mapmarkers.component';

describe('MapmarkersComponent', () => {
  let component: MapmarkersComponent;
  let fixture: ComponentFixture<MapmarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapmarkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

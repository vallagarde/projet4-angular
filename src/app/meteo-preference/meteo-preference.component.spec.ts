import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoPreferenceComponent } from './meteo-preference.component';

describe('MeteoPreferenceComponent', () => {
  let component: MeteoPreferenceComponent;
  let fixture: ComponentFixture<MeteoPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRadiusComponent } from './city-radius.component';

describe('CityRadiusComponent', () => {
  let component: CityRadiusComponent;
  let fixture: ComponentFixture<CityRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityRadiusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

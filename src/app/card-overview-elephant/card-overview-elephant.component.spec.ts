import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverviewElephantComponent } from './card-overview-elephant.component';

describe('CardOverviewElephantComponent', () => {
  let component: CardOverviewElephantComponent;
  let fixture: ComponentFixture<CardOverviewElephantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOverviewElephantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOverviewElephantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

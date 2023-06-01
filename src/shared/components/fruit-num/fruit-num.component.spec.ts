import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitNumComponent } from './fruit-num.component';

describe('FruitNumComponent', () => {
  let component: FruitNumComponent;
  let fixture: ComponentFixture<FruitNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

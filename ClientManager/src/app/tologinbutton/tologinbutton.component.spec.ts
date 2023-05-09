import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TologinbuttonComponent } from './tologinbutton.component';

describe('TologinbuttonComponent', () => {
  let component: TologinbuttonComponent;
  let fixture: ComponentFixture<TologinbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TologinbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TologinbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

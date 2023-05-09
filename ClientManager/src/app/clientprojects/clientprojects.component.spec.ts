import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientprojectsComponent } from './clientprojects.component';

describe('ClientprojectsComponent', () => {
  let component: ClientprojectsComponent;
  let fixture: ComponentFixture<ClientprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingpdfComponent } from './missingpdf.component';

describe('MissingpdfComponent', () => {
  let component: MissingpdfComponent;
  let fixture: ComponentFixture<MissingpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingpdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

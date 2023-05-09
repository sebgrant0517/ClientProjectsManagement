import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdescComponent } from './projectdesc.component';

describe('ProjectdescComponent', () => {
  let component: ProjectdescComponent;
  let fixture: ComponentFixture<ProjectdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

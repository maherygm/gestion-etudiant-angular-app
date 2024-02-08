import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPagesComponent } from './management-pages.component';

describe('ManagementPagesComponent', () => {
  let component: ManagementPagesComponent;
  let fixture: ComponentFixture<ManagementPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

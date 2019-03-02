import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUserProfileComponent } from './sidebar-user-profile.component';

describe('SidebarUserProfileComponent', () => {
  let component: SidebarUserProfileComponent;
  let fixture: ComponentFixture<SidebarUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

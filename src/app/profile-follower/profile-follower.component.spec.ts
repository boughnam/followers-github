import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowerComponent } from './profile-follower.component';

describe('ProfileFollowerComponent', () => {
  let component: ProfileFollowerComponent;
  let fixture: ComponentFixture<ProfileFollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFollowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

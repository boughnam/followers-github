import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFolowersComponent } from './github-folowers.component';

describe('GithubFolowersComponent', () => {
  let component: GithubFolowersComponent;
  let fixture: ComponentFixture<GithubFolowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubFolowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubFolowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

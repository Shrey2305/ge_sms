import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyPageComponent } from './jelly-page.component';

describe('JellyPageComponent', () => {
  let component: JellyPageComponent;
  let fixture: ComponentFixture<JellyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JellyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JellyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

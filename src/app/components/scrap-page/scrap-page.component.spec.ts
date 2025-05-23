import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapPageComponent } from './scrap-page.component';

describe('ScrapPageComponent', () => {
  let component: ScrapPageComponent;
  let fixture: ComponentFixture<ScrapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

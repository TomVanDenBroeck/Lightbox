/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightBoxOneSingleComponent } from './light-box-one-single.component';

describe('LightBoxOneSingleComponent', () => {
  let component: LightBoxOneSingleComponent;
  let fixture: ComponentFixture<LightBoxOneSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBoxOneSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxOneSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

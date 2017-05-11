/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightBoxOneComponent } from './light-box-one.component';

describe('LightBoxOneComponent', () => {
  let component: LightBoxOneComponent;
  let fixture: ComponentFixture<LightBoxOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBoxOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

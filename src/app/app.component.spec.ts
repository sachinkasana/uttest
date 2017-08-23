import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser'
import { AppComponent } from './app.component';

describe('AppComponent', () => {
let component:AppComponent;
let fixture:ComponentFixture<AppComponent>;
let debugElement:DebugElement;
let htmlElement:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

 beforeEach(async(() => {
    fixture=TestBed.createComponent(AppComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
    debugElement=fixture.debugElement.query(By.css('p'));
    htmlElement=debugElement.nativeElement;
  }));
 it('should show number', async(() => {
    expect(htmlElement.textContent).toEqual('Number:'+component.number);
  }));


  it('should increment the number by 1', async(() => {
    const initialValue=component.number;
    component.increment();
     
    const newValue=component.number;
fixture.detectChanges();
    expect(newValue).toBeGreaterThan(initialValue);
  }));

  it('should decrement the number by 1', async(() => {
    const initialValue=component.number;
    component.decrement();
     
    const newValue=component.number;
fixture.detectChanges();
    expect(initialValue).toBeGreaterThan(newValue);
  }));

   
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});

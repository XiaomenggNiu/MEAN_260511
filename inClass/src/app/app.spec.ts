import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

// create a test suite(group of test cases)
describe('App', () => {
  let fixture: ComponentFixture<App>;
  // run before each test cases
  // used to initialez common setup 
  beforeEach(async () => {
    // Testbed create and configure the testing environment
    // configureTestingModule takes in a configuration for the test cases
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents(); // aysnc
    // wrapper around the component and its template
   fixture = TestBed.createComponent(App);
   fixture.detectChanges();
    
  });
  // create single test case
  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    // const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, inClass');
  });
});

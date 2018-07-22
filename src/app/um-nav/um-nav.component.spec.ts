
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmNavComponent } from './um-nav.component';

describe('UmNavComponent', () => {
  let component: UmNavComponent;
  let fixture: ComponentFixture<UmNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UmNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

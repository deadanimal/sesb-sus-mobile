import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutagesPage } from './outages.page';

describe('OutagesPage', () => {
  let component: OutagesPage;
  let fixture: ComponentFixture<OutagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

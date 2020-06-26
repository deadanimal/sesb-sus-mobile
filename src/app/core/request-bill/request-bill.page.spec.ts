import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestBillPage } from './request-bill.page';

describe('RequestBillPage', () => {
  let component: RequestBillPage;
  let fixture: ComponentFixture<RequestBillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

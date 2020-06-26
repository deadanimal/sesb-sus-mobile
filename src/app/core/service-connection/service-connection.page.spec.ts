import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceConnectionPage } from './service-connection.page';

describe('ServiceConnectionPage', () => {
  let component: ServiceConnectionPage;
  let fixture: ComponentFixture<ServiceConnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceConnectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceConnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

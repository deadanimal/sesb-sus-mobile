import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeTenancyPage } from './change-tenancy.page';

describe('ChangeTenancyPage', () => {
  let component: ChangeTenancyPage;
  let fixture: ComponentFixture<ChangeTenancyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTenancyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTenancyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompareUsagePage } from './compare-usage.page';

describe('CompareUsagePage', () => {
  let component: CompareUsagePage;
  let fixture: ComponentFixture<CompareUsagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareUsagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompareUsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

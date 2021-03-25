import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewShopPagePage } from './view-shop-page.page';

describe('ViewShopPagePage', () => {
  let component: ViewShopPagePage;
  let fixture: ComponentFixture<ViewShopPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShopPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewShopPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

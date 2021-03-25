import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditShopPagePage } from './edit-shop-page.page';

describe('EditShopPagePage', () => {
  let component: EditShopPagePage;
  let fixture: ComponentFixture<EditShopPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShopPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditShopPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

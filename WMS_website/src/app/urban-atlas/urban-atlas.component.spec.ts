import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanAtlasComponent } from './urban-atlas.component';

describe('UrbanAtlasComponent', () => {
  let component: UrbanAtlasComponent;
  let fixture: ComponentFixture<UrbanAtlasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanAtlasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanAtlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

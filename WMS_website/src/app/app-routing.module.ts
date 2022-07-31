import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenlayersComponent } from './openlayers/openlayers.component';
import { UrbanAtlasComponent } from './urban-atlas/urban-atlas.component';

const routes: Routes = [
  {path: '', component: OpenlayersComponent},
  {path: 'openlayers', component: OpenlayersComponent},
  {path: 'urbanAtlas', component: UrbanAtlasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[OpenlayersComponent,UrbanAtlasComponent];

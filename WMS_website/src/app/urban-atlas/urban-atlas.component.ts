import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';
import WMSCapabilities from 'ol/format/WMSCapabilities';
import legend from './legend.json';
import { DomSanitizer } from '@angular/platform-browser';
import { LegendItem } from './LegendItem'


@Component({
  selector: 'app-urban-atlas',
  templateUrl: './urban-atlas.component.html',
  styleUrls: ['./urban-atlas.component.scss']
})
export class UrbanAtlasComponent implements OnInit {

  /* PROPERTIES */
  constructor(private _sanitizer: DomSanitizer) { }

   increaseOpacity(){
    let newOpacity = this.layers[1].getOpacity() + 0.1
    this.layers[1].setOpacity(newOpacity);
  }

  decreaseOpacity(){
    let newOpacity = this.layers[1].getOpacity() - 0.1
    this.layers[1].setOpacity(newOpacity);
  }
  

  /* MAP MAANAGEMENT */
   landUseRasterLayer =  new TileWMS({
    url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
    params: {'LAYERS': 'Land_Use_Raster1402', 
            },
    projection: 'EPSG:3857',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  });

   cityBoundary =  new TileWMS({
    url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
    params: {'LAYERS': 'City_Boundary', 
            },
    projection: 'EPSG:3857',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  });


   greaterCityBoundary =  new TileWMS({
    url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
    params: {'LAYERS': 'Greater_City_Boundary', 
            },
    projection: 'EPSG:3857',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  });

   landUseVector =  new TileWMS({
    url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
    params: {'LAYERS': 'Land_Use_vector52160', 
            },
    projection: 'EPSG:3857',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  });

   cityBoundary56962 =  new TileWMS({
    url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
    params: {'LAYERS': 'City__Boundary56962', 
            },
    projection: 'EPSG:3857',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  });

   greaterCityBoundary6752 =  new TileWMS({
    url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
    params: {'LAYERS': 'Greater_City_Boundary6752', 
            },
    projection: 'EPSG:3857',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  });

   layers = [
    new TileLayer({
      source: new OSM(),
    }),
    new TileLayer({
      extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
      source: this.landUseRasterLayer,
    }),
    new TileLayer({
      extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
      source: this.cityBoundary,
    }),
    new TileLayer({
      extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
      source: this.greaterCityBoundary,
    }),
    new TileLayer({
      extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
      source: this.landUseVector,
    }),
    new TileLayer({
      extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
      source: this.cityBoundary56962,
    }),
    new TileLayer({
      extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
      source: this.greaterCityBoundary6752,
    }),
  ];

  legendItems:LegendItem[] = [];

  ngOnInit(): void {

    /* LEGEND MANAGEMENT*/ 
    for(let i =0; i< legend.layers[5].legend.length; i++){
      let imageItem = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + legend.layers[5].legend[i].imageData);
      let descriptionItem = legend.layers[5].legend[i].label;
      this.legendItems.push(new LegendItem(imageItem,descriptionItem));
    }
  
  
    const map:any = new Map({
      layers: this.layers,
      target: 'map',
      view: new View({
        center: [2755158.352596, 6394783.891423],
        zoom: 4,
        projection: 'EPSG:3857'
      }),
    });

 
  }

}

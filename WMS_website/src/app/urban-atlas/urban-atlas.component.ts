import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';

@Component({
  selector: 'app-urban-atlas',
  templateUrl: './urban-atlas.component.html',
  styleUrls: ['./urban-atlas.component.scss']
})
export class UrbanAtlasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var landUseRasterLayer =  new TileWMS({
      url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
      params: {'LAYERS': 'Land_Use_Raster1402', 
              },
      projection: 'EPSG:3857',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    });

    var cityBoundary =  new TileWMS({
      url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
      params: {'LAYERS': 'City_Boundary', 
              },
      projection: 'EPSG:3857',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    });


    var greaterCityBoundary =  new TileWMS({
      url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
      params: {'LAYERS': 'Greater_City_Boundary', 
              },
      projection: 'EPSG:3857',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    });

    var landUseVector =  new TileWMS({
      url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
      params: {'LAYERS': 'Land_Use_vector52160', 
              },
      projection: 'EPSG:3857',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    });

    var cityBoundary56962 =  new TileWMS({
      url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
      params: {'LAYERS': 'City__Boundary56962', 
              },
      projection: 'EPSG:3857',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    });

    var greaterCityBoundary6752 =  new TileWMS({
      url: 'https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2012/MapServer/WMSServer',
      params: {'LAYERS': 'Greater_City_Boundary6752', 
              },
      projection: 'EPSG:3857',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
    });

    
    const layers = [
      new TileLayer({
        source: new OSM(),
      }),
      new TileLayer({
        extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
        source: landUseRasterLayer,
      }),
      new TileLayer({
        extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
        source: cityBoundary,
      }),
      new TileLayer({
        extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
        source: greaterCityBoundary,
      }),
      new TileLayer({
        extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
        source: landUseVector,
      }),
      new TileLayer({
        extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
        source: cityBoundary56962,
      }),
      new TileLayer({
        extent: [-4908002.380412,  3101461.007394,  7472997.619588, 11257961.007394],
        source: greaterCityBoundary6752,
      }),
    ];
  
    const map:any = new Map({
      layers: layers,
      target: 'map',
      view: new View({
        center: [39.482845, 60017345],
        zoom: 1,
        projection: 'EPSG:3857'
      }),
    });
      console.log(layers);

  }

}

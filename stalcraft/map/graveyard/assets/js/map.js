// declare map
var map = L.map('map').setView([0, 0], 2);
map.removeControl(map.zoomControl);
//map.attributionControl.setPrefix(false);


// reference the tiles
L.tileLayer('assets/images/tiles/graveyard/{z}/{x}/{y}.png', {
		center: [0, 0],
		minZoom: 2,
		maxZoom: 5,
		continuousWorld: false,
		noWrap: true,
		crs: L.CRS.Simple,
	}).addTo(map);


// map limit
var mapSW = [0, 8200];
var mapNE = [8200, 0];	
map.setMaxBounds(new L.LatLngBounds(map.unproject(mapSW, map.getMaxZoom()), map.unproject(mapNE, map.getMaxZoom())));


// // leaflet-geoman controls options
// map.pm.addControls({  
// 	position: 'topleft',
// 	customControls: true,
//   }); 

// // Add new buttons
// map.pm.Toolbar.copyDrawControl('Polygon', {
// 	name: 'cache1',
// 		block: 'custom',
// 		title: 'Tier 1 Cache',
// 	});
// map.pm.Draw.cache1.setPathOptions({color: '#7DEF7D'});

// map.pm.Toolbar.copyDrawControl('Polygon', {
// 	name: 'cache2',
// 		block: 'custom',
// 		title: 'Tier 2 Cache',
// 	});
// map.pm.Draw.cache2.setPathOptions({color: '#4B8DFF'});

// map.pm.Toolbar.copyDrawControl('Polygon', {
// 	name: 'cache3',
// 		block: 'custom',
// 		title: 'Tier 3 Cache',
// 	});
// map.pm.Draw.cache3.setPathOptions({color: '#D968C4'});

// map.pm.Toolbar.copyDrawControl('Polygon', {
// 	name: 'cache4',
// 		block: 'custom',
// 		title: 'Tier 4 Cache',
// 	});
// map.pm.Draw.cache4.setPathOptions({color: '#FF5767'});

// map.pm.Toolbar.copyDrawControl('Circle', {
// 	name: 'cache5',
// 		block: 'custom',
// 		title: 'Tier 4 Cache',
// 	});
// map.pm.Draw.cache5.setPathOptions({color: '#7DEF7D'});

// map.pm.Toolbar.copyDrawControl('Circle', {
// 	name: 'cache6',
// 		block: 'custom',
// 		title: 'Tier 2 Cache',
// 	});
// map.pm.Draw.cache6.setPathOptions({color: '#4B8DFF'});

// map.pm.Toolbar.copyDrawControl('Circle', {
// 	name: 'cache7',
// 		block: 'custom',
// 		title: 'Tier 3 Cache',
// 	});
// map.pm.Draw.cache7.setPathOptions({color: '#D968C4'});

// map.pm.Toolbar.copyDrawControl('Circle', {
// 	name: 'cache8',
// 		block: 'custom',
// 		title: 'Tier 4 Cache',
// 	});
// map.pm.Draw.cache8.setPathOptions({color: '#FF5767'});

// map.pm.Toolbar.copyDrawControl('Polyline', {
// 	name: 'customline',
// 		block: 'custom',
// 		title: 'Map Boundaries',
// 	});
// map.pm.Draw.customline.setPathOptions({color: '#D0CFCF', dashArray: [5, 5]});

// map.pm.setGlobalOptions({pinning: true, snappable: false});

// function generateGeoJson(){
// 	var fg = L.featureGroup();    
// 	var layers = findLayers(map);
  
// 	var geo = {
// 		type: "FeatureCollection",
// 		features: [],
//     };
// 	layers.forEach(function(layer){
// 		var geoJson = JSON.parse(JSON.stringify(layer.toGeoJSON()));
// 		if(!geoJson.properties){
// 			geoJson.properties = {};
//     	}
    
//     	geoJson.properties.options = JSON.parse(JSON.stringify(layer.options));
    
// 		if(layer.options.radius){
// 			var radius =  parseFloat(layer.options.radius);
// 			if(radius % 1 !== 0) {
// 				geoJson.properties.options.radius = radius.toFixed(6);
// 			}else{
// 				geoJson.properties.options.radius = radius.toFixed(0);
// 			}
// 		}


// 		if (layer instanceof L.Rectangle) {
// 			geoJson.properties.type = "rectangle";
// 		} else if (layer instanceof L.Circle) {
// 			geoJson.properties.type = "circle";
// 		} else if (layer instanceof L.CircleMarker) {
// 			geoJson.properties.type = "circlemarker";
// 		} else if (layer instanceof L.Polygon) {
// 			geoJson.properties.type = "polygon";
// 		} else if (layer instanceof L.Polyline) {
// 			geoJson.properties.type = "polyline";
// 		} else if (layer instanceof L.Marker) {
// 			geoJson.properties.type = "marker";
// 		}
		
//     	geo.features.push(geoJson);
//   	});
// 	console.log(JSON.stringify(geo));
//   	alert(JSON.stringify(geo))
// }

// function findLayers(map) {
// 	var layers = [];
// 	map.eachLayer(layer => {
// 		if (
// 			layer instanceof L.Polyline ||
// 			layer instanceof L.Marker ||
// 			layer instanceof L.Circle ||
// 			layer instanceof L.CircleMarker
// 		) {
// 			layers.push(layer);
// 		}
// 	});

//     // filter out layers that don't have the leaflet-geoman instance
//     layers = layers.filter(layer => !!layer.pm);

//     // filter out everything that's leaflet-geoman specific temporary stuff
//     layers = layers.filter(layer => !layer._pmTempLayer);

//     return layers;
// }
  
// function importGeo(){
// 	var prom = prompt();
// 	if(prom){
// 		importGeoJSON(JSON.parse(prom));
// 	}
// }
  
// function importGeoJSON(feature){
// 	var geoLayer = L.geoJSON(feature, {
// 		style: function (feature) {
// 			return feature.properties.options;
// 		},
// 			pointToLayer: function(feature, latlng){
// 				switch (feature.properties.type) {
// 					case "marker": return new L.Marker(latlng);
// 					case "circle": return new L.Circle(latlng, feature.properties.options);
// 					case "circlemarker": return new L.CircleMarker(latlng, feature.properties.options);
// 			}
// 		}
// 	});
	
// 	geoLayer.getLayers().forEach((layer) => {	
// 		if (layer._latlng) {
// 			var latlng = layer.getLatLng();
// 		} else {
// 			var latlng = layer.getLatLngs();
// 		}
// 		switch (layer.feature.properties.type) {
// 			case "rectangle":
// 				new L.Rectangle(latlng,  layer.options).addTo(map);
// 				break;
// 			case "circle":
// 					console.log(layer.options)
// 				new L.Circle(latlng, layer.options).addTo(map);
// 				break;
// 			case "polygon":
// 				new L.Polygon(latlng, layer.options).addTo(map);
// 				break;
// 			case "polyline":
// 				new L.Polyline(latlng, layer.options).addTo(map);
// 				break;
// 			case "marker":
// 				new L.Marker(latlng, layer.options).addTo(map);
// 				break;
// 			case "circlemarker":
// 				new L.CircleMarker(latlng, layer.options).addTo(map);
// 				break;
// 		}
// 	})
// }


// layer groups
// main
var zone = new L.layerGroup().addTo(map);
var mapchange = new L.layerGroup().addTo(map);
// events
var rodent = new L.layerGroup().addTo(map);
var dog = new L.layerGroup().addTo(map);
var flesh = new L.layerGroup().addTo(map);
var boar = new L.layerGroup().addTo(map);
var snork = new L.layerGroup().addTo(map);
var bloodsucker = new L.layerGroup().addTo(map);
var zombie = new L.layerGroup().addTo(map);
var rescue = new L.layerGroup().addTo(map);
//anomaly
var anomaly = new L.layerGroup().addTo(map);
// caches
var cache = new L.layerGroup();
var cachetier = new L.layerGroup();
// others
var shelter = new L.layerGroup();
var test = new L.layerGroup();


var main = {
	"Zone Names" : zone,
	"Map Change" : mapchange,
	"Rodents" : rodent,
	"Dogs" : dog,
	"Fleshes": flesh,
	"Boars": boar,
	"Snorks": snork,
	"Bloodsuckers": bloodsucker,
	"Zombies": zombie,
	"Help Allies": rescue,
	"Anomalies" : anomaly,
	"Caches": cache,
	"Cache Tier": cachetier
}

var secondary = {
	"Shelters" : shelter
}

var testing = {
	"Test" : test
}

var areaTooltip = {
  'className': 'area-tooltip'
}


// icons
// main
var testIcon = L.icon({iconUrl: 'assets/images/icons/test-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var blankIcon = L.icon({iconUrl: 'assets/images/icons/blank-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mapChangeIcon = L.icon({iconUrl: 'assets/images/icons/map-change-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var shelterIcon = L.icon({iconUrl: 'assets/images/icons/shelter-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// events
var zombieIcon = L.icon({iconUrl: 'assets/images/icons/zombie-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mutantIcon = L.icon({iconUrl: 'assets/images/icons/mutant-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var rescueIcon = L.icon({iconUrl: 'assets/images/icons/rescue-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// anomalies
var anomalyRiftIcon = L.icon({iconUrl: 'assets/images/icons/anomaly-rift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var stasisIcon = L.icon({iconUrl: 'assets/images/icons/stasis-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// caches
var batteryIcon = L.icon({iconUrl: 'assets/images/icons/battery.png', iconSize: [42, 42], iconAnchor: [21, 21]});
var battery2Icon = L.icon({iconUrl: 'assets/images/icons/battery2.png', iconSize: [42, 42], iconAnchor: [21, 21]});
var battery3Icon = L.icon({iconUrl: 'assets/images/icons/battery3.png', iconSize: [42, 42], iconAnchor: [21, 21]});


// test draggable marker
var testmarker = L.marker(map.unproject([4104, 3452], map.getMaxZoom()), {draggable: true, icon: testIcon}).bindPopup('').addTo(test);

testmarker.on('dragend', function(e) {
	testmarker.getPopup().setContent('Pixels ' + map.project(testmarker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
});


// map change
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([4904, 4567], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([5017, 4520], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([5176, 4459], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([3111, 3271], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([3111, 3194], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([3176, 2924], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([3176, 2859], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to the Path of Fools");
var mapChangeMarker = L.marker(map.unproject([3176, 2709], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);


// events
// rodents
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([3282, 4290], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([3202, 3384], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5062, 3242], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5116, 2334], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// dogs
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4498, 3196], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([3178, 3750], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// fleshes
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([3690, 3482], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// boars
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4628, 2612], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([3912, 4156], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// snorks
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([3246, 3708], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([3640, 2544], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([4228, 2612], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// bloodsuckers
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5100, 3792], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4852, 3888], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4436, 3650], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4356, 2804], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([3478, 3326], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// rescue
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([3490, 3784], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4564, 3708], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4642, 2972], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([3550, 2886], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4452, 2378], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// zombies
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([3462, 4098], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([3796, 4012], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([3574, 3626], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4806, 3622], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4004, 3362], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([3544, 3098], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4356, 3054], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4892, 3122], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4200, 2444], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);


// anomalies
// anomalous rift
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4566, 3984], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5118, 3030], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([3291, 3389], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4228, 2908], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([3890, 4291], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([3313, 2650], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// stasis
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([3247, 4015], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([3532, 3337], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([3990, 2416], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4856, 2589], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);


// caches
// load caches from json file
function cacheStyle(feature) {
    return {
        color: feature.properties.options.color
    };
}

L.geoJson(cacheLibrary, {
	style: cacheStyle
}).addTo(cache);
// battery
var batteryMarkerPopup = L.popup().setContent("[Nv.1] Remains of Batteries");
var batteryMarker = L.marker(map.unproject([3634, 4274], map.getMaxZoom()), {icon:batteryIcon}).bindPopup(batteryMarkerPopup).addTo(cachetier);
var batteryMarkerPopup = L.popup().setContent("[Nv.3] Remains of Batteries");
var batteryMarker = L.marker(map.unproject([3619, 3805], map.getMaxZoom()), {icon:battery3Icon}).bindPopup(batteryMarkerPopup).addTo(cachetier);
var batteryMarkerPopup = L.popup().setContent("[Nv.3] Remains of Batteries");
var batteryMarker = L.marker(map.unproject([4602, 3770], map.getMaxZoom()), {icon:battery3Icon}).bindPopup(batteryMarkerPopup).addTo(cachetier);
var batteryMarkerPopup = L.popup().setContent("[Nv.1] Remains of Batteries");
var batteryMarker = L.marker(map.unproject([5186, 3634], map.getMaxZoom()), {icon:batteryIcon}).bindPopup(batteryMarkerPopup).addTo(cachetier);
var batteryMarkerPopup = L.popup().setContent("[Nv.1] Remains of Batteries");
var batteryMarker = L.marker(map.unproject([3816, 3316], map.getMaxZoom()), {icon:batteryIcon}).bindPopup(batteryMarkerPopup).addTo(cachetier);
var batteryMarkerPopup = L.popup().setContent("[Nv.2] Remains of Batteries");
var batteryMarker = L.marker(map.unproject([4355, 2449], map.getMaxZoom()), {icon:battery2Icon}).bindPopup(batteryMarkerPopup).addTo(cachetier);
var batteryMarkerPopup = L.popup().setContent("[Nv.2] Remains of Batteries");
var batteryMarker = L.marker(map.unproject([4845, 2576], map.getMaxZoom()), {icon:battery2Icon}).bindPopup(batteryMarkerPopup).addTo(cachetier);


// add layer control
L.control.layers(null, main, {collapsed:false}).addTo(map);
L.control.layers(null, secondary, {collapsed:false}).addTo(map);
L.control.layers(null, testing, {collapsed:false}).addTo(map);


// disable right click menu
//document.addEventListener('contextmenu', event => event.preventDefault());
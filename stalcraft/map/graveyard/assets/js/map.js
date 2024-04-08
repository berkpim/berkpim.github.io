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
// others
var shelter = new L.layerGroup();
var test = new L.layerGroup().addTo(map);



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
	"Rescue": rescue,
	"Anomalies" : anomaly
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
var campIcon = L.icon({iconUrl: 'assets/images/icons/camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// anomalies
var protoAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/proto-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var anomalyRiftIcon = L.icon({iconUrl: 'assets/images/icons/anomaly-rift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var stasisIcon = L.icon({iconUrl: 'assets/images/icons/stasis-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});


// test draggable marker
var marker = L.marker(map.unproject([4104, 3452], map.getMaxZoom()), {draggable: true, icon: testIcon}).bindPopup('').addTo(test);

marker.on('dragend', function(e) {
	marker.getPopup().setContent('Pixels ' + map.project(marker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
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


// add layer control
L.control.layers(null, main, {collapsed:false}).addTo(map);
L.control.layers(null, secondary, {collapsed:false}).addTo(map);
L.control.layers(null, testing, {collapsed:false}).addTo(map);


// disable right click menu
//document.addEventListener('contextmenu', event => event.preventDefault());
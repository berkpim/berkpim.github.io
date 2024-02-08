// variables
var mapSW = [0, 16348];
var mapNE = [16384, 0];


// declare map object
var map = L.map('map').setView([0, 0], 4);
map.removeControl(map.zoomControl);
map.attributionControl.setPrefix(false);


// reference the tiles
L.tileLayer('assets/images/tiles/overworld/{z}/{x}/{y}.png', {
		center: [0, 0],
		minZoom: 4,
		maxZoom: 6,
		continuousWorld: false,
		noWrap: true,
		crs: L.CRS.Simple,
	}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
	map.unproject(mapSW, map.getMaxZoom()),
	map.unproject(mapNE, map.getMaxZoom())
));


// layer groups
var zone = L.layerGroup().addTo(map);
var base = L.layerGroup().addTo(map);
var mapchange = L.layerGroup().addTo(map);
var underground = L.layerGroup().addTo(map);
var portal = L.layerGroup().addTo(map);
var event = L.layerGroup().addTo(map);
var anomaly = L.layerGroup().addTo(map);
var shelter = L.layerGroup();
var test = L.layerGroup().addTo(map);


var main = {
	"Zones" : zone,
	"Bases" : base,
	"Map Change" : mapchange,
	"Underground" : underground,
	"Portal" : portal,
	"Events" : event,
	"Anomalies" : anomaly,
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
var baseIcon = L.icon({iconUrl: 'assets/images/icons/base-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mapChangeIcon = L.icon({iconUrl: 'assets/images/icons/map-change-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var undergroundIcon = L.icon({iconUrl: 'assets/images/icons/underground-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mapPortalIcon = L.icon({iconUrl: 'assets/images/icons/map-portal-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var shelterIcon = L.icon({iconUrl: 'assets/images/icons/shelter-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});

// events
var zombieIcon = L.icon({iconUrl: 'assets/images/icons/zombie-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mutantIcon = L.icon({iconUrl: 'assets/images/icons/mutant-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var rescueIcon = L.icon({iconUrl: 'assets/images/icons/rescue-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var campIcon = L.icon({iconUrl: 'assets/images/icons/camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var militaryIcon = L.icon({iconUrl: 'assets/images/icons/military-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var goldMilitaryIcon = L.icon({iconUrl: 'assets/images/icons/gold-military-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var monolitIcon = L.icon({iconUrl: 'assets/images/icons/monolit-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var sanitarIcon = L.icon({iconUrl: 'assets/images/icons/sanitar-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var miniBossIcon = L.icon({iconUrl: 'assets/images/icons/miniboss-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});

// anomalies
var protoAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/proto-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var researchAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/research-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var stasisIcon = L.icon({iconUrl: 'assets/images/icons/stasis-anomaly-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});


// test draggable marker
var marker = L.marker(map.unproject([6068, 5908], map.getMaxZoom()), {draggable: true, icon: testIcon}).bindPopup('').addTo(test);

marker.on('dragend', function(e) {
	marker.getPopup().setContent('Pixels ' + map.project(marker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
});


// zone names
var	theSwamps = L.marker(map.unproject([5776, 14232], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Swamps', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	chernobyl4 = L.marker(map.unproject([8224, 15196], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Chernobyl 4', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	theCordon = L.marker(map.unproject([8642, 12646], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Cordon', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	agroprom = L.marker(map.unproject([6006, 10256], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Agroprom', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	theDump = L.marker(map.unproject([8546, 9700], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Dump', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	darkValley = L.marker(map.unproject([10858, 10208], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Dark Valley', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	thePit = L.marker(map.unproject([5818, 7660], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Pit', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	rostokFactory = L.marker(map.unproject([7002, 7056], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Rostok Factory', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	rostokFactory2 = L.marker(map.unproject([8556, 7056], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Rostok Factory', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	theForest = L.marker(map.unproject([10530, 7782], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Forest', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	theDeadCity = L.marker(map.unproject([4996, 5980], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Dead City', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	theGraveyard = L.marker(map.unproject([10686, 6224], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Graveyard', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	thePathOfFools = L.marker(map.unproject([5504, 4834], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Path of Fools', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	armyWarehouse = L.marker(map.unproject([9018, 4942], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Army Warehouses', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	radar = L.marker(map.unproject([11434, 4396], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Radar', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	limansk = L.marker(map.unproject([5124, 2688], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Limansk', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	theRedForest = L.marker(map.unproject([6528, 2391], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('The Red Forest', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	yanovOutskirts = L.marker(map.unproject([8618, 2298], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Yanov Outskirts', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);
var	backWater = L.marker(map.unproject([11084, 1226], map.getMaxZoom()), {icon:blankIcon}).bindTooltip('Back Water', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(zone);

// markers and popups
// bases
var boathouseMarkerPopup = L.popup().setContent("Boathouse");
var boathouseMarker = L.marker(map.unproject([4454, 13308], map.getMaxZoom()), {icon:baseIcon}).bindPopup(boathouseMarkerPopup).addTo(base);
var atamansHqMarkerPopup = L.popup().setContent("Ataman's HQ");
var atamansHqMarker = L.marker(map.unproject([5118, 15708], map.getMaxZoom()), {icon:baseIcon}).bindPopup(atamansHqMarkerPopup).addTo(base);
var garagesMarkerPopup = L.popup().setContent("Garages");
var garagesMarker = L.marker(map.unproject([9272, 13382], map.getMaxZoom()), {icon:baseIcon}).bindPopup(garagesMarkerPopup).addTo(base);
var photon2MarkerPopup = L.popup().setContent("Photon-2");
var photon2Marker = L.marker(map.unproject([7386, 11108], map.getMaxZoom()), {icon:baseIcon}).bindPopup(photon2MarkerPopup).addTo(base);
var theBarMarkerPopup = L.popup().setContent("The Bar");
var theBarCampMarker = L.marker(map.unproject([7840, 7120], map.getMaxZoom()), {icon:baseIcon}).bindPopup(theBarMarkerPopup).addTo(base);
var mercenaryCampMarkerPopup = L.popup().setContent("Mercenary Camp");
var mercenaryCampMarker = L.marker(map.unproject([5670, 5052], map.getMaxZoom()), {icon:baseIcon}).bindPopup(mercenaryCampMarkerPopup).addTo(base);
var dutyBaseMarkerPopup = L.popup().setContent("Duty Base");
var dutyBaseMarker = L.marker(map.unproject([9112, 6194], map.getMaxZoom()), {icon:baseIcon}).bindPopup(dutyBaseMarkerPopup).addTo(base);

// map change
// the swamps
var mapChangeMarkerPopup = L.popup().setContent("The Swamps - The Cordon");
var mapChangeMarker = L.marker(map.unproject([7657, 14000], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Swamps - The Cordon");
var mapChangeMarker = L.marker(map.unproject([7653, 13473], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Swamps - The Cordon");
var mapChangeMarker = L.marker(map.unproject([7289, 12921], map.getMaxZoom()), {rotationAngle: 45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the cordon
var mapChangeMarkerPopup = L.popup().setContent("Agroprom - The Cordon");
var mapChangeMarker = L.marker(map.unproject([6872, 11824], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Cordon - The Dump");
var mapChangeMarker = L.marker(map.unproject([8616, 10854], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Cordon - The Dark Valley");
var mapChangeMarker = L.marker(map.unproject([9935, 12314], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// agroprom
var mapChangeMarkerPopup = L.popup().setContent("Agroprom - The Pit");
var mapChangeMarker = L.marker(map.unproject([6221, 9266], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Agroprom - The Dump");
var mapChangeMarker = L.marker(map.unproject([7249, 9880], map.getMaxZoom()), {rotationAngle: 45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Agroprom - The Dump");
var mapChangeMarker = L.marker(map.unproject([7347, 10197], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the dump
var mapChangeMarkerPopup = L.popup().setContent("The Pit - The Dump");
var mapChangeMarker = L.marker(map.unproject([6221, 9266], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Pit - The Dump");
var mapChangeMarker = L.marker(map.unproject([6783, 8493], map.getMaxZoom()), {rotationAngle: -45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dump - The Bar");
var mapChangeMarker = L.marker(map.unproject([8140, 7961], map.getMaxZoom()), {rotationAngle: -45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dump - The Forest");
var mapChangeMarker = L.marker(map.unproject([8702, 8110], map.getMaxZoom()), {rotationAngle: 45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dump - The Dark Valley");
var mapChangeMarker = L.marker(map.unproject([10089, 9329], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dump - The Dark Valley");
var mapChangeMarker = L.marker(map.unproject([10089, 9449], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dump - The Dark Valley");
var mapChangeMarker = L.marker(map.unproject([10087, 9932], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the dark valley
var mapChangeMarkerPopup = L.popup().setContent("The Dark Valley - The Forest");
var mapChangeMarker = L.marker(map.unproject([10927, 8851], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the pit
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Pit");
var mapChangeMarker = L.marker(map.unproject([5352, 6711], map.getMaxZoom()), {rotationAngle: -45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Pit - The Bar");
var mapChangeMarker = L.marker(map.unproject([6418, 7122], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Pit - The Bar");
var mapChangeMarker = L.marker(map.unproject([6530, 7517], map.getMaxZoom()), {rotationAngle: 45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the bar
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Bar");
var mapChangeMarker = L.marker(map.unproject([6091, 6414], map.getMaxZoom()), {rotationAngle: -45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Bar - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([7357, 6670], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Bar - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([7683, 6670], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Bar - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([7957, 6670], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Bar - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([8335, 6670], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Bar - The Forest");
var mapChangeMarker = L.marker(map.unproject([9373, 7104], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the forest
var mapChangeMarkerPopup = L.popup().setContent("The Bar - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([11046, 6772], map.getMaxZoom()), {rotationAngle: -32, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Bar - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([11104, 6756], map.getMaxZoom()), {rotationAngle: -20, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Bar - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([11184, 6726], map.getMaxZoom()), {rotationAngle: -38, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the dead city
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Path of Fools");
var mapChangeMarker = L.marker(map.unproject([4609, 5499], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Path of Fools");
var mapChangeMarker = L.marker(map.unproject([4928, 5542], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Path of Fools");
var mapChangeMarker = L.marker(map.unproject([5051, 5521], map.getMaxZoom()), {rotationAngle: -45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Path of Fools");
var mapChangeMarker = L.marker(map.unproject([5212, 5368], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Path of Fools");
var mapChangeMarker = L.marker(map.unproject([5360, 5406], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - The Path of Fools");
var mapChangeMarker = L.marker(map.unproject([6043, 5465], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Dead City - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([6718, 5870], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// army warehouses
var mapChangeMarkerPopup = L.popup().setContent("The Path of Fools - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([7142, 5679], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Path of Fools - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([7397, 5004], map.getMaxZoom()), {rotationAngle: 45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Path of Fools - Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([7552, 4714], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([8160, 3635], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([8297, 3640], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([8705, 3664], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([8965, 3676], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([9418, 3657], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - The Graveyard");
var mapChangeMarker = L.marker(map.unproject([10213, 5868], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - The Graveyard");
var mapChangeMarker = L.marker(map.unproject([10217, 5947], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - The Graveyard");
var mapChangeMarker = L.marker(map.unproject([10211, 5983], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - The Graveyard");
var mapChangeMarker = L.marker(map.unproject([10184, 6119], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("Army Warehouses - The Graveyard");
var mapChangeMarker = L.marker(map.unproject([10183, 6153], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the path of fools
var mapChangeMarkerPopup = L.popup().setContent("The Path of Fools - The Red Forest");
var mapChangeMarker = L.marker(map.unproject([6098, 4182], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Path of Fools - The Red Forest");
var mapChangeMarker = L.marker(map.unproject([6454, 4181], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Path of Fools - The Red Forest");
var mapChangeMarker = L.marker(map.unproject([6607, 4114], map.getMaxZoom()), {icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Path of Fools - The Red Forest");
var mapChangeMarker = L.marker(map.unproject([6870, 3904], map.getMaxZoom()), {rotationAngle: -45, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// the red forest
var mapChangeMarkerPopup = L.popup().setContent("The Red Forest - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([7641, 3003], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Red Forest - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([7651, 1442], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("The Red Forest - Yanov Outskirts");
var mapChangeMarker = L.marker(map.unproject([7649, 828], map.getMaxZoom()), {rotationAngle: 90, icon:mapChangeIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);

// underground
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([4144, 4972], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([4351, 4460], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([4705, 4600], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([4794, 4312], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([5003, 5334], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([5054, 4987], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([5210, 4968], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([5225, 4885], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([5305, 4647], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([5454, 4675], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([6090, 5004], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([6312, 5105], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([6512, 5010], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([6789, 4622], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([7135, 5079], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([7189, 4546], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([7897, 4455], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8075, 4881], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8354, 4133], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8420, 4464], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8619, 4270], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8783, 4301], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8653, 4412], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8783, 4432], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([9054, 4294], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([9346, 4409], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([9444, 4475], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([9250, 4785], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([9546, 5169], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8540, 5228], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8954, 5347], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([9016, 5361], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8962, 5251], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([9066, 5239], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8376, 5565], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8460, 5609], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8522, 5591], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to the Path of Fools Underground");
var undergroundMarker = L.marker(map.unproject([8328, 5755], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);
var undergroundMarkerPopup = L.popup().setContent("to The Bar");
var undergroundMarker = L.marker(map.unproject([9004, 6289], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(undergroundMarkerPopup).addTo(underground);

// limansk
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([4278, 4368], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([6992, 3567], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([8220, 4786], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([9074, 4227], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([9276, 1999], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([9883, 3998], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([10016, 5019], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);

// backwater
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([5516, 605], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([5836, 554], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([6256, 582], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([7517, 963], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([7297, 1228], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([8976, 601], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([9282, 604], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([9612, 566], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([9272, 1226], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("to Backwater");
var mapPortalMarker = L.marker(map.unproject([9337, 1399], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);

// events
var zombieMarkerPopup = L.popup().setContent("Esto es un campamento de zombies");
var zombieMarker = L.marker(map.unproject([4728, 3795], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(event);
var mutantMarkerPopup = L.popup().setContent("Esto es un campamento de mutantes");
var mutantMarker = L.marker(map.unproject([5441, 5731], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(mutantMarkerPopup).addTo(event);
var miniBossMarkerPopup = L.popup().setContent("Esto es un campamento de mutantes");
var miniBossMarker = L.marker(map.unproject([5114, 2424], map.getMaxZoom()), {icon:miniBossIcon}).bindPopup(miniBossMarkerPopup).addTo(event);

// anomalies

// shelters
// the red forest
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([7246, 3093], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);

// the path of fools
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6662, 5033], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);

// dead city
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([5025, 5746], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([4989, 6143], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4833, 6059], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4826, 6187], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5309, 5652], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5483, 5855], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5916, 5642], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);

var shelterMarkerPopup = L.popup().setContent("Esto es un refugio");
var shelterMarker = L.marker(map.unproject([5670, 5101], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);

// add layer control
L.control.layers(null, main, {collapsed:false}).addTo(map);
L.control.layers(null, secondary, {collapsed:false}).addTo(map);
L.control.layers(null, testing, {collapsed:false}).addTo(map);


// disable right click menu
//document.addEventListener('contextmenu', event => event.preventDefault());
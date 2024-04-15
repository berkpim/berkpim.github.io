// declare map
var map = L.map('map').setView([0, 0], 4);
map.removeControl(map.zoomControl);
//map.attributionControl.setPrefix(false);


// reference the tiles
L.tileLayer('assets/images/tiles/overworld/{z}/{x}/{y}.png', {
		center: [0, 0],
		minZoom: 4,
		maxZoom: 6,
		continuousWorld: false,
		noWrap: true,
		crs: L.CRS.Simple,
	}).addTo(map);


// map limit
var mapSW = [0, 16348];
var mapNE = [16384, 0];	
map.setMaxBounds(new L.LatLngBounds(map.unproject(mapSW, map.getMaxZoom()), map.unproject(mapNE, map.getMaxZoom())));


// layer groups
// main
var zone = new L.layerGroup().addTo(map);
var base = new L.layerGroup().addTo(map);
var conquestbase = new L.layerGroup().addTo(map);
var mapchange = new L.layerGroup().addTo(map);
var underground = new L.layerGroup().addTo(map);
var portal = new L.layerGroup().addTo(map);
var bubble = new L.layerGroup();
// events
var rodent = new L.layerGroup().addTo(map);
var dog = new L.layerGroup().addTo(map);
var flesh = new L.layerGroup().addTo(map);
var boar = new L.layerGroup().addTo(map);
var snork = new L.layerGroup().addTo(map);
var bloodsucker = new L.layerGroup().addTo(map);
var zombie = new L.layerGroup().addTo(map);
var rescue = new L.layerGroup().addTo(map);
var banditcamp = new L.layerGroup().addTo(map);
var stalkercamp = new L.layerGroup().addTo(map);
var military = new L.layerGroup().addTo(map);
var monolithsquad = new L.layerGroup().addTo(map);
var occupiedbuilding = new L.layerGroup().addTo(map);
var monolithbase = new L.layerGroup().addTo(map);
var monolithantenna = new L.layerGroup().addTo(map);
var monolithoutpost = new L.layerGroup().addTo(map);
var pseudogiant = new L.layerGroup().addTo(map);
var chimera = new L.layerGroup().addTo(map);
var redairdrop = new L.layerGroup().addTo(map);
var blueairdrop = new L.layerGroup().addTo(map);
var goldairdrop = new L.layerGroup().addTo(map);
var miniboss = new L.layerGroup().addTo(map);
//anomaly
var anomaly = new L.layerGroup().addTo(map);
// others
var shelter = new L.layerGroup();
var enterspawn = new L.layerGroup();
var exitspawn = new L.layerGroup();
var test = new L.layerGroup().addTo(map);



var main = {
	"Zone Names" : zone,
	"Bases" : base,
	"Conquest Bases" : conquestbase,
	"Map Change" : mapchange,
	"Underground" : underground,
	"Portals" : portal,
	"Bubbles": bubble,
	"Rodents" : rodent,
	"Dogs" : dog,
	"Fleshes": flesh,
	"Boars": boar,
	"Snorks": snork,
	"Bloodsuckers": bloodsucker,
	"Zombies": zombie,
	"Rescue": rescue,
	"Bandit Camp": banditcamp,
	"Stalker Camp": stalkercamp,
	"Military": military,
	"Monolith Squad": monolithsquad,
	"Occupied Building": occupiedbuilding,
	"Monolith Base": monolithbase,
	"Monolith Antenna": monolithantenna,
	"Monolith Outpost": monolithoutpost,
	"Pseudogiant": pseudogiant,
	"Chimera": chimera,
	"Red Airdrop": redairdrop,
	"Blue Airdrop": blueairdrop,
	"Gold Airdrop": goldairdrop,
	"Bosses": miniboss,
	"Anomalies" : anomaly
}

var secondary = {
	"Shelters" : shelter,
	"Enter Spawns": enterspawn,
	"Exit Spawns": exitspawn
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
var conquestBaseIcon = L.icon({iconUrl: 'assets/images/icons/conquest-base-icon.png', iconSize: [36, 36], iconAnchor: [18, 18]});
var mapChangeIcon = L.icon({iconUrl: 'assets/images/icons/map-change-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var oneWayIcon = L.icon({iconUrl: 'assets/images/icons/one-way-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var undergroundIcon = L.icon({iconUrl: 'assets/images/icons/underground-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mapPortalIcon = L.icon({iconUrl: 'assets/images/icons/map-portal-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var dangerousLocationIcon = L.icon({iconUrl: 'assets/images/icons/dangerous-location-icon.png', iconSize: [18, 18], iconAnchor: [9, 9]});
var wildLocationIcon = L.icon({iconUrl: 'assets/images/icons/wild-location-icon.png', iconSize: [18, 18], iconAnchor: [9, 9]});
var shelterIcon = L.icon({iconUrl: 'assets/images/icons/shelter-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var enterSpawnIcon = L.icon({iconUrl: 'assets/images/icons/enter-spawn-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var exitSpawnIcon = L.icon({iconUrl: 'assets/images/icons/exit-spawn-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var bubbleIcon = L.icon({iconUrl: 'assets/images/icons/bubble-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// events
var zombieIcon = L.icon({iconUrl: 'assets/images/icons/zombie-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mutantIcon = L.icon({iconUrl: 'assets/images/icons/mutant-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var rescueIcon = L.icon({iconUrl: 'assets/images/icons/rescue-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var campIcon = L.icon({iconUrl: 'assets/images/icons/camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var militaryIcon = L.icon({iconUrl: 'assets/images/icons/military-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var goldMilitaryIcon = L.icon({iconUrl: 'assets/images/icons/gold-military-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var monolithCampIcon = L.icon({iconUrl: 'assets/images/icons/monolith-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mercenaryCampIcon = L.icon({iconUrl: 'assets/images/icons/mercenary-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var covenantCampIcon = L.icon({iconUrl: 'assets/images/icons/covenant-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var dutyCampIcon = L.icon({iconUrl: 'assets/images/icons/duty-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var freedomCampIcon = L.icon({iconUrl: 'assets/images/icons/freedom-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var miniBossIcon = L.icon({iconUrl: 'assets/images/icons/miniboss-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var redAirdropIcon = L.icon({iconUrl: 'assets/images/icons/red-airdrop-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var blueAirdropIcon = L.icon({iconUrl: 'assets/images/icons/blue-airdrop-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var goldAirdropIcon = L.icon({iconUrl: 'assets/images/icons/gold-airdrop-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var occupiedBuildingIcon = L.icon({iconUrl: 'assets/images/icons/occupied-building-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var monolithAntennaIcon = L.icon({iconUrl: 'assets/images/icons/monolith-antenna-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var monolithOutpostIcon = L.icon({iconUrl: 'assets/images/icons/monolith-outpost-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var pseudogiantIcon = L.icon({iconUrl: 'assets/images/icons/pseudogiant-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var chimeraIcon = L.icon({iconUrl: 'assets/images/icons/chimera-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// anomalies
var protoAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/proto-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var anomalyRiftIcon = L.icon({iconUrl: 'assets/images/icons/anomaly-rift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var defendingAnomalyRiftIcon = L.icon({iconUrl: 'assets/images/icons/defending-anomaly-rift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var goldDefendingAnomalyRiftIcon = L.icon({iconUrl: 'assets/images/icons/gold-defending-anomaly-rift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var chronoriftIcon = L.icon({iconUrl: 'assets/images/icons/chronorift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var stasisIcon = L.icon({iconUrl: 'assets/images/icons/stasis-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});


// test draggable marker
var marker = L.marker(map.unproject([7384, 4052], map.getMaxZoom()), {draggable: true, icon: testIcon}).bindPopup('').addTo(test);

marker.on('dragend', function(e) {
	marker.getPopup().setContent('Pixels ' + map.project(marker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
});


// markers and popups
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
var	limansk = L.marker(map.unproject([5124, 2688], map.getMaxZoom()), {icon:dangerousLocationIcon}).bindTooltip('Limansk', {direction: 'center', permanent: true, offset: [65, 0], ...areaTooltip}, areaTooltip).addTo(zone);
var	theRedForest = L.marker(map.unproject([6528, 2391], map.getMaxZoom()), {icon:dangerousLocationIcon}).bindTooltip('The Red Forest', {direction: 'center', permanent: true, offset: [105, 0], ...areaTooltip}, areaTooltip).addTo(zone);
var	yanovOutskirts = L.marker(map.unproject([8618, 2298], map.getMaxZoom()), {icon:dangerousLocationIcon}).bindTooltip('Yanov Outskirts', {direction: 'center', permanent: true, offset: [105, 0], ...areaTooltip}, areaTooltip).addTo(zone);
var	backWater = L.marker(map.unproject([11084, 1226], map.getMaxZoom()), {icon:wildLocationIcon}).bindTooltip('Backwater', {direction: 'center', permanent: true, offset: [80, 0], ...areaTooltip}, areaTooltip).addTo(zone);


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
// conquest
var pumpingStationMarkerPopup = L.popup().setContent("Pumping Station (Lvl. I)");
var pumpingStationMarker = L.marker(map.unproject([6054, 1257], map.getMaxZoom()), {icon:conquestBaseIcon}).bindPopup(pumpingStationMarkerPopup).addTo(conquestbase);
var pumpingStationMarkerPopup = L.popup().setContent("Duga Station (Lvl. II)");
var pumpingStationMarker = L.marker(map.unproject([6571, 767], map.getMaxZoom()), {icon:conquestBaseIcon}).bindPopup(pumpingStationMarkerPopup).addTo(conquestbase);
var pumpingStationMarkerPopup = L.popup().setContent("Khrushchevka (Lvl. I)");
var pumpingStationMarker = L.marker(map.unproject([7285, 961], map.getMaxZoom()), {icon:conquestBaseIcon}).bindPopup(pumpingStationMarkerPopup).addTo(conquestbase);
var pumpingStationMarkerPopup = L.popup().setContent("Yanov Train Station (Lvl. II)");
var pumpingStationMarker = L.marker(map.unproject([8328, 756], map.getMaxZoom()), {icon:conquestBaseIcon}).bindPopup(pumpingStationMarkerPopup).addTo(conquestbase);
var pumpingStationMarkerPopup = L.popup().setContent("Cooling Tower (Lvl. I)");
var pumpingStationMarker = L.marker(map.unproject([8333, 1623], map.getMaxZoom()), {icon:conquestBaseIcon}).bindPopup(pumpingStationMarkerPopup).addTo(conquestbase);
var pumpingStationMarkerPopup = L.popup().setContent("Warehouse (Lvl. I)");
var pumpingStationMarker = L.marker(map.unproject([8969, 1431], map.getMaxZoom()), {icon:conquestBaseIcon}).bindPopup(pumpingStationMarkerPopup).addTo(conquestbase);


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
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([5859, 4191], map.getMaxZoom()), {icon:oneWayIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
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
var mapPortalMarkerPopup = L.popup().setContent("to Limansk");
var mapPortalMarker = L.marker(map.unproject([7386, 2647], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
// backwater enter
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
// backwater exit
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([9820, 1770], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([11064, 924], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([11746, 1291], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([12441, 1660], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([10916, 1339], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([10275, 878], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([10624, 1019], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([10604, 1632], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([11256, 1777], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([10071, 1353], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([12270, 1160], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([9883, 947], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([12013, 1519], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);
var mapPortalMarkerPopup = L.popup().setContent("Exit Backwater");
var mapPortalMarker = L.marker(map.unproject([10572, 296], map.getMaxZoom()), {icon:mapPortalIcon}).bindPopup(mapPortalMarkerPopup).addTo(portal);


// bubbles
// the red forest
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([6301, 2533], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([6522, 1805], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([6088, 1932], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
// limansk
var bubbleMarkerPopup = L.popup().setContent("Bubble ∞");
var bubbleMarker = L.marker(map.unproject([5088, 1872], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble ∞");
var bubbleMarker = L.marker(map.unproject([5379, 3451], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([4817, 3840], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([5467, 3121], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([4489, 3161], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([4378, 2787], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([5576, 2824], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([4812, 2366], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([5092, 2051], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([5230, 1922], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([5479, 1963], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble");
var bubbleMarker = L.marker(map.unproject([5485, 1420], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble - Rat");
var bubbleMarker = L.marker(map.unproject([4921, 3048], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);
var bubbleMarkerPopup = L.popup().setContent("Bubble - Chimera");
var bubbleMarker = L.marker(map.unproject([5192, 1747], map.getMaxZoom()), {icon:bubbleIcon}).bindPopup(bubbleMarkerPopup).addTo(bubble);


// events
// rodents
// the swamps
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5908, 14990], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5911, 15141], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// the cordon
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8037, 13739], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([7944, 13662], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8038, 13569], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8824, 13392], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9012, 13387], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9140, 12994], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8037, 12666], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9720, 12662], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([7522, 11739], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([7725, 12197], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8170, 12097], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8970, 11896], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9700, 12066], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// agroprom
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5347, 10009], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5496, 10064], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// the dump
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([7805, 10357], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8360, 10110], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([7973, 9167], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8093, 8998], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8296, 8968], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9917, 9399], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// the dark valley
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([10717, 10843], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([11202, 10005], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// the pit
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5311, 8355], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5714, 7793], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5741, 7802], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5760, 7822], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5218, 7281], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// the forest
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9215, 7335], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9399, 7748], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([10179, 8360], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([10274, 8147], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([10991, 7987], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([11523, 8000], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// the dead city
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([4766, 5699], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([4733, 5719], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5392, 5585], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5527, 6130], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// path of fools
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([4965, 4842], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([6983, 5175], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// army warehouses
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8102, 5598], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8371, 5057], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8604, 4326], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8831, 4311], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9712, 5424], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9676, 5143], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9906, 4867], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// the red forest
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([5676, 739], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([6776, 3696], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
// yanov outskirts
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([7956, 1883], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8050, 1467], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([8776, 2246], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodentMarker = L.marker(map.unproject([9250, 2534], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);


// dogs
// the swamps
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4744, 15084], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5951, 15884], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6466, 15194], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5658, 14204], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4906, 13934], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5043, 13896], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5199, 13836], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5503, 13643], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5243, 13437], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5982, 13080], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6088, 13157], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6720, 13313], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6931, 13842], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7112, 13911], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// the cordon
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8028, 13999], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8368, 13918], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8550, 13756], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8560, 13456], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7936, 13396], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8189, 12793], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8758, 12874], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9040, 12808], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9629, 12833], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7905, 11882], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7921, 11787], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7637, 11827], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7815, 11590], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8509, 11426], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9076, 11437], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// agroprom
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6129, 11548], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6054, 11256], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5720, 10990], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6524, 10437], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6416, 10152], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6531, 9967], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6501, 9500], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// the dump
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8382, 10816], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8130, 10887], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9108, 10502], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9270, 9792], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8396, 10215], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8033, 10166], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7738, 10046], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7860, 9926], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7914, 9753], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8028, 9743], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7703, 9383], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8327, 8147], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// the dark valley
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10675, 11120], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10874, 10906], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([11398, 10745], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10477, 10607], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10492, 10369], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([11087, 10485], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10987, 9598], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10994, 9361], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// the pit
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6368, 8042], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6508, 7904], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6024, 7086], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5754, 6862], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// rostok factory
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6674, 7442], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6977, 7378], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6502, 6821], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6798, 6845], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6917, 6922], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6930, 6984], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7134, 6943], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7309, 7022], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8571, 6929], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8915, 7024], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8775, 7503], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8941, 7506], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// the forest
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9698, 7336], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10006, 7420], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10095, 7782], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10418, 8141], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10498, 8324], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([10991, 7746], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([11226, 7734], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([11231, 7524], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([11067, 7382], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([11093, 7087], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// the dead city
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5108, 6369], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5472, 6005], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5562, 5904], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4811, 5690], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6155, 5978], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6222, 5911], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6422, 5794], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// army warehouses
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9021, 5652], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9071, 5341], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8520, 5229], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8129, 5227], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8013, 4618], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8367, 4152], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8966, 4302], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9223, 4525], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9485, 4393], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9794, 4013], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// path of fools
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4772, 4993], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4873, 4609], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4711, 4554], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4707, 4414], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4862, 4415], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5278, 4440], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6066, 4618], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5970, 4418], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6816, 4346], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7004, 4443], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5989, 4310], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// limansk
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5158, 3682], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5193, 3459], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4808, 3076], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4930, 2901], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5039, 2847], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4902, 2810], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5508, 2997], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4986, 2498], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4558, 2261], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5623, 2488], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5097, 3164], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([4812, 2237], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5121, 2106], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([5421, 3541], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// the red forest
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7265, 2818], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6150, 1533], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6467, 1466], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6859, 2169], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([6922, 1995], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7549, 1087], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
// yanov outskirts
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8537, 2361], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7987, 1731], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8163, 1754], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([7914, 1283], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([8739, 835], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9697, 1540], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);
var dogMarkerPopup = L.popup().setContent("Dog Den");
var dogMarker = L.marker(map.unproject([9670, 1687], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(dogMarkerPopup).addTo(dog);


// fleshes
// the swamps
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5545, 15723], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5642, 15597], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5570, 15354], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4591, 15324], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4679, 15238], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6329, 15074], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6531, 14916], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6439, 14662], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6481, 14244], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6861, 13933], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4512, 14658], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4527, 14343], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4520, 14148], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4428, 13977], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4368, 13893], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4372, 13784], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5080, 12810], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5995, 12860], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the cordon
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7698, 13436], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8023, 13929], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8318, 13996], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8420, 13175], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8958, 12812], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9652, 12033], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8999, 11551], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7352, 11605], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// agroprom
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5599, 10505], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5214, 9917], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5087, 9885], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6416, 9584], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the dump
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7981, 10656], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7944, 10595], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7778, 10461], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9282, 10168], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9239, 10125], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8760, 9454], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8876, 9404], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9134, 9352], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8834, 9291], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8847, 9071], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8875, 8864], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9074, 8890], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the dark valley
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([10957, 11552], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([11289, 11004], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([10889, 10434], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([11345, 10178], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([11061, 10012], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([10958, 9850], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8488, 8406], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the pit
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5260, 8081], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5485, 8076], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5503, 7970], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5116, 7928], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5341, 7710], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5642, 7305], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6141, 7735], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// rostok factory
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6665, 7452], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7559, 6910], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7737, 6815], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8056, 6815], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8199, 6901], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9085, 7017], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9125, 7233], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the forest
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9407, 8220], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9985, 8277], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([10282, 8267], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([11477, 7867], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([11469, 7607], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([11376, 7640], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([10857, 7299], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the dead city
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5091, 6191], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5594, 5904], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5237, 5802], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4871, 5702], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5204, 6100], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the path of fools
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([4160, 5232], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6121, 5290], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6313, 5347], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6516, 5318], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6450, 4954], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// army warehouses
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7734, 5830], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8319, 5926], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8544, 5991], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9320, 5833], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9478, 5711], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9883, 5524], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9961, 5298], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9587, 5070], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9269, 5096], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9284, 4044], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8589, 3956], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8399, 3998], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// the red forest
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6530, 3584], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6978, 3281], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7067, 3269], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7145, 3151], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6701, 2990], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6390, 2936], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6772, 2450], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6112, 2390], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6607, 1922], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([7160, 733], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5986, 719], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9508, 3409], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9612, 3377], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9648, 3263], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9680, 3234], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9089, 2517], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9073, 2299], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8529, 2076], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8154, 2246], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8164, 2301], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([8204, 2469], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([9582, 605], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([6456, 2979], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([5972, 1239], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);
// backwater
var fleshMarkerPopup = L.popup().setContent("Flesh Hideout");
var fleshMarker = L.marker(map.unproject([11797, 1983], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(fleshMarkerPopup).addTo(flesh);


// boars
// the swamps
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5706, 15304], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6884, 15166], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6904, 14233], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6532, 14091], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6102, 13976], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4793, 13845], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4635, 13754], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6323, 13430], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5265, 13230], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6160, 12957], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the cordon
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9161, 13849], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8221, 13704], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8708, 13275], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8205, 13133], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9228, 12861], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8367, 12596], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8207, 12460], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9312, 12544], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8530, 12151], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8221, 11961], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8338, 11755], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// agroprom
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5125, 10306], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5417, 10612], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5743, 9692], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6089, 9695], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6040, 9545], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the dump
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8247, 10776], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8164, 10683], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8895, 10566], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8912, 10436], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9455, 9994], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9667, 10014], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9731, 9952], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9598, 9713], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9476, 9394], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([7422, 8870], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([7488, 8803], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the dark valley
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10828, 11303], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11637, 11094], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11394, 10300], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10740, 9962], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10679, 9870], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10714, 9841], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11324, 9558], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11183, 9279], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the pit
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6151, 8295], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6060, 7875], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5139, 7650], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5133, 7438], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5303, 7011], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5566, 6841], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// rostok factory
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6589, 6908], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6585, 6758], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9019, 6869], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the forest
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9013, 8256], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9672, 8208], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9656, 8039], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10929, 8051], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11208, 8058], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11376, 8368], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10853, 8393], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10740, 8695], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the dead city
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5378, 6382], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5247, 6110], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4644, 6215], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the path of fools
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4260, 4722], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4368, 4675], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4197, 4572], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5129, 4683], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5298, 4866], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5399, 4708], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5333, 4635], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6546, 4372], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// army warehouses
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([7217, 5908], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8032, 4496], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8652, 5686], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9215, 5717], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9506, 5519], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9855, 6002], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9948, 5449], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9858, 4502], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// the red forest
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6638, 3410], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6580, 3312], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6384, 2874], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6269, 2698], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([7093, 2874], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6525, 2492], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6916, 2496], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([7021, 2518], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6760, 1833], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6193, 1800], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6910, 1471], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5513, 872], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5925, 929], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6598, 913], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6789, 927], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([7347, 827], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6352, 2882], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([6254, 2708], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// yanov outskirts
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9535, 3328], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9098, 1867], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8951, 1768], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([9522, 1636], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8539, 1648], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8836, 1343], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8451, 1455], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8322, 1298], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8163, 1281], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([8386, 1156], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// limansk
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4842, 3101], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5024, 2892], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5360, 2908], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5606, 2644], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5100, 3148], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([4825, 2237], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([5108, 2106], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
// backwater
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11552, 2362], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([11226, 253], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([12259, 1536], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([12234, 1627], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);
var boarMarkerPopup = L.popup().setContent("Boar Hideout");
var boarMarker = L.marker(map.unproject([10083, 769], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(boarMarkerPopup).addTo(boar);


// snorks
// rostok factory
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([7213, 7475], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([7225, 7328], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([6908, 6971], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([6974, 6910], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([8449, 7320], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// the forest
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([10282, 7439], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// the dead city
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([4997, 5915], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([4946, 5676], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// the path of fools
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([6263, 4579], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// army warehouses
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([8196, 4013], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([8782, 4384], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([8850, 5088], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// the red forest
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([6354, 3412], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// yanov outskirts
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([9687, 3000], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
// backwater
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([10349, 423], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([10361, 536], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([10707, 914], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([11790, 461], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([12207, 1369], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);
var snorkMarkerPopup = L.popup().setContent("Snork Den");
var snorkMarker = L.marker(map.unproject([10661, 1915], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(snorkMarkerPopup).addTo(snork);


// bloodsuckers
// the pit
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([5402, 8287], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([5739, 8390], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([5388, 7404], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5936, 7596], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6237, 7239], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// rostok factory
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6973, 6888], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6927, 6969], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([7215, 7330], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([7837, 7298], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([8451, 7394], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8504, 7463], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8703, 6884], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8741, 6967], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// the forest
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9182, 8260], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([10353, 7434], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([10306, 7982], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([10267, 8052], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([11069, 7521], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([11603, 7543], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// the dead city
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4586, 5932], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([4994, 5897], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([4994, 6107], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([5417, 5754], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([5448, 6042], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// the path of fools
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6449, 4660], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([6246, 4445], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([6177, 4795], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([7146, 4949], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([6263, 4579], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// army warehouses
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8160, 4091], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8187, 3853], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8981, 3943], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9146, 4266], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8784, 4305], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8808, 4376], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8849, 5080], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9793, 4918], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9773, 4980], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// the red forest
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6357, 3409], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6419, 757], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([7371, 2634], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([7297, 1241], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([7245, 2505], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([7429, 1241], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6564, 768], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den*");
var bloodsuckerMarker = L.marker(map.unproject([6749, 727], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// yanov outskirts
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([7892, 1671], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8486, 1007], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8387, 1676], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9233, 1303], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9027, 1669], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9122, 1628], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9392, 1608], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9236, 1627], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8056, 1079], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([8269, 964], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([9505, 2949], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// limansk
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4615, 4079], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5598, 3811], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4390, 2820], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4606, 2703], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4843, 2554], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4962, 2651], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4921, 3049], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5576, 2802], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5197, 3574], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5166, 3954], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4398, 3126], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// backwater
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([10987, 1556], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);


// pseudogiants
// the path of fools
var pseudogiantMarkerPopup = L.popup().setContent("Pseudogiant Spawn");
var pseudogiantMarker = L.marker(map.unproject([4525, 5314], map.getMaxZoom()), {icon:pseudogiantIcon}).bindPopup(pseudogiantMarkerPopup).addTo(pseudogiant);
var pseudogiantMarkerPopup = L.popup().setContent("Pseudogiant Spawn");
var pseudogiantMarker = L.marker(map.unproject([4243, 4535], map.getMaxZoom()), {icon:pseudogiantIcon}).bindPopup(pseudogiantMarkerPopup).addTo(pseudogiant);
// army warehouses
// the red forest
var pseudogiantMarkerPopup = L.popup().setContent("Pseudogiant Spawn");
var pseudogiantMarker = L.marker(map.unproject([5802, 913], map.getMaxZoom()), {icon:pseudogiantIcon}).bindPopup(pseudogiantMarkerPopup).addTo(pseudogiant);
// yanov outskirts
// limansk
var pseudogiantMarkerPopup = L.popup().setContent("Pseudogiant Spawn");
var pseudogiantMarker = L.marker(map.unproject([4451, 2988], map.getMaxZoom()), {icon:pseudogiantIcon}).bindPopup(pseudogiantMarkerPopup).addTo(pseudogiant);
// backwater


// chimera
// the red forest
var chimeraMarkerPopup = L.popup().setContent("Chimera Spawn");
var chimeraMarker = L.marker(map.unproject([7526, 1322], map.getMaxZoom()), {icon:chimeraIcon}).bindPopup(chimeraMarkerPopup).addTo(chimera);
var chimeraMarkerPopup = L.popup().setContent("Chimera Spawn");
var chimeraMarker = L.marker(map.unproject([5988, 694], map.getMaxZoom()), {icon:chimeraIcon}).bindPopup(chimeraMarkerPopup).addTo(chimera);
// yanov outskirts
// limansk
// backwater
var chimeraMarkerPopup = L.popup().setContent("Chimera Spawn");
var chimeraMarker = L.marker(map.unproject([11398, 388], map.getMaxZoom()), {icon:chimeraIcon}).bindPopup(chimeraMarkerPopup).addTo(chimera);
var chimeraMarkerPopup = L.popup().setContent("Chimera Spawn");
var chimeraMarker = L.marker(map.unproject([11076, 320], map.getMaxZoom()), {icon:chimeraIcon}).bindPopup(chimeraMarkerPopup).addTo(chimera);


// bandit camp
// the swamps
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([4954, 14257], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([5240, 14174], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([5819, 13915], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6248, 13727], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([5450, 13029], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6104, 13224], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6794, 13095], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
// the cordon
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7521, 12465], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8040, 12587], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8233, 12304], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8947, 12304], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8459, 12029], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8102, 11939], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([9701, 11587], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([9572, 11435], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8003, 11042], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8559, 11032], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
// agroprom
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6126, 10748], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6347, 10235], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([5143, 9628], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
// the dump
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8670, 10738], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8980, 10708], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7638, 10356], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8744, 10210], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8182, 9870], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7648, 9846], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7767, 9523], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8497, 9568], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8577, 9402], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7915, 9310], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8218, 9269], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8600, 9275], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8586, 9113], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8393, 9111], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7729, 9138], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7052, 8771], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
// the pit
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6481, 8258], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6206, 8023], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([5775, 8098], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6302, 7469], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([5492, 7107], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
// rostok factory
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([6807, 7499], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7028, 7501], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7080, 7080], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7305, 7161], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7241, 6915], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7424, 7219], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([7653, 7399], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
// army warehouses
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8022, 5634], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8671, 4959], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([8885, 4928], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([9055, 4934], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([9059, 5051], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([5190, 5170], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);
var banditCampMarkerPopup = L.popup().setContent("Bandit Encampment");
var banditCampMarker = L.marker(map.unproject([4559, 5164], map.getMaxZoom()), {icon:campIcon}).bindPopup(banditCampMarkerPopup).addTo(banditcamp);


// stalker camp
// the swamps
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([4459, 15092], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([4567, 15136], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([5348, 15022], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([5472, 15559], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([5858, 15495], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([5916, 15141], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([5636, 14932], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([5696, 14347], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([6071, 14578], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([6269, 14641], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([6934, 14661], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([6740, 14151], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([7294, 14178], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([7410, 14011], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
// the cordon
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([7842, 13111], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8544, 13003], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8871, 13006], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8043, 12770], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8462, 12485], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([9622, 12533], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8689, 11578], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8865, 11576], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8593, 11018], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
// the dump
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8763, 10188], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8162, 9857], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([9310, 9863], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([9585, 9858], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8478, 9688], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8592, 9490], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([7866, 9351], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([9569, 9429], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([9435, 9250], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([9340, 9241], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([9364, 9143], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8801, 9155], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8625, 8868], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
// the dark valley
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10660, 11305], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10959, 11171], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10954, 10825], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([11023, 10669], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([11024, 10270], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10804, 9671], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10521, 9288], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10914, 9177], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
// rostok factory
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([7923, 7396], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8660, 7495], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8862, 7432], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8580, 7075], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8472, 6891], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8394, 6686], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8058, 6708], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
// the forest
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8840, 8198], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10447, 7379], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([10246, 7283], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
// path of fools
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([6232, 4633], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([6408, 4519], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
// army warehouses
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8438, 5174], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([8130, 4895], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);
var stalkerCampMarkerPopup = L.popup().setContent("Stalker Encampment");
var stalkerCampMarker = L.marker(map.unproject([7766, 4564], map.getMaxZoom()), {icon:campIcon}).bindPopup(stalkerCampMarkerPopup).addTo(stalkercamp);


// military
// the swamps
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([4742, 14530], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([4880, 14418], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([4764, 14278], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([5366, 14407], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([5272, 14585], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([5683, 14377], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6047, 14155], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6231, 14131], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
// agroprom
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([4856, 10216], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([4941, 10661], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([5145, 9599], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([5438, 10957], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([5685, 9825], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([5995, 9487], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6028, 10069], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6042, 11118], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6305, 9709], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6553, 10685], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6623, 10534], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6678, 10319], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([6984, 10096], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([7041, 10473], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
// the dump
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([7915, 10178], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([9134, 10625], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([9209, 10681], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
// the dark valley
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([10220, 9956], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([10513, 9302], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([10494, 9595], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([10480, 9809], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([10422, 10317], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([10420, 11053], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([10922, 10137], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([11096, 10258], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);
var militaryMarkerPopup = L.popup().setContent("Military checkpoint");
var militaryMarker = L.marker(map.unproject([11222, 9587], map.getMaxZoom()), {icon:militaryIcon}).bindPopup(militaryMarkerPopup).addTo(military);


// zombies
// the pit
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5460, 8318], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5381, 8194], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6523, 8269], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5911, 7892], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6406, 7729], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5996, 7500], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5803, 7631], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5752, 7685], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5396, 7386], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5536, 7129], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// the forest
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8943, 7824], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9167, 7997], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9330, 8037], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9343, 7756], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9533, 7301], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9969, 7639], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10389, 7705], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10484, 7747], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10603, 7980], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10650, 7866], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10754, 7882], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10830, 7759], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10704, 7616], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10827, 7426], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10733, 7367], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([11604, 7458], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// the dead city
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4825, 6287], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4825, 6088], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4771, 5966], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4492, 5848], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4954, 5770], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5133, 5982], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5255, 5950], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5450, 5851], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5284, 5647], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// the path of fools
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4165, 4997], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4517, 5167], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5219, 4486], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5549, 4500], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5689, 4409], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5847, 4493], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5765, 4696], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6194, 4521], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6619, 4228], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([7297, 4508], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6207, 4619], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// army warehouses
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8176, 5627], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8891, 5433], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9041, 5373], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8700, 4916], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8760, 4637], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8712, 4012], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9326, 4290], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9285, 4733], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9574, 4923], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9934, 4822], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// the red forest
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6192, 3624], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6936, 3058], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5911, 2878], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5864, 2760], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6260, 3023], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([7128, 2703], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5709, 998], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6709, 1413], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6793, 1295], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6782, 1180], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([6599, 1290], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// yanov outskirts
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9598, 3217], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9526, 2794], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8176, 1882], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([7846, 1626], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8183, 1465], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8578, 1272], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8661, 1286], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([8981, 1338], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9030, 1381], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9037, 1314], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// limansk
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4662, 3586], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5150, 3678], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5412, 3413], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5279, 3245], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4699, 3216], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4603, 3130], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5380, 3047], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5435, 2894], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5098, 2554], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4883, 2462], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4737, 2423], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([4606, 2315], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5054, 2269], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5355, 1976], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5090, 1854], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5100, 1729], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([5396, 1599], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
// backwater
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([9934, 652], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([11727, 285], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([11736, 667], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([11485, 1900], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([12206, 1905], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([12369, 1743], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([12206, 1902], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10826, 1496], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);
var zombieMarkerPopup = L.popup().setContent("Zombie Encampment");
var zombieMarker = L.marker(map.unproject([10527, 1560], map.getMaxZoom()), {icon:zombieIcon}).bindPopup(zombieMarkerPopup).addTo(zombie);


// rescue
// the swamps
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([6707, 13689], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// the cordon
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([8596, 13238], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([8949, 12281], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([9447, 12772], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// the dump
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([8485, 9175], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// the dark valley
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([10358, 9993], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([10383, 10701], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([10641, 9265], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([10631, 9474], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([10962, 9551], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([11001, 10737], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([11311, 9694], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([11475, 10786], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// the pit
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5232, 7048], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5668, 6952], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5854, 7778], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5944, 7386], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([6187, 7529], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// the forest
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([9424, 8105], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([9784, 7591], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([10187, 7532], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([10690, 8318], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([11187, 7177], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// the dead city
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4654, 5902], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4659, 6364], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4887, 6366], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5363, 5804], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5331, 6240], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// the path of fools
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4495, 4602], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4710, 4489], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5107, 4867], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5673, 4632], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([6848, 4612], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// army warehouses
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([8329, 4484], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([8289, 5348], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([8776, 5079], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([8708, 5532], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([9239, 5392], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([9415, 5622], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([9942, 5621], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
// limansk
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4388, 2940], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4506, 3312], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4767, 2159], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4669, 3006], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([4857, 3609], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5027, 2599], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5248, 3852], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5503, 2267], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);
var rescueMarkerPopup = L.popup().setContent("Help Allies");
var rescueMarker = L.marker(map.unproject([5020, 2748], map.getMaxZoom()), {icon:rescueIcon}).bindPopup(rescueMarkerPopup).addTo(rescue);


// monolith squad
// the red forest
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([5653, 992], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([6419, 664], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([7256, 966], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
// yanov outskirts
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([7881, 1627], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([8176, 1399], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([8306, 1647], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([8373, 731], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([9215, 658], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([9105, 1257], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([9257, 2083], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([9483, 1126], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([9425, 1245], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([9425, 1872], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
// backwater
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([11412, 656], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([11183, 1126], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([11475, 1559], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([11772, 1646], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);
var monolithSquadMarkerPopup = L.popup().setContent("Monolith Squad");
var monolithSquadMarker = L.marker(map.unproject([10604, 1632], map.getMaxZoom()), {icon:monolithCampIcon}).bindPopup(monolithSquadMarkerPopup).addTo(monolithsquad);


// occupied buildings
// limansk
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([5035, 1541], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([5552, 3501], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([4972, 3545], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([4661, 3770], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([5476, 2557], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([5358, 1397], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([4935, 3331], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);
var occupiedBuildingMarkerPopup = L.popup().setContent("Occupied Building");
var occupiedBuildingMarker = L.marker(map.unproject([4402, 2897], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(occupiedBuildingMarkerPopup).addTo(occupiedbuilding);


// monolith base
// backwater
var monolithBaseMarkerPopup = L.popup().setContent("Monolith Base");
var monolithBaseMarker = L.marker(map.unproject([10221, 1843], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(monolithBaseMarkerPopup).addTo(monolithbase);
var monolithBaseMarkerPopup = L.popup().setContent("Monolith Base");
var monolithBaseMarker = L.marker(map.unproject([10811, 1341], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(monolithBaseMarkerPopup).addTo(monolithbase);
var monolithBaseMarkerPopup = L.popup().setContent("Monolith Base");
var monolithBaseMarker = L.marker(map.unproject([11695, 1223], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(monolithBaseMarkerPopup).addTo(monolithbase);
var monolithBaseMarkerPopup = L.popup().setContent("Monolith Base");
var monolithBaseMarker = L.marker(map.unproject([12413, 1223], map.getMaxZoom()), {icon:occupiedBuildingIcon}).bindPopup(monolithBaseMarkerPopup).addTo(monolithbase);


// monolith outposts
// backwater
var monolithOutpostMarkerPopup = L.popup().setContent("Monolith Outpost");
var monolithOutpostMarker = L.marker(map.unproject([10572, 308], map.getMaxZoom()), {icon:monolithOutpostIcon}).bindPopup(monolithOutpostMarkerPopup).addTo(monolithoutpost);
var monolithOutpostMarkerPopup = L.popup().setContent("Monolith Outpost");
var monolithOutpostMarker = L.marker(map.unproject([11464, 1327], map.getMaxZoom()), {icon:monolithOutpostIcon}).bindPopup(monolithOutpostMarkerPopup).addTo(monolithoutpost);


// monolith antenna
// backwater
var monolithAntennaMarkerPopup = L.popup().setContent("Monolith Antenna");
var monolithAntennaMarker = L.marker(map.unproject([10572, 700], map.getMaxZoom()), {icon:monolithAntennaIcon}).bindPopup(monolithAntennaMarkerPopup).addTo(monolithantenna);
var monolithAntennaMarkerPopup = L.popup().setContent("Monolith Antenna");
var monolithAntennaMarker = L.marker(map.unproject([10456, 1195], map.getMaxZoom()), {icon:monolithAntennaIcon}).bindPopup(monolithAntennaMarkerPopup).addTo(monolithantenna);
var monolithAntennaMarkerPopup = L.popup().setContent("Monolith Antenna");
var monolithAntennaMarker = L.marker(map.unproject([11394, 871], map.getMaxZoom()), {icon:monolithAntennaIcon}).bindPopup(monolithAntennaMarkerPopup).addTo(monolithantenna);
var monolithAntennaMarkerPopup = L.popup().setContent("Monolith Antenna");
var monolithAntennaMarker = L.marker(map.unproject([11451, 1859], map.getMaxZoom()), {icon:monolithAntennaIcon}).bindPopup(monolithAntennaMarkerPopup).addTo(monolithantenna);
var monolithAntennaMarkerPopup = L.popup().setContent("Monolith Antenna");
var monolithAntennaMarker = L.marker(map.unproject([12277, 1253], map.getMaxZoom()), {icon:monolithAntennaIcon}).bindPopup(monolithAntennaMarkerPopup).addTo(monolithantenna);
var monolithAntennaMarkerPopup = L.popup().setContent("Monolith Antenna");
var monolithAntennaMarker = L.marker(map.unproject([10199, 1528], map.getMaxZoom()), {icon:monolithAntennaIcon}).bindPopup(monolithAntennaMarkerPopup).addTo(monolithantenna);


// airdrops
// red airdrop 
// the red forest
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([6777, 2851], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([6473, 1236], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([6861, 1198], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([7100, 937], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([5719, 858], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([6838, 663], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
// limansk
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([5350, 3044], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([5468, 2645], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
//backwater
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([11074, 777], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([11597, 657], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);
var airdropMarkerPopup = L.popup().setContent("Red Airdrop");
var airdropMarker = L.marker(map.unproject([10938, 1389], map.getMaxZoom()), {icon:redAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(redairdrop);


// blue airdrop
// the red forest
var airdropMarkerPopup = L.popup().setContent("Blue Airdrop");
var airdropMarker = L.marker(map.unproject([6904, 825], map.getMaxZoom()), {icon:blueAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(blueairdrop);
var airdropMarkerPopup = L.popup().setContent("Blue Airdrop");
var airdropMarker = L.marker(map.unproject([7039, 1112], map.getMaxZoom()), {icon:blueAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(blueairdrop);
var airdropMarkerPopup = L.popup().setContent("Blue Airdrop");
var airdropMarker = L.marker(map.unproject([6069, 912], map.getMaxZoom()), {icon:blueAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(blueairdrop);
var airdropMarkerPopup = L.popup().setContent("Blue Airdrop");
var airdropMarker = L.marker(map.unproject([5716, 1140], map.getMaxZoom()), {icon:blueAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(blueairdrop);
// backwater
var airdropMarkerPopup = L.popup().setContent("Blue Airdrop");
var airdropMarker = L.marker(map.unproject([10464, 1039], map.getMaxZoom()), {icon:blueAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(blueairdrop);
var airdropMarkerPopup = L.popup().setContent("Blue Airdrop");
var airdropMarker = L.marker(map.unproject([11602, 418], map.getMaxZoom()), {icon:blueAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(blueairdrop);
var airdropMarkerPopup = L.popup().setContent("Blue Airdrop");
var airdropMarker = L.marker(map.unproject([11148, 1252], map.getMaxZoom()), {icon:blueAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(blueairdrop);


// gold airdrop
// backwater
var airdropMarkerPopup = L.popup().setContent("Gold Airdrop");
var airdropMarker = L.marker(map.unproject([11437, 530], map.getMaxZoom()), {icon:goldAirdropIcon}).bindPopup(airdropMarkerPopup).addTo(goldairdrop);


// limansk bosses
// chimera
var chimeraBossMarkerPopup = L.popup().setContent("Chimera Boss");
var chimeraBossMarker = L.marker(map.unproject([5196, 1744], map.getMaxZoom()), {icon:miniBossIcon}).bindPopup(chimeraBossMarkerPopup).addTo(miniboss);
// bloodsucker
var bloodsuckerBossMarkerPopup = L.popup().setContent("Bloodsucker Boss");
var bloodsuckerBossMarker = L.marker(map.unproject([5110, 2388], map.getMaxZoom()), {icon:miniBossIcon}).bindPopup(bloodsuckerBossMarkerPopup).addTo(miniboss);
// rat
var ratBossMarkerPopup = L.popup().setContent("Rat Boss");
var ratBossMarker = L.marker(map.unproject([4965, 2916], map.getMaxZoom()), {icon:miniBossIcon}).bindPopup(ratBossMarkerPopup).addTo(miniboss);


// anomalies
// protocluster
// rostok factory
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([8878, 6904], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([8542, 7124], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([8022, 7307], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([7886, 7350], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([7786, 7362], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([7636, 7282], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([7466, 6922], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([7010, 6806], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
// path of fools
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([4984, 4802], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([5036, 5036], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([4892, 5208], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([4219, 4577], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([4216, 5121], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([5656, 4688], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([5913, 4420], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([6278, 4934], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([6603, 4580], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([6865, 5272], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
// army warehouses
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([7272, 6147], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([9738, 5830], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([9806, 5392], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([8842, 5527], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([9081, 5104], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([9451, 5079], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([9783, 4409], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([8530, 4389], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
// backwater
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([10592, 540], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);
var protoAnomalyMarkerPopup = L.popup().setContent("Proto-Electro Cluster");
var protoAnomalyMarker = L.marker(map.unproject([11831, 1623], map.getMaxZoom()), {icon:protoAnomalyIcon}).bindPopup(protoAnomalyMarkerPopup).addTo(anomaly);


// anomaly rift
// the pit
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5658, 8381], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6409, 8103], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5198, 7690], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6092, 7428], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6081, 7122], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// rostok factory
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7162, 7420], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7145, 7236], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7115, 7133], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7046, 6992], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7043, 6907], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7343, 6981], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7392, 7200], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7447, 7337], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7838, 7402], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8070, 7311], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8241, 7285], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7634, 6894], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8033, 6932], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8209, 7075], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8267, 6933], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8382, 7180], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8626, 7420], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8573, 6989], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8880, 6834], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// the forest
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9603, 7322], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9600, 7745], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9915, 8202], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([10485, 8070], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([10322, 7772], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([10464, 7460], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([10912, 7590], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([11078, 8359], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([11153, 8321], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// dead city
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4722, 6246], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5025, 6272], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5360, 6256], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4752, 5824], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5499, 5770], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// path of fools
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6517, 5309], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6464, 5106], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6175, 4778], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6382, 4543], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6378, 4433], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5738, 4335], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5175, 4711], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5110, 4978], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4820, 5226], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4292, 5246], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4278, 5002], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4660, 4836], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4294, 4564], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6034, 4484], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// army warehouses
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8477, 5952], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8996, 5806], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9580, 5831], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8750, 5559], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9381, 5327], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9913, 5367], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8756, 5270], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8982, 5163], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8668, 5011], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8912, 4883], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8410, 4899], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8398, 4737], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9475, 4869], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9597, 4560], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9146, 4461], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8795, 4466], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// limansk
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4785, 3961], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5023, 3972], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5413, 3884], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5418, 3940], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5704, 3907], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4551, 2083], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4926, 2121], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5177, 1653], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5220, 1378], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5492, 1333], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5525, 1375], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4451, 3198], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4451, 3198], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5607, 2850], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5501, 3243], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4572, 2528], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4292, 2662], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4679, 3608], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5544, 2106], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// the red forest
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6457, 3607], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6798, 3571], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6937, 3377], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6765, 3321], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6459, 2953], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5933, 2236], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6125, 2102], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6333, 1945], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6692, 2345], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6958, 2429], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6961, 2245], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6745, 2009], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7070, 1765], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5593, 738], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5906, 775], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6348, 667], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([6747, 1364], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7091, 677], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7408, 1080], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7463, 1272], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// yanov outskirts
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([7896, 3097], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8908, 3003], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9387, 3128], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9513, 3128], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9619, 2807], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9278, 2572], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9384, 2052], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8223, 1822], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9290, 1442], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([9110, 1346], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8596, 972], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([8514, 580], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
// backwater
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([11996, 1503], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);


// defending anomaly rift
// backwater
var defendingAnomalyRiftMarkerPopup = L.popup().setContent("Defending Anomalous Rift");
var defendingAnomalyRiftMarker = L.marker(map.unproject([11027, 287], map.getMaxZoom()), {icon:defendingAnomalyRiftIcon}).bindPopup(defendingAnomalyRiftMarkerPopup).addTo(anomaly);


// gold defending anomaly rift
// limansk
var goldDefendingAnomalyRiftMarkerPopup = L.popup().setContent("Gold Defending Anomalous Rift");
var goldDefendingAnomalyRiftMarker = L.marker(map.unproject([5224, 3067], map.getMaxZoom()), {icon:goldDefendingAnomalyRiftIcon}).bindPopup(goldDefendingAnomalyRiftMarkerPopup).addTo(anomaly);
var goldDefendingAnomalyRiftMarkerPopup = L.popup().setContent("Gold Defending Anomalous Rift");
var goldDefendingAnomalyRiftMarker = L.marker(map.unproject([5191, 2842], map.getMaxZoom()), {icon:goldDefendingAnomalyRiftIcon}).bindPopup(goldDefendingAnomalyRiftMarkerPopup).addTo(anomaly);
var goldDefendingAnomalyRiftMarkerPopup = L.popup().setContent("Gold Defending Anomalous Rift");
var goldDefendingAnomalyRiftMarker = L.marker(map.unproject([5218, 2423], map.getMaxZoom()), {icon:goldDefendingAnomalyRiftIcon}).bindPopup(goldDefendingAnomalyRiftMarkerPopup).addTo(anomaly);


// chronorifts
// backwater
var chronoriftMarkerPopup = L.popup().setContent("Chronorift");
var chronoriftMarker = L.marker(map.unproject([10092, 1110], map.getMaxZoom()), {icon:chronoriftIcon}).bindPopup(chronoriftMarkerPopup).addTo(anomaly);
var chronoriftMarkerPopup = L.popup().setContent("Chronorift");
var chronoriftMarker = L.marker(map.unproject([10612, 1636], map.getMaxZoom()), {icon:chronoriftIcon}).bindPopup(chronoriftMarkerPopup).addTo(anomaly);
var chronoriftMarkerPopup = L.popup().setContent("Chronorift");
var chronoriftMarker = L.marker(map.unproject([12378, 1224], map.getMaxZoom()), {icon:chronoriftIcon}).bindPopup(chronoriftMarkerPopup).addTo(anomaly);
var chronoriftMarkerPopup = L.popup().setContent("Chronorift");
var chronoriftMarker = L.marker(map.unproject([11475, 1117], map.getMaxZoom()), {icon:chronoriftIcon}).bindPopup(chronoriftMarkerPopup).addTo(anomaly);


// stasis
// the pit
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5201, 7932], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6211, 7804], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6010, 7340], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5711, 7972], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// the forest
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9704, 7473], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([10208, 7296], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([10999, 7506], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([11272, 7889], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([10870, 8150], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([10586, 7772], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// the dead city
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4616, 6065], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var tasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4480, 5901], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4994, 5779], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5500, 5776], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5325, 5562], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// army warehouses
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9127, 5196], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9761, 5364], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9682, 4543], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9097, 4337], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8132, 4517], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([7842, 3966], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([7235, 3882], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// the path of fools
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4535, 4904], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5354, 5211], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6311, 4877], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6857, 5223], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4588, 4395], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6958, 4663], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6123, 4390], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// limansk
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5650, 3988], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4995, 4030], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4842, 3868], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5381, 3794], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4657, 3571], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5058, 3535], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4537, 3106], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5026, 3135], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4344, 2673], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4583, 2528], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4572, 2107], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([4883, 2130], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5487, 2827], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5218, 2659], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5285, 2401], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5581, 2391], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5252, 1737], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5580, 1554], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// the red forest
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6751, 3477], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6548, 3377], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6446, 3002], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6248, 2099], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5546, 1055], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5691, 1142], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5668, 963], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5828, 832], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5432, 657], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([5433, 689], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([6832, 1031], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([7145, 572], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([7156, 598], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([7283, 1464], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([7468, 1011], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// yanov outskirts
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8138, 3315], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8934, 3354], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9120, 3059], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8675, 3027], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8074, 2913], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9280, 2527], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8939, 2354], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8056, 1988], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([7861, 1679], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8503, 1557], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([8513, 1320], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9480, 1454], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9182, 1020], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9391, 846], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
// backwater
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([9991, 423], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);
var stasisMarkerPopup = L.popup().setContent("Stasis");
var stasisMarker = L.marker(map.unproject([11037, 1650], map.getMaxZoom()), {icon:stasisIcon}).bindPopup(stasisMarkerPopup).addTo(anomaly);


// shelters
// the swamps
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4958, 15732], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6231, 15326], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6231, 15101], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4593, 14479], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4543, 13740], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4519, 13658], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4409, 13309], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5937, 13130], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5789, 14477], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6036, 14109], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6585, 13856], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// the cordon
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8542, 11005], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8582, 11633], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9000, 11714], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9341, 11660], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7742, 12362], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7953, 12355], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9611, 11990], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9697, 12462], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9671, 12670], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8041, 12669], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8440, 12961], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([9213, 13442], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7887, 13561], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8115, 13591], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// agroprom
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6345, 11682], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6152, 10875], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5470, 10912], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7062, 10431], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5383, 10266], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5123, 9539], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6241, 9743], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6521, 9690], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6709, 9611], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// the dump
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7952, 10708], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7844, 10674], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8005, 10518], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7989, 10420], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8045, 10385], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7827, 10195], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8091, 10106], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7954, 9966], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7994, 9850], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7708, 9607], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7991, 9418], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8213, 9240], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7545, 8815], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9227, 10682], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9445, 10653], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9293, 10549], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9315, 10387], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8721, 10248], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8563, 10152], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8497, 9642], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8524, 9498], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9252, 9588], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9019, 9287], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8744, 8830], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// dark valley
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10778, 11927], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10545, 11798], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10636, 11136], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10604, 10976], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10752, 10760], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10228, 10725], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10377, 10318], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11117, 10157], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10669, 9775], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11277, 9579], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10732, 9610], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10774, 9369], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10448, 9297], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10211, 9542], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// the pit
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5720, 8921], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6160, 8020], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6073, 8003], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5884, 7972], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6415, 7907], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5187, 7860], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5832, 7675], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6517, 7666], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5355, 7377], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5743, 6926], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// rostok factory
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6500, 7350], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6983, 7332], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6971, 6929], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7277, 7256], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7476, 6857], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7717, 7338], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7616, 7186], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7840, 7121], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7952, 7338], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7991, 7020], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8118, 6785], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8346, 7227], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8523, 7039], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8616, 7253], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8699, 7341], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8695, 6981], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9194, 7775], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9245, 8052], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9493, 8248], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// the forest
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10132, 8398], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10629, 8106], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10530, 8011], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10484, 7941], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10576, 7927], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10882, 7983], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10489, 7826], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10705, 7811], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10773, 7790], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10621, 7728], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10905, 7678], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10971, 7660], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11088, 7569], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10936, 7520], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([10382, 7338], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11402, 7552], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11624, 7669], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11514, 7520], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11596, 7433], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([11471, 7326], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
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
// the path of fools
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6662, 5033], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([5670, 5101], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([5393, 4454], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6239, 4411], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([5877, 4497], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6378, 4444], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6481, 4417], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4107, 4928], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4303, 5040], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4509, 4967], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4445, 4504], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4665, 4619], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4599, 4326], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4997, 5081], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5215, 5033], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5478, 5069], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([5617, 4356], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5783, 5333], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7094, 5072], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7307, 4571], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7222, 3990], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([4829, 4346], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([4619, 4477], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([4793, 4675], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([4156, 4847], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([4317, 5365], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// army warehouses
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7898, 4443], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7398, 6413], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7632, 6434], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7632, 6317], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7629, 6082], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8882, 6120], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9112, 6195], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9278, 6147], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8883, 5889], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8788, 5712], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8322, 5846], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8328, 5766], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8373, 5635], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8438, 5586], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8791, 5712], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9732, 5692], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9543, 5265], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8927, 5380], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8847, 5201], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8541, 5239], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8949, 4996], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8724, 4931], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8221, 4775], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8604, 4415], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9041, 4323], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9445, 4487], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9347, 4697], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9688, 4649], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9346, 4420], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9251, 4796], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8431, 4138], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9696, 3992], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9384, 3716], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// limansk
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5558, 1792], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4657, 3819], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5857, 3995], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5113, 2397], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4926, 2550], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4724, 2475], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5224, 2414], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5010, 2957], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([4981, 1528], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5021, 1776], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// the red forest
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([7246, 3093], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([5616, 955], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6053, 1257], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6570, 765], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6789, 1239], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7251, 1124], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7535, 1124], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7327, 1221], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7321, 966], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6077, 2032], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6052, 1669], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6412, 2137], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6329, 2617], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6906, 2505], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6983, 2377], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7011, 3504], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7030, 3638], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([6293, 3711], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6685, 3286], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6670, 3385], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6355, 3203], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6354, 3528], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([6587, 3760], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Confirmed");
var shelterMarker = L.marker(map.unproject([7049, 3338], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// yanov outskirts
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7922, 773], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8916, 641], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8328, 755], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8309, 1086], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8502, 1098], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8437, 1230], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8588, 1468], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8355, 1646], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7840, 1690], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([7805, 1943], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8093, 2088], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8038, 2796], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8143, 2616], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8055, 3089], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8151, 3119], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8289, 3229], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8822, 3122], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9075, 2808], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9016, 2827], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9283, 3300], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9666, 3147], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9293, 2536], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9515, 2510], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([8968, 1429], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9145, 1460], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9122, 1291], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9284, 1288], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9308, 1436], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9111, 1148], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9399, 1641], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9467, 1786], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9484, 1184], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Still need to verify");
var shelterMarker = L.marker(map.unproject([9652, 1540], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
// backwater
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([12183, 1202], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([12358, 1645], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([11360, 1288], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([11569, 412], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([10667, 1709], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([11122, 1771], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([10796, 1387], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([10635, 1030], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([10070, 1102], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([10511, 627], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);
var shelterMarkerPopup = L.popup().setContent("Shelter");
var shelterMarker = L.marker(map.unproject([10365, 1201], map.getMaxZoom()), {icon:shelterIcon}).bindPopup(shelterMarkerPopup).addTo(shelter);


// limansk spawns
// enter spawn
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([4601, 4152], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5160, 4110], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5530, 4016], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5614, 3415], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5830, 3038], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5789, 2849], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5790, 2626], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5825, 2524], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5465, 1298], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Limansk");
var enterSpawnLimanskMarker = L.marker(map.unproject([5209, 1293], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
// exit spawn
var exitSpawnLimanskMarkerPopup = L.popup().setContent("Exit spawn from Limansk (verify)");
var exitSpawnLimanskMarker = L.marker(map.unproject([6866, 5440], map.getMaxZoom()), {icon:exitSpawnIcon}).bindPopup(exitSpawnLimanskMarkerPopup).addTo(exitspawn);
var exitSpawnLimanskMarkerPopup = L.popup().setContent("Exit spawn from Limansk");
var exitSpawnLimanskMarker = L.marker(map.unproject([6042, 5294], map.getMaxZoom()), {icon:exitSpawnIcon}).bindPopup(exitSpawnLimanskMarkerPopup).addTo(exitspawn);


// backwater spawns
// enter spawn
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Backwater");
var enterSpawnLimanskMarker = L.marker(map.unproject([10145, 2382], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
var enterSpawnLimanskMarkerPopup = L.popup().setContent("Enter spawn in Backwater");
var enterSpawnLimanskMarker = L.marker(map.unproject([12163, 2283], map.getMaxZoom()), {icon:enterSpawnIcon}).bindPopup(enterSpawnLimanskMarkerPopup).addTo(enterspawn);
// exit spawn


// add layer control
L.control.layers(null, main, {collapsed:false}).addTo(map);
L.control.layers(null, secondary, {collapsed:false}).addTo(map);
L.control.layers(null, testing, {collapsed:false}).addTo(map);


// disable right click menu
//document.addEventListener('contextmenu', event => event.preventDefault());
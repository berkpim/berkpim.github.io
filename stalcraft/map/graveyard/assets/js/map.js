// declare map
var map = L.map('map').setView([0, 0], 2);
map.removeControl(map.zoomControl);
map.attributionControl.setPrefix(false);


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
var base = new L.layerGroup().addTo(map);
var conquestbase = new L.layerGroup().addTo(map);
var mapchange = new L.layerGroup().addTo(map);
var underground = new L.layerGroup().addTo(map);
var portal = new L.layerGroup().addTo(map);
var bubble = new L.layerGroup().addTo(map);
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
var monolith = new L.layerGroup().addTo(map);
var pseudogiant = new L.layerGroup().addTo(map);
var chimera = new L.layerGroup().addTo(map);
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
	"Monolith": monolith,
	"Chimera": chimera,
	"Pseudogiant": pseudogiant,
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
var chimeraIcon = L.icon({iconUrl: 'assets/images/icons/chimera-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});

// anomalies
var protoAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/proto-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var researchAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/research-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var defendingResearchAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/defending-research-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var goldDefendingResearchAnomalyIcon = L.icon({iconUrl: 'assets/images/icons/gold-defending-research-anomaly-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var chronoriftIcon = L.icon({iconUrl: 'assets/images/icons/chronorift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var stasisIcon = L.icon({iconUrl: 'assets/images/icons/stasis-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});


// test draggable marker
var marker = L.marker(map.unproject([4104, 3452], map.getMaxZoom()), {draggable: true, icon: testIcon}).bindPopup('').addTo(test);

marker.on('dragend', function(e) {
	marker.getPopup().setContent('Pixels ' + map.project(marker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
});


// add layer control
L.control.layers(null, main, {collapsed:false}).addTo(map);
L.control.layers(null, secondary, {collapsed:false}).addTo(map);
L.control.layers(null, testing, {collapsed:false}).addTo(map);


// disable right click menu
//document.addEventListener('contextmenu', event => event.preventDefault());
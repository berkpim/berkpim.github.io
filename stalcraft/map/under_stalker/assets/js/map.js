// declare map
var map = L.map('map').setView([0, 0], 2);
map.removeControl(map.zoomControl);
//map.attributionControl.setPrefix(false);


// reference the tiles
L.tileLayer('assets/images/tiles/underground/{z}/{x}/{y}.png', {
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
var mapchange = new L.layerGroup().addTo(map);
// events
var bloodsucker = new L.layerGroup().addTo(map);
var freedom = new L.layerGroup().addTo(map);
var duty = new L.layerGroup().addTo(map);
//anomaly
var anomaly = new L.layerGroup().addTo(map);
// others
var shelter = new L.layerGroup();
var test = new L.layerGroup();


var main = {
	"Zone Names" : zone,
	"Bases" : base,
	"Map Change" : mapchange,
	"Bloodsuckers": bloodsucker,
	"Freedom": freedom,
	"Duty": duty,
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
var baseIcon = L.icon({iconUrl: 'assets/images/icons/base-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var oneWayUndergroundIcon = L.icon({iconUrl: 'assets/images/icons/one-way-underground-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var undergroundIcon = L.icon({iconUrl: 'assets/images/icons/underground-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var shelterIcon = L.icon({iconUrl: 'assets/images/icons/shelter-icon.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// events
var mutantIcon = L.icon({iconUrl: 'assets/images/icons/mutant-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var freedomCampIcon = L.icon({iconUrl: 'assets/images/icons/freedom-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var dutyCampIcon = L.icon({iconUrl: 'assets/images/icons/duty-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// anomalies
var anomalyRiftIcon = L.icon({iconUrl: 'assets/images/icons/anomaly-rift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});


// test draggable marker
var testmarker = L.marker(map.unproject([4080, 4080], map.getMaxZoom()), {draggable: true, icon: testIcon}).bindPopup('').addTo(test);

testmarker.on('dragend', function(e) {
	testmarker.getPopup().setContent('Pixels ' + map.project(testmarker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
});


// base
var freedomBaseMarkerPopup = L.popup().setContent("Freedom Base");
var freedomBaseMarker = L.marker(map.unproject([4594, 7506], map.getMaxZoom()), {icon:baseIcon}).bindPopup(freedomBaseMarkerPopup).addTo(base);


// one way
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([858, 3440], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([1202, 4128], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([1880, 4344], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([4348, 2072], map.getMaxZoom()), {rotationAngle: -45, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([4592, 1990 ], map.getMaxZoom()), {rotationAngle: -45, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([4718, 2136], map.getMaxZoom()), {rotationAngle: -45, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([5004, 1656], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([5816, 2880], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6142, 3010], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6254, 3224], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6148, 5172], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6494, 3482], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6662, 4528], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([7048, 5940], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6714, 5996], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6454, 5826], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);


// mapchange
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([1197, 2043], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([1988, 3448], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2864, 1016], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2840, 1984], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([3284, 4596], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([3432, 1918], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([3616, 1448], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4060, 1472], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4072, 1876], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4580, 5228], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4716, 4808], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4944, 5224], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([5040, 4796], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([5352, 3116], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([5952, 1864], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([6152, 1996], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([6428, 4636], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([5586, 7326], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2886, 6411], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2996, 6308], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2812, 5994], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([3107, 5805], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);


// events
// bloodsucker
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([2250, 3256], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([3832, 1836], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4344, 4428], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4268, 3084], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);


// anomalies
// anomalous rift
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4018, 4426], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4884, 3814], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([3750, 2558], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4176, 3828], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);


// add layer control
L.control.layers(null, main, {collapsed:false}).addTo(map);
L.control.layers(null, secondary, {collapsed:false}).addTo(map);
L.control.layers(null, testing, {collapsed:false}).addTo(map);


// disable right click menu
//document.addEventListener('contextmenu', event => event.preventDefault());
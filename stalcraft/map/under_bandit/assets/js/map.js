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
var rodent = new L.layerGroup().addTo(map);
var covenant = new L.layerGroup().addTo(map);
var mercenary = new L.layerGroup().addTo(map);
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
	"Rodents": rodent,
	"Covenant": covenant,
	"Mercenary": mercenary,
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
var covenantCampIcon = L.icon({iconUrl: 'assets/images/icons/covenant-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
var mercenaryCampIcon = L.icon({iconUrl: 'assets/images/icons/mercenary-camp-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});
// anomalies
var anomalyRiftIcon = L.icon({iconUrl: 'assets/images/icons/anomaly-rift-event.png', iconSize: [28, 28], iconAnchor: [14, 14]});


// test draggable marker
var testmarker = L.marker(map.unproject([4080, 4080], map.getMaxZoom()), {draggable: true, icon: testIcon}).bindPopup('').addTo(test);

testmarker.on('dragend', function(e) {
	testmarker.getPopup().setContent('Pixels ' + map.project(testmarker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
});


// base
var covenantBaseMarkerPopup = L.popup().setContent("Covenant Base");
var covenantBaseMarker = L.marker(map.unproject([3600, 4980], map.getMaxZoom()), {icon:baseIcon}).bindPopup(covenantBaseMarkerPopup).addTo(base);


// one way
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([1202, 4541], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([1328, 3872], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([2236, 4360], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([2344, 3948], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([2306, 3772], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([3760, 5634], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([3808, 4377], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([4492, 2955], map.getMaxZoom()), {rotationAngle: 180, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([5418, 5201], map.getMaxZoom()), {rotationAngle: -90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([5899, 2802], map.getMaxZoom()), {icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("One way");
var mapChangeMarker = L.marker(map.unproject([6374, 3568], map.getMaxZoom()), {rotationAngle: 90, icon:oneWayUndergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);


// mapchange
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([540, 4566], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([1054, 3752], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([1534, 4732], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([1726, 4072], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([1958, 3754], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2374, 5482], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2486, 4774], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2706, 4890], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2882, 4784], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([2940, 4268], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([3094, 4958], map.getMaxZoom()), {icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([3194, 4364], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4384, 4972], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4834, 5080], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([4994, 4924], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([5188, 4400], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([6338, 4952], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);
var mapChangeMarkerPopup = L.popup().setContent("to Army Warehouses");
var mapChangeMarker = L.marker(map.unproject([6702, 3954], map.getMaxZoom()), {rotationAngle: 180, icon:undergroundIcon}).bindPopup(mapChangeMarkerPopup).addTo(mapchange);


// events
// bloodsucker
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4042, 3307], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([4774, 3776], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5794, 3239], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5960, 4976], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([5264, 4640], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
var bloodsuckerMarkerPopup = L.popup().setContent("Bloodsucker Den");
var bloodsuckerMarker = L.marker(map.unproject([3921, 4423], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(bloodsuckerMarkerPopup).addTo(bloodsucker);
// covenant
var covenantMarkerPopup = L.popup().setContent("Covenant Encampment");
var covenantMarker = L.marker(map.unproject([3167, 3840], map.getMaxZoom()), {icon:covenantCampIcon}).bindPopup(covenantMarkerPopup).addTo(covenant);
var covenantMarkerPopup = L.popup().setContent("Covenant Encampment");
var covenantMarker = L.marker(map.unproject([5066, 2706], map.getMaxZoom()), {icon:covenantCampIcon}).bindPopup(covenantMarkerPopup).addTo(covenant);
var covenantMarkerPopup = L.popup().setContent("Covenant Encampment");
var covenantMarker = L.marker(map.unproject([6320, 4721], map.getMaxZoom()), {icon:covenantCampIcon}).bindPopup(covenantMarkerPopup).addTo(covenant);
var covenantMarkerPopup = L.popup().setContent("Covenant Encampment");
var covenantMarker = L.marker(map.unproject([7024, 4742], map.getMaxZoom()), {icon:covenantCampIcon}).bindPopup(covenantMarkerPopup).addTo(covenant);
var covenantMarkerPopup = L.popup().setContent("Covenant Encampment");
var covenantMarker = L.marker(map.unproject([2024, 3936], map.getMaxZoom()), {icon:covenantCampIcon}).bindPopup(covenantMarkerPopup).addTo(covenant);
var covenantMarkerPopup = L.popup().setContent("Covenant Encampment");
var covenantMarker = L.marker(map.unproject([6296, 4119], map.getMaxZoom()), {icon:covenantCampIcon}).bindPopup(covenantMarkerPopup).addTo(covenant);
// rodents
var rodentMarkerPopup = L.popup().setContent("Rodent Nest");
var rodenttMarker = L.marker(map.unproject([5233, 4899], map.getMaxZoom()), {icon:mutantIcon}).bindPopup(rodentMarkerPopup).addTo(rodent);


// anomalies
// anomalous rift
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5500, 3862], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5895, 3547], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([5264, 3179], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);
var anomalyRiftMarkerPopup = L.popup().setContent("Anomalous Rift");
var anomalyRfitMarker = L.marker(map.unproject([4699, 4131], map.getMaxZoom()), {icon:anomalyRiftIcon}).bindPopup(anomalyRiftMarkerPopup).addTo(anomaly);


// add layer control
L.control.layers(null, main, {collapsed:false}).addTo(map);
L.control.layers(null, secondary, {collapsed:false}).addTo(map);
L.control.layers(null, testing, {collapsed:false}).addTo(map);


// disable right click menu
//document.addEventListener('contextmenu', event => event.preventDefault());
var statLat = -6.208763;
var statLng = 106.845599;
var zoomStat = 8;
var map;
var markerList = []; //variabel penyimpan marker
var infoW;
var poly; //variabel custom polyline


//create marker and info windows when clicked
//stored marker into array
function createMark(items){
	
	//pembuatan koordinat titik
	var marker = new google.maps.LatLng(items['lat'],items['lng']);

    //memasukan informasi marker
	var markerDet = new google.maps.Marker({
		id:items['id'],
		position: marker,
		draggable:false,
		map: map,
		title: items['name']
	});
	
	//store marker to array
	markerList[markerDet.id] = markerDet;
	
	
	//create event listener when marker clicked
	google.maps.event.addListener(markerDet, 'click', function() {  
                
		var marker1 = markerList[markerDet.id];
                
		if( marker1 ){
			
			//set infowindows saat marker di klik
	        infoW.setContent(items['name']);
			infoW.open(map,marker1);
			
		}else{
			alert('Error marker not found: ' + markerDet.id);
		}
	});
}

function initialize() {
	
  var mapOptions = {
    zoom: zoomStat,
    center: new google.maps.LatLng(statLat, statLng),
	mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  //initial info windows
  infoW = new google.maps.InfoWindow();	  
  
  //creating polyline information
  var polyOptions = {
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  };
  
  //initial polyline to map
  poly = new google.maps.Polyline(polyOptions);
  poly.setMap(map);
  var path;
	  
  //initial marker and push into polyline list
  //retrieve data from databases as json format
  $.getJSON("http://localhost/sample-map/get-polyline.php", function(data){
		$.each(data, function(i,items){
			
			//initial marker
			createMark(items);
			
			//push marker to polyline list
			path = poly.getPath();
			path.push(new google.maps.LatLng(items['lat'], items['lng']));
		});
	});
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

//starting script
window.onload = loadScript;

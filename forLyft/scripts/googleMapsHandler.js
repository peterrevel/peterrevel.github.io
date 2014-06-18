var sanFrancisco = new google.maps.LatLng(37.7833, -122.4167);
var directionsDisplayOne;
var directionsDisplayTwo;
var directionsDisplayBestDetour;
var directionsService;
var map;
var markers = [];

function initialize() {
	directionsDisplayOne = new google.maps.DirectionsRenderer();
	directionsDisplayTwo = new google.maps.DirectionsRenderer();
	directionsDisplayBestDetour = new google.maps.DirectionsRenderer({
		markerOptions: {
			//visible: false
		},
		polylineOptions: {
			strokeColor: 'rgb(214, 56, 174)',
			strokeOpacity: 0.5,
			strokeWeight: 5
		}
	});

	directionsService = new google.maps.DirectionsService();

	var mapOptions = {
		center: sanFrancisco,
		zoom: 13,
		disableDefaultUI: true
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	directionsDisplayOne.setMap(map);
	directionsDisplayTwo.setMap(map);
	directionsDisplayBestDetour.setMap(map);
	google.maps.event.addListener(map, 'click', function(e) {
		placeMarker(e.latLng, map);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

function clearMarkers(){
	markers.forEach(function(entry) {
		entry.setMap(null);
	});
}
function clearOtherTrips(){
	directionsDisplayOne.setMap(null);
	directionsDisplayTwo.setMap(null);
}
function placeMarker(position, map) {
	if (markers.length < 4) {
		var marker = new google.maps.Marker({
			position: position,
			draggable: true,
			map: map
		});
		map.panTo(position);
		markers.push(marker);
	};
	if (markers.length == 1) {
		$(".messageBanner").text("Great! Now set an endpoint.");
	};
	if (markers.length == 2) {
		$(".messageBanner").text("You got this. Give me a second ride.");
		calcRoute(markers[0].position, markers[1].position, directionsDisplayOne);
		clearMarkers();
	};
	if (markers.length == 4) {
		calcRoute(markers[2].position, markers[3].position, directionsDisplayTwo);
		clearMarkers();
		drawShortestDetour();
	};
}

function drawShortestDetour() {
	var service = new google.maps.DistanceMatrixService();
	service.getDistanceMatrix({
		origins: [markers[1].position, markers[3].position],
		destinations: [markers[2].position, markers[0].position],
		unitSystem: google.maps.UnitSystem.IMPERIAL,
		travelMode: google.maps.TravelMode.DRIVING,
	}, callback);

	function callback(response, status) {
		// See Parsing the Results for
		// the basics of a callback function.
		if (status == google.maps.DistanceMatrixStatus.OK) {
			var detourForTripA = response.rows[0].elements[0].distance;
			var detourForTripB = response.rows[1].elements[1].distance;
			if (detourForTripA.value < detourForTripB.value) {
				var wayPoints = [
					{
						location:markers[1].position,
          				stopover:true
					},
					{
						location:markers[2].position,
          				stopover:true
					}
				];
				clearOtherTrips();
				calcRoute(markers[0].position, markers[3].position, directionsDisplayBestDetour, wayPoints);
				$(".messageBanner").text("Completing ride 1 then 2 makes for the shortest detour @ " + detourForTripA.text);
			} else{
				var wayPoints = [
					{
						location:markers[3].position,
          				stopover:true
					},
					{
						location:markers[0].position,
          				stopover:true
					}
				];
				clearOtherTrips();
				calcRoute(markers[2].position, markers[1].position, directionsDisplayBestDetour, wayPoints);
				$(".messageBanner").text("Completing ride 2 then 1 makes for the shortest detour @ " + detourForTripB.text);
			};
		}
	}
}

function calcRoute(start, end, dd, wayPoints) {
	var request = {
		origin:start,
		destination:end,
		waypoints: wayPoints,
		travelMode: google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			dd.setDirections(response);
		}
	});
}
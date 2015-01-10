(function() {
  var handler = Gmaps.build('Google'),
      mapOptions = $('meta[name=mapOptions]').attr('content');
      locations = $('meta[name=locations]').attr('content');

  mapOptions = JSON.parse(mapOptions);
  locations = JSON.parse(locations);
  mapOptions.provider.zoomControlOptions = google.maps.ZoomControlStyle.SMALL;

  var markerLocations = [];

  var generateMarkerData = function(element) {

    var groups = element.groups;

    groups.forEach( function(element){

      if(typeof element.image == 'undefined'){
        element.image = "map-pin.png";
      }

      var markerIcon = {
          "url": '/images/meetups/'+element.image,
          "width": 20,
          "height": 28
      };
      var orgMarkup = "";
      if(element.organizers){
        element.organizers.forEach( function(el){
          if( typeof el.profileImage == 'undefined'){
            el.profileImage = "http://photos3.meetupstatic.com/photos/member/d/c/7/0/highres_179096432.jpeg";
          }
          orgMarkup += "<div class='organizer'><img src='"+el.profileImage+"' class='profile'><strong>"+el.organizer+"</strong><br>Organizer</div>";
        });
      }

      element.infowindow = "<div class='map-marker'><h2>"+element.location+"</h2>"+orgMarkup+"<div class='view'><a href='"+element.url+"' target='_blank'>Go to meetup page</a></div></div>";
      element.picture = markerIcon;

      if(element.lat && element.lng){
        markerLocations.push(element);
      }
    });
  }

  locations.forEach( generateMarkerData );

  handler.buildMap(mapOptions, function() {
    if(navigator.geolocation) {
      var geoLocation = navigator.geolocation.getCurrentPosition(drawMap);
    } else {
      drawMap();
    }
  } );
  function drawMap(position){
    var markers = handler.addMarkers(markerLocations);
    handler.bounds.extendWith(markers);
    if (position) {
      var marker = handler.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      handler.map.centerOn(marker);
      handler.bounds.extendWith(marker);
    }
    handler.fitMapToBounds();
  }
})();

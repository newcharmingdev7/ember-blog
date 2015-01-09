(function() {
  var handler = Gmaps.build('Google'),
      mapOptions = $('meta[name=mapOptions]').attr('content');

  mapOptions = JSON.parse(mapOptions);
  mapOptions.provider.zoomControlOptions = google.maps.ZoomControlStyle.SMALL;

  handler.buildMap(mapOptions, function() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(drawMap);
    } else {
      drawMap();
    }
  } );
  function drawMap(position){
    var markers = handler.addMarkers([
      {
        "lat": 33.7677129,
        "lng": -84.420604,
        "picture": {
          "url": "/images/meetups/map-pin.png",
          "width": 20,
          "height": 28
        },
        "infowindow": "<div class='map-marker'><h2>Atlanta, GA</h2><div class='organizer'><img src='http://photos3.meetupstatic.com/photos/member/d/c/7/0/highres_179096432.jpeg' class='profile'><strong>William Metz</strong><br>Organizer</div><div class='organizer'><img src='http://photos2.meetupstatic.com/photos/member/a/5/3/4/member_238302292.jpeg' class='profile'><strong>Chris McCuller</strong><br>Organizer</div><div class='organizer'><img src='http://photos4.meetupstatic.com/photos/member/b/d/4/e/member_214428462.jpeg' class='profile'><strong>Shane Ballman</strong><br>Organizer</div><div class='view'><a href='#' target='_blank'>Go to meetup page</a></div></div>"
      },
    ]);
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

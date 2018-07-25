// Initialize google maps
function contactMap() {
  var myCenter = new google.maps.LatLng(45.676998,-111.042931);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
var map = L.map('map').setView([40.712587, -74.043421], 18);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2lsbGtheTEwIiwiYSI6ImNsMTN0NmdsYzBjZzAzanAzbHl0c2NzOWQifQ.eIR5fE294dHpU_Ef7b-QFg'
}).addTo(map);

L.Routing.control({
  waypoints: [
    L.latLng(40.712587, -74.043421),
    L.latLng(39.953773, -75.936127)
  ],
  router: L.Routing.mapbox('sk.eyJ1Ijoid2lsbGtheTEwIiwiYSI6ImNsNDNmM3dpcjE3aDUzY29maGNlaDFzMmIifQ.JxwYKZq9mVge1pOMpCcl7Q')
}).addTo(map);

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

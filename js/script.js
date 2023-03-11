function iniciarMap(){
    var coord = {lat:-12.0792205,lng: -76.8925065};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

function iniciarMap(){
    var coord = {lat:-33.02284132684855 ,lng: -68.87396790233731};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


const initDrawing = (map)=> {
  new google.maps.drawing.DrawingManager({
    map: map
  })
};


//Function que inicializa o Maps Base
async function initMap() {
  var mapOptions = {
    center: {lat:-18.31, lng:-53.40},
    zoom: 4.5,
    mapTypeId: 'hybrid' //roadmap, satellite, hybrid, terrain
  }
  let map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  initDrawing(map)
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

async
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzLF7WimYPiwYu26I-fLlW9-q-iltEC-Q"

// The location of Uluru
const uluru = { lat: -25.344, lng: 131.036 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: uluru,
});

// The marker, positioned at Uluru
const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

initMap()
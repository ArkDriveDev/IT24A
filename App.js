class LeafletMap {
    /*I understand these as initializing the open streetmap*/
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, classroom) {
        let Clicked_marker;
        const marker = L.marker([lat, lng]).addTo(this.map);
        
        marker.on('click', () => {
            //function on changing page for clicking marker
            window.location.href = 'Classroom.html';
            Clicked_marker=`${classroom}`;
            alert("Welcome to "+Clicked_marker);
        });
        
        marker.bindPopup(classroom);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    /*Array_list instantation for addmarker function parameters*/ 
                    this.addMarker(marker.latitude, marker.longitude, marker.classroom);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

/*Instantion for map zoomed coordinates references the containerID,center,zoom*/
const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);

/*json for loadmarker array_list */
myMap.loadMarkersFromJson('Pins.json');
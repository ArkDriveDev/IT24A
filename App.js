class LeafletMap {
    constructor(containerId, center, zoom, locationId) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
        this.initMoveEndListener();
        
        // Initialize Loc_ID using the provided locationId
        this.Loc_ID = document.getElementById(locationId);
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, classroom) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        
        marker.on('click', () => {
            // Store clicked marker in localStorage
            localStorage.setItem('clickedMarker', classroom);
            // Navigate to the classroom page
            window.location.href = 'Classroom.html';
        });
        
        marker.bindPopup(classroom);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.classroom);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }

    initMoveEndListener() {
        this.map.on('moveend', () => {
            const center = this.map.getCenter();
            const lat = center.lat;
            const lng = center.lng;
            // Update the Loc_ID element with the coordinates
            this.Loc_ID.innerHTML = "Latitude: " + lat.toFixed(6) + ", Longitude: " + lng.toFixed(6);
        });
    }
}

/* Instantiate for map zoomed coordinates referencing the containerId, center, zoom, and locationId */
const myMap = new LeafletMap('map', [8.360004, 124.868419], 18, 'location_id');

/* JSON for loading markers */
myMap.loadMarkersFromJson('Pins.json');

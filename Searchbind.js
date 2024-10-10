class SearchList{
    constructor(dataUrl1, dataUrl2) {
        this.dataUrls = [dataUrl1, dataUrl2];
        this.classrooms = [];
        this.classes = [];
        this.init();
    }
    async init() {
        await this.fetchData();
    } 
    async fetchData() {
        try {
            const responses = await Promise.all(this.dataUrls.map(url => fetch(url)));
            const dataArrays = await Promise.all(responses.map(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
            }));

            // First JSON structure (Classes)
            const classData = dataArrays[0]; // Classes.json
            this.classes = []; // Reset classes array
            Object.keys(classData).forEach(category => {
                this.classes.push(...classData[category]); // Add each class to the classes array
            });

            // Second JSON structure (Classrooms)
            const classroomData = dataArrays[1]; // Pins.json
            this.classrooms = classroomData.map(item => item.classroom); // Store classroom names
        } catch (error) {
            console.error('Error fetching data:', error); // Log any errors
        }
    }
}
window.onload = () => {
    const classList = new SearchList('Classes.json','Pins.json');
    classList.init();
}
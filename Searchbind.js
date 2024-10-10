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
        const ara1 = document.getElementById("array1");
        const ara2 = document.getElementById("array2");
        
        try {
            const responses = await Promise.all(this.dataUrls.map(url => fetch(url)));
            const dataArrays = await Promise.all(responses.map(response => response.json()));
    
            // First JSON structure (Classes)
            const classData = dataArrays[0];
            ara1.innerHTML = ''; // Clear existing content
            Object.keys(classData).forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.innerHTML = `<strong>${category}</strong>`; // Display category name
                classData[category].forEach(classItem => {
                    const div = document.createElement('div');
                    div.textContent = classItem; // Display each class
                    categoryDiv.appendChild(div);
                });
                ara1.appendChild(categoryDiv);
            });
    
            // Second JSON structure (Classrooms)
            const classroomData = dataArrays[1];
            ara2.innerHTML = ''; // Clear existing content
            classroomData.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item.classroom; // Display classroom name
                ara2.appendChild(div);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    /*async fetchData() {
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
        console.log('Classes:', classData); // Log class data

        // Second JSON structure (Classrooms)
        const classroomData = dataArrays[1]; // Pins.json
        console.log('Classrooms:', classroomData); // Log classroom data

    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
    }
}*/
}
window.onload = () => {
    const classList = new SearchList('Classes.json','Pins.json');
    classList.init();
}
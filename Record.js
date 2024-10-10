class Recordsfunctions {
    constructor(logs, results) {
        this.Logs = document.getElementById(logs);//these is the ResultCount
        this.result = document.getElementById(results);
        this.AttendanceRecords = JSON.parse(localStorage.getItem('AttendanceRecords')) || [];
        this.bindSearchEvent(); // Bind search event
    }

    loadRecords() {
        this.renderRecords(this.AttendanceRecords); // Load all records initially
        const logCount = this.AttendanceRecords.length;
        this.result.innerHTML = `Result: ${logCount}`; // Update the count
    }

    renderRecords(records) {
        this.Logs.innerHTML = ""; // Clear previous logs
        records.forEach(classitem => {
            const list = document.createElement("li");
            list.textContent = classitem; // Set text to the attendance item
            this.Logs.appendChild(list); // Append the list item
        });
    }

    clearRecords() {
        localStorage.removeItem('AttendanceRecords');
        this.AttendanceRecords = []; // Reset the array
        this.loadRecords(); // Refresh the display
    }
    //bind from navbar.js with id searchbar
    bindSearchEvent() {
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('input', () => {
            //on caret searchbar event calling the filterrecords
            this.filterRecords(searchBar.value);
        });
    }
    //Caret inputed data in search bar then filter ResultCount
    filterRecords(query) {
        const filteredRecords = this.AttendanceRecords.filter(record => 
            record.toLowerCase().includes(query.toLowerCase())
        );
        //calling the renderRecords function to render filtered data
        this.renderRecords(filteredRecords); // Render filtered records
        const logCount = filteredRecords.length;
        this.result.innerHTML = `Result: ${logCount}`; // Update the count
    }
}

// Create an instance of Recordsfunctions and load records on window load
window.onload = () => {
    const recordsFunctions = new Recordsfunctions('arrayDisplay', 'ResultCount'); 
    recordsFunctions.loadRecords(); // Call the loadRecords method

    document.getElementById('clearButton').onclick = () => {
        recordsFunctions.clearRecords(); // Call the clearRecords method
    };
};

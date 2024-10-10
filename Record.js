class Recordsfunctions {
    constructor(logs, results) {
       this.Logs = document.getElementById(logs); // Change the ID here
       this.result = document.getElementById(results);
       this.AttendanceRecords = JSON.parse(localStorage.getItem('AttendanceRecords')) || [];
    }

    loadRecords() {
        this.Logs.innerHTML = ""; // Clear previous logs

        // Load records from local storage

        this.AttendanceRecords.forEach(classitem => {
            const list = document.createElement("li");
            list.textContent = classitem; // Set text to the class attendance item
            this.Logs.appendChild(list); // Append the list item to the log
        });

        const logCount = this.AttendanceRecords.length;
        this.result.innerHTML = `Result: ${logCount}`; // Update the text in the h2
    }
    clearRecords() {
        // Clear the local storage and update the records
        localStorage.removeItem('AttendanceRecords');
        this.AttendanceRecords = []; // Reset the array
        this.loadRecords(); // Refresh the display
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

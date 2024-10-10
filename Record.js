class Recordsfunctions {
    constructor(logs, results) {
        this.Logs = document.getElementById(logs); // Change the ID here
        this.result = document.getElementById(results);
    }

    loadRecords() {
        this.Logs.innerHTML = ""; // Clear previous logs

        // Load records from local storage
        const AttendanceRecords = JSON.parse(localStorage.getItem('AttendanceRecords')) || [];

        AttendanceRecords.forEach(classitem => {
            const list = document.createElement("li");
            list.textContent = classitem; // Set text to the class attendance item
            this.Logs.appendChild(list); // Append the list item to the log
        });

        const logCount = AttendanceRecords.length;
        this.result.innerHTML = `Result: ${logCount}`; // Update the text in the h2
    }
}

// Create an instance of Recordsfunctions and load records on window load
window.onload = () => {
    const recordsFunctions = new Recordsfunctions('arrayDisplay', 'ResultCount'); 
    recordsFunctions.loadRecords(); // Call the loadRecords method
};

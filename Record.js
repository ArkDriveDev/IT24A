class Recordsfunctions{
    loadRecords() {
        const Logs = document.getElementById("arrayDisplay"); // Change the ID here
        Logs.innerHTML = ""; // Clear previous logs
    
        // Load records from local storage
        const AttendanceRecords = JSON.parse(localStorage.getItem('AttendanceRecords')) || [];
    
        AttendanceRecords.forEach(classitem => {
            const list = document.createElement("li");
            list.textContent = classitem; // Set text to the class attendance item
            Logs.appendChild(list); // Append the list item to the log
        });
        const result = document.getElementById("ResultCount");
        const logCount = AttendanceRecords.length;
        result.innerHTML = `Result: ${logCount}`; // Update the text in the h2
    }
    // Load records on window load 
}
// Create an instance of Recordsfunctions and load records on window load
window.onload = () => {
    const recordsFunctions = new Recordsfunctions();
    recordsFunctions.loadRecords(); // Call the loadRecords method
};
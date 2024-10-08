function loadRecords() {
    const Logs = document.getElementById("arrayDisplay"); // Change the ID here
    Logs.innerHTML = ""; // Clear previous logs

    // Load records from local storage
    const AttendanceRecords = JSON.parse(localStorage.getItem('AttendanceRecords')) || [];

    AttendanceRecords.forEach(classitem => {
        const list = document.createElement("li");
        list.textContent = classitem; // Set text to the class attendance item
        Logs.appendChild(list); // Append the list item to the log
    });
}

// Load records on window load
window.onload = loadRecords; // This will run when the page loads

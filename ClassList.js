let myArray = [];
let classArray = [];
let Selected_Class;
let AttendanceRecords = JSON.parse(localStorage.getItem('AttendanceRecords')) || []; // Load records from local storage

async function loadClasses() {
    try {
        const response = await fetch('Classes.json'); // Fetch the JSON file
        const data = await response.json();
        
        const clickedMarker = localStorage.getItem('clickedMarker');
        if (clickedMarker) {
            Selected_Class = clickedMarker;

            if (Selected_Class === "Class CCS Laboratory 1" || Selected_Class === "Class CCS Laboratory 2") {
                myArray = data.Lab_class;
            } else if (Selected_Class === "BA 302") {
                myArray = data.BA_302;
            } else if (Selected_Class === "SC 202") {
                myArray = data.SC_202;
            } else if (Selected_Class === "Covered Court") {
                myArray = data.Court_classes;
            }
        }

        displayArray(myArray);
    } catch (error) {
        console.error('Error loading the JSON:', error);
    }
}

function displayArray(array) {
    const displayDiv = document.getElementById("arrayDisplay");
    displayDiv.innerHTML = ''; // Clear previous content

    const ul = document.createElement("ul");
    
    array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        li.addEventListener("click", () => {
            alert(`You Attended class ${item}`);
            
            const now = new Date();
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayOfWeek = now.getDay();
            const date = now.getDate();
            const month = now.getMonth() + 1; // Adding 1 to make it 1-12
            const year = now.getFullYear();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const dayName = days[dayOfWeek];
            
            // Push attendance info to classArray
            const attendanceRecord = `${item} - ${dayName}, ${month}/${date}/${year} ${hours}:${minutes}`;
            classArray.push(attendanceRecord);
            AttendanceRecords.push(attendanceRecord);
            
            // Save to local storage
            localStorage.setItem('AttendanceRecords', JSON.stringify(AttendanceRecords));

            // Call loadRecords to update the display immediately after attending a class
            loadRecords(); // Ensure this function is accessible here
        });

        ul.appendChild(li);
    });

    displayDiv.appendChild(ul);
}

// Load classes on window load
window.onload = loadClasses;

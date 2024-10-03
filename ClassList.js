// Sample array to display
const myArray = ["Event Driven Programming 10:30 am-12:00pm","Data Mining 4:00 pm-5:30 pm"];

// Function to display the array
function displayArray() {
    const displayDiv = document.getElementById("arrayDisplay");
    displayDiv.innerHTML = ''; // Clear previous content
    
    // Create a list to display the array items
    const ul = document.createElement("ul");
    
    myArray.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item; // Set the text content to the array item
        ul.appendChild(li); // Append the list item to the list
    });
    
    displayDiv.appendChild(ul); // Append the list to the display div
}

// Add event listener to the button
document.getElementById("displayButton").addEventListener("click", displayArray);

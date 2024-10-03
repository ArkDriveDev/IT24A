let myArray = [];

        // Function to load the array from JSON
        async function loadClasses() {
            try {
                const response = await fetch('Classes.json'); // Fetch the JSON file
                myArray = await response.json(); // Parse the JSON into the array
                displayArray(); // Call function to display the array
            } catch (error) {
                console.error('Error loading the JSON:', error);
            }
        }

        // Function to display the array
        function displayArray() {
            const displayDiv = document.getElementById("arrayDisplay");
            displayDiv.innerHTML = ''; // Clear previous content
            
            // Create a list to display the array items
            const ul = document.createElement("ul");
            
            myArray.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item; // Set the text content to the array item

                li.addEventListener("click", () => {
                    alert(`You Attended on class ${item}`); // Action when item is clicked
                });

                ul.appendChild(li); // Append the list item to the list
            });
            
            displayDiv.appendChild(ul); // Append the list to the display div
        }

        // Add event listener to the button
        window.onload = loadClasses;
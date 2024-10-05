let myArray = [];
        let classArray = [];

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
                    alert(`You Attended class ${item}`); // Action when item is clicked
                    
                    // Get the current date and time
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
                    classArray.push(`${item} - ${dayName}, ${month}/${date}/${year} ${hours}:${minutes}`);
                });

                ul.appendChild(li); // Append the list item to the list
            });
            
            displayDiv.appendChild(ul); // Append the list to the display div
        }
         
        // Add event listener to the button and on load
        window.onload = loadClasses;
        const button = document.getElementById("displayatt");
        const Logs = document.getElementById("classDisplay");

        button.addEventListener("click", () => {
            Logs.innerHTML = ""; // Clear previous logs

            classArray.forEach(classitem => {
                const list = document.createElement("li");
                list.textContent = classitem; // Set text to the class attendance item
                Logs.appendChild(list); // Append the list item to the log
            });
        });
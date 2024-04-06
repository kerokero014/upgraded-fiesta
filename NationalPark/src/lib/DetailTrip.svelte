<!-- App.svelte -->

<script>
   import { onMount } from 'svelte';
    import Header from "./MainHeader.svelte";
    import Footer from "./MainFooter.svelte";
    function caller(){
      // Retrieve data from localStorage
   let name = document.querySelector("h1")
    deletePlaceFromLocalStorage(name)
    }
    function deletePlaceFromLocalStorage(placeName) {
    // Retrieve data from localStorage
    let storedData = JSON.parse(localStorage.getItem("placesData"));

    // Check if there's any data
    if (storedData && Array.isArray(storedData) && storedData.length > 0) {
        // Find the index of the place with the given name
        const indexToDelete = storedData.findIndex(item => item.placeName === placeName);
        
        // If the place is found, remove it from the storedData array
        if (indexToDelete !== -1) {
            storedData.splice(indexToDelete, 1);
            
            // Store the updated data back into localStorage
            localStorage.setItem("placesData", JSON.stringify(storedData));
            alert(`Place "${placeName}" deleted from localStorage.`);
        } else {
            alert(`Place "${placeName}" not found in localStorage.`);
        }
    } else {
        console.log("No data found in localStorage.");
    }
}
    function printPlacesDataFromLocalStorage() {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("placesData"));
    const container = document.getElementById('container')
    // Check if there's any data
    if (storedData && Array.isArray(storedData) && storedData.length > 0) {
        // Iterate over each entry and print out the place name and image URL
        storedData.forEach(item => {
          const imgElement = document.createElement('img')
          imgElement.src = `${item.imageURL}`;
          imgElement.id = 'dynamic-element';
          const placeNameElement = document.createElement('h1')
          placeNameElement.id = 'dynamic-name';
          const buttonElement = document.createElement('button')
          buttonElement.id = 'dynamic-button';
          buttonElement.textContent = 'exclude'
          const style = document.createElement('style');
style.textContent = `
  #dynamic-element {
    height: 30vh; /* set height to 100% of viewport height */
    /* Box Shadow Properties */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* horizontal-offset vertical-offset blur spread color */
    /* Other Styling */
    padding: 20px;
    background-color: white;
  }
  #dynamic-button {
    height: 45px;
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    /* Box Shadow Properties */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* horizontal-offset vertical-offset blur spread color */
    /* Other Styling */
    background-color: #a04545;
    border: 2px solid #000000;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  }
  
  #dynamic-button:hover {
    background-color: #6f0b0b;
    border-color: #45a049;
  }
  
  #dynamic-button:active {
    background-color: #3e8e41;
    border-color: #3e8e41;
  }
  #dynamic-name {
    font-size: 5vh; /* set height to 100% of viewport height */
  }
`;
document.head.appendChild(style);
          buttonElement.onclick = function() {
    // Call a function to handle the exclusion of the place
    deletePlaceFromLocalStorage(item.placeName);
};
          placeNameElement.textContent = `${item.placeName}`;
          container.appendChild(imgElement)
          container.appendChild(placeNameElement)
          container.appendChild(buttonElement)
          //console.log(`Place Name: ${item.placeName}, Image URL: ${item.imageURL}`);
        });
    } else {
        console.log("No data found in localStorage.");
    }
}
    onMount(() => {
      printPlacesDataFromLocalStorage();
    });
  </script>
  
  <Header title="Summit Seeggers" />
  <div id="container"></div>
  <style>
    #container{
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin: 40px;
    }
  </style>
  
  <Footer companyName="Summit Seekers" />
  
  
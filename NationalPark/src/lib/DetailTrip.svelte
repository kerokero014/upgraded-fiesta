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
          const placeNameElement = document.createElement('h1')
          const buttonElement = document.createElement('button')
          buttonElement.textContent = 'exclude'
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
  </style>
  
  <Footer companyName="Summit Seekers" />
  
  
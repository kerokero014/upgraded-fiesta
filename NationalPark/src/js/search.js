export async function server_response(input) {
  const baseURL = "https://developer.nps.gov/api/v1/parks";
  let apiUrl = `${baseURL}?q=${input}&api_key=JP7b3daNxrCaWhCDjAyaCITox6j6HEtq53PRwvFE`;
  function btn(placeName, imageURL) {
    // Retrieve existing data from localStorage
    let storedData = JSON.parse(localStorage.getItem("placesData")) || [];

    // Check if the place name already exists in the stored data
    const existingPlaceIndex = storedData.findIndex(item => item.placeName === placeName);

    if (existingPlaceIndex !== -1) {
        // If the place name already exists, update the image URL
        storedData[existingPlaceIndex].imageURL = imageURL;
    } else {
        // If the place name doesn't exist, add a new entry
        storedData.push({ placeName, imageURL });
    }

    // Store the updated data back into localStorage
    localStorage.setItem("placesData", JSON.stringify(storedData));
}

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Log the entire data object to inspect its structure
    console.log("data", data);
    console.log("data.data", data.data);

    if (data.data) {
      // Loop through each result from the API
      data.data.forEach(async (result) => {
        console.log(result);
        const placeName = result.name;
        console.log(placeName);
        const imgUrl = result.images[0].url;
        console.log(imgUrl);
        
        // Create anchor tag for the image
        const imageLink = document.createElement('a');
        // Display the image
        const imageElement = document.createElement('img');
        imageElement.src = imgUrl;
        imageLink.appendChild(imageElement);
        document.getElementById('apiData').appendChild(imageLink);
        // Create anchor tag for the place name
        const placeLink = document.createElement('a');
        const placeNameElement = document.createElement('p');
        placeNameElement.textContent = placeName;
        placeLink.appendChild(placeNameElement);
        document.getElementById('apiData').appendChild(placeLink);
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'add to bucket list';
        buttonElement.onclick = ()=> btn(placeName, imgUrl );
        document.getElementById('apiData').appendChild(buttonElement);
        // You can do whatever you need with the data here
        // For example, append the data to the DOM
      });
    } else {
      console.log("No results found");
    }
  } catch (error) {
    console.log('There was a problem with the fetch operation:', error);
  }
}

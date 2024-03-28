export async function server_response(input) {
  const baseURL = "https://developer.nps.gov/api/v1/parks";
  let apiUrl = `${baseURL}?q=${input}&api_key=JP7b3daNxrCaWhCDjAyaCITox6j6HEtq53PRwvFE`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Log the entire data object to inspect its structure
    console.log("data", data);
    console.log("data.data", data.data);

    // Check if data.results exists before trying to iterate over it
    if (data.data) {
      // Loop through each result from the API
      data.data.forEach(async (result) => {
        console.log(result);
        const placeName = result.name;
        console.log(placeName);
        const imgUrl = result.images[0].url;
        console.log(imgUrl);
        const placeNameElement = document.createElement('p');
        placeNameElement.textContent = placeName;
        document.getElementById('apiData').appendChild(placeNameElement);
        // Display the image
        const imageElement = document.createElement('img');
        imageElement.src = imgUrl;
        document.getElementById('apiData').appendChild(imageElement);
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

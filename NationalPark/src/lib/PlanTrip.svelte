<script>
    import Header from "./MainHeader.svelte";
    import Footer from "./MainFooter.svelte";
    import ParallaxCont from "./ParallaxPlanT.svelte";

    async function server_response() {
  let input = document.getElementById('input').value;
  //let apiUrl = `https://api.inaturalist.org/v1/places/autocomplete?q=${input}`;
  let apiUrl = `https://developer.nps.gov/api/v1/parks?q=${input}&api_key=r3fB97qgKCf8K7GgPyVqKYMzYygbYTG0z2hATQw7`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    // Loop through each result from the API
    data.results.forEach(async (result) => {
      console.log(result)
      const placeId = result.id;
      const placeName = result.name;

      // Fetch the identifications for the place
      const identificationsUrl = `https://api.inaturalist.org/v1/identifications?place_id=${placeId}`;
      const identificationsResponse = await fetch(identificationsUrl);
      if (!identificationsResponse.ok) {
        throw new Error('Network response for identifications was not ok');
      }
      const identificationsData = await identificationsResponse.json();
      console.log("ident",identificationsData.results)
      console.log("pn",placeName)
      // Check if there are any observations associated with the place
      if (identificationsData.results.length > 0 && identificationsData.results[0].observation) {
        const imageUrl = identificationsData.results[0].observation.photos[0].url;
         // Display the place name
        const placeNameElement = document.createElement('p');
        placeNameElement.textContent = placeName;
        document.getElementById('apiData').appendChild(placeNameElement);
        // Display the image
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.getElementById('apiData').appendChild(imageElement);
      } else {
        console.log('No observations found for this place');
        console.log("place_id", placeId);
        console.log("name", placeName);
      }
    });
  } catch (error) {
    console.log('There was a problem with the fetch operation:', error);
  }
}



  </script>
  
  
  <Header title="Summit Seekers" />
  
  <section class="flex-box">
    <div>
      <img src="../src/imgs/brazil-4808992_1280.jpg" alt="">
    <h1>name title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis 
      modi quaerat odio, voluptas aspernatur nam non a 
      quibusdam dolores molestias alias libero ullam, 
      delectus magnam omnis possimus suscipit, 
      amet saepe.</p>
      <button class="button">plan trip</button>
    </div>
    <div>
      <img src="../src/imgs/greece-3384386_1280.jpg" alt="">
    <h1>name title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis 
      modi quaerat odio, voluptas aspernatur nam non a 
      quibusdam dolores molestias alias libero ullam, 
      delectus magnam omnis possimus suscipit, 
      amet saepe.</p>
      <button class="button">plan trip</button>
    </div>
    <div>
      <img src="../src/imgs/lake-7892215_1280.jpg" alt="">
    <h1>name title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis 
      modi quaerat odio, voluptas aspernatur nam non a 
      quibusdam dolores molestias alias libero ullam, 
      delectus magnam omnis possimus suscipit, 
      amet saepe.</p>
      <button class="button">plan trip</button>
    </div>
  </section>
  <style>
    .button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
  </style>
  <Footer companyName="Summit Seekers" />
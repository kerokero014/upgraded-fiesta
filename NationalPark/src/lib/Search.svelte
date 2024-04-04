<script>
  export let places = [];
  let query = "";
  const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C";

  async function searchHandler() {
    try {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/parks?q=${query}&api_key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(await response.json());
      }
      const data = await response.json();
      places = data.data.map((place) => ({
        fullName: place.fullName,
        parkCode: place.parkCode,
        imageUrl: place.images.length > 0 ? place.images[0].url : null, // Get first image URL if available
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
</script>
<div>
  
</div>
<input type="search" bind:value={query} />
<button on:click={searchHandler}>Search</button>

{#if places.length > 0}
  <ul>
    {#each places as place}
      <li class="park-item">
        {#if place.imageUrl}
          <img
            class="park-image park-list"
            src={place.imageUrl}
            alt={place.fullName}
            style="width: 250px; height: 150px; object-fit: cover; margin: 0 auto;"
          />
        {:else}
          <div
            class="no-image-placeholder"
            style="width: 100px; height: 100px; background-color: #ccc; display: flex; justify-content: center; align-items: center;"
          >
            No Image
          </div>
        {/if}
        <a href={`https://www.nps.gov/${place.parkCode}`} target="_blank"
          >{place.fullName}</a
        >
      </li>
    {/each}
  </ul>
{:else}
  <p>No results found.</p>
{/if}

<style>
  
  input[type="search"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px; /* Adjust as needed */
    width: 200px; /* Adjust width as needed */
  }

  input[type="search"]:focus {
    outline: none;
    border-color: #003329; /* Change border color on focus */
    box-shadow: 0 0 5px #003329; /* Add a shadow on focus */
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #003329;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #00796b;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .park-list {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(250px, 1fr)
    ); /* Responsive grid */
    gap: 20px; /* Space between grid items */
    padding: 0;
    margin: 20px 0; /* Space around the grid */
    list-style: none;
  }

  .park-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .park-item:hover {
    transform: translateY(-5px);
  }

  .park-image {
    width: 100%;
    height: auto;
    max-height: 200px; /* Limit image height */
    object-fit: cover; /* Scale image while preserving aspect ratio */
    border-radius: 8px 8px 0 0; /* Rounded corners only on top */
  }

  .no-image-placeholder {
    width: 100%;
    height: 200px; /* Placeholder height */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; /* Placeholder background color */
    border-radius: 8px; /* Rounded corners */
    margin-bottom: 10px; /* Space between placeholder and content */
  }

  a {
    color: #00796b; /* Link color */
    text-decoration: none; /* Remove underline */
    transition: color 0.3s ease; /* Smooth color transition on hover */
  }

  a:hover {
    color: #004d40; /* Change color on hover */
  }
</style>

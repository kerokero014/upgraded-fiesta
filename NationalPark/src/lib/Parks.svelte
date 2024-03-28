<script>
  import { onMount } from "svelte";
  import Header from "./MainHeader.svelte";
  import Search from "./Search.svelte";
  import Footer from "../lib/MainFooter.svelte";

  let parksList = [];
  const baseURL = "https://developer.nps.gov/api/v1/parks";
  const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C";

  async function fetchAllData() {
    const limit = 50; // Results per page
    let offset = 0; // Initial offset
    let allParks = [];

    try {
      let totalResults = 0;

      // Fetch each page until all results are retrieved
      do {
        const res = await fetch(
          `${baseURL}?api_key=${apiKey}&limit=${limit}&start=${offset}`
        );
        if (!res.ok) {
          throw new Error("Server response wasn't OK");
        }
        const data = await res.json();
        totalResults = data.total;
        allParks = allParks.concat(data.data); // Concatenate current page data
        offset += limit; // Increment offset for next page
      } while (allParks.length < totalResults);

      parksList = allParks.map(park => ({
        name: park.fullName
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    fetchAllData();
  });
</script>

<Header title="National Parks" />
<Search />

<h1>List of National Parks</h1>

<ul class="park-list">
  {#each parksList as park}
    <li class="park-item">
      <!-- {#if park.imageUrl}
        <img src={park.imageUrl} alt={park.name} style="width: 250px; height: 150px; object-fit: cover; margin: 0 auto;">
      {:else}
        <div class="no-image-placeholder" style="width: 100px; height: 100px; background-color: #ccc; display: flex; justify-content: center; align-items: center;">
          No Image
        </div>
      {/if} -->
      <div class="park-name"><a href={`https://www.nps.gov/${park.parkCode}`}>{park.name}</a></div>
    </li>
  {/each}
</ul>

<Footer />

<style>
  h1 {
    text-align: center;
    margin: 10px;
  }


  a {
    color: #007bff; /* Link color */
    text-decoration: none; /* Remove underline */
    transition: color 0.3s ease; /* Smooth color transition on hover */
  }

  a:hover {
    color: #0056b3; /* Change color on hover */
  }
  
  .park-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .park-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .park-image {
    width: 100%;
    height: auto;
    max-height: 200px; /* Limit image height */
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .no-image-placeholder {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .park-name {
    font-size: 16px;
    font-weight: bold;
  }
</style>

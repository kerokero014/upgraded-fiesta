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

    parksList = allParks.map((park) => ({
      name: park.fullName,
      parkCode: park.parkCode,
      activities: park.activities
        .slice(0, 7) // Limit activities to 7
        .reduce((acc, activity) => `${acc}, ${activity.name}`, "")
        .slice(2),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


  onMount(() => {
    fetchAllData();
  });

  let hoveredPark = null;

  function handleMouseOver(park) {
    hoveredPark = park;
  }

  function handleMouseOut() {
    hoveredPark = null;
  }

  function handleFocus(park) {
  hoveredPark = park;
}

  function handleBlur() {
    hoveredPark = null;
  }
</script>

<Header title="National Parks" />
<Search />
<h1>List of National Parks</h1>

<ul class="park-list">
  {#each parksList as park}
    <li
    class="park-item"
    on:mouseover={() => handleMouseOver(park)}
    on:mouseout={handleMouseOut}
    on:focus={() => handleFocus(park)} 
    on:blur={handleBlur}
    >

      <section class="park-name">
        <a
          href={`https://www.nps.gov/${park.parkCode}`}
          target="_blank"
          class="park-link">{park.name}</a
        >
      </section>
      {#if hoveredPark === park}
        <h4>Activities</h4>
        {#if hoveredPark === park}
        <div class="park-activities">{park.activities}</div>
        {/if}
      {/if}
    </li>
  {/each}
</ul>

<footer>
  <Footer companyName="Summit Seekers" />
</footer>

<style>
  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 28px;
    color: #004d40; 
  }

  .park-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
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
    background-color: #f5f5f5; /* Light gray background */
    padding: 10px; /* Padding around each park item */
  }

  .park-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a bit more shadow on hover */
  }

  .park-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333; /* Dark text color */
  }

  .park-link {
    color: #00796b; /* Dark teal color for links */
    text-decoration: none;
    transition: color 0.3s ease; /* Smooth color transition on hover */
  }

  .park-link:hover {
    color: #004d40; /* Darker teal color on hover */
  }

  .park-activities {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  li {
    cursor: pointer;
  }

  div {
    background-color: #f0f0f0;
    padding: 5px;
    border: 1px solid #ccc;
    margin-top: 5px;
  }

  footer {
    text-align: center;
    margin-top: 20px;
  }
</style>

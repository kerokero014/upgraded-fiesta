<script>
  import { onMount } from "svelte";
  import Header from "./MainHeader.svelte";
  import Search from "./Search.svelte";
  import Footer from "../lib/MainFooter.svelte";

  let parksList = [];
  const baseURL = "https://developer.nps.gov/api/v1/parks";
  const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C";
  const limitPerPage = 40; // Change this value as needed
  let currentPage = 1;
  let totalPages = 1;

  async function fetchParksData(page) {
    const offset = (page - 1) * limitPerPage;
    const res = await fetch(
      `${baseURL}?api_key=${apiKey}&limit=${limitPerPage}&start=${offset}`
    );
    if (!res.ok) {
      throw new Error("Server response wasn't OK");
    }
    const data = await res.json();
    totalPages = Math.ceil(data.total / limitPerPage);
    parksList = data.data.map((park) => ({
      name: park.fullName,
      parkCode: park.parkCode,
      activities: park.activities
        .slice(0, 7)
        .reduce((acc, activity) => `${acc}, ${activity.name}`, "")
        .slice(2),
    }));
  }

  onMount(() => {
    fetchParksData(currentPage);
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

  function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      currentPage = pageNumber;
      fetchParksData(currentPage);
    }
  }
</script>

<Header />
<Search />
<h1>List of National Parks</h1>

<ul class="park-list">
  {#each parksList as park}
    <li class="park-item">
      <section class="park-name">
        <a
          href={`https://www.nps.gov/${park.parkCode}`}
          target="_blank"
          class="park-link"
          on:mouseover={() => handleMouseOver(park)}
          on:mouseout={handleMouseOut}
          on:focus={() => handleFocus(park)}
          on:blur={handleBlur}>{park.name}</a
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

<div class="pagination">
  <button
    on:click={() => goToPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  {#each Array.from({ length: totalPages }, (_, index) => index + 1) as page}
    <button
      on:click={() => goToPage(page)}
      class:selected={currentPage === page}
    >
      {page}
    </button>
  {/each}
  <button
    on:click={() => goToPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>

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
    display: none; /* Initially hide the activities */
    transition: opacity 0.3s ease; /* Smooth opacity transition */
  }

  .park-item:hover .park-activities {
    display: block; /* Show activities on hover */
    opacity: 1; /* Fade in effect */
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
    margin-top: 75px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }

  .pagination button:selected {
    background-color: #00796b;
    color: #fff;
  }

  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>

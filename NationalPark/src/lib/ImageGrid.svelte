<script>
  import { onMount } from "svelte";
  import Header from "./MainHeader.svelte";
  import Footer from "../lib/MainFooter.svelte";

  let parksList = [];

  const baseURL = "https://developer.nps.gov/api/v1/parks";
  const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C";

  async function fetchData() {
    try {
      const res = await fetch(`${baseURL}?api_key=${apiKey}`);
      if (!res.ok) {
        throw new Error("Server response wasn't OK");
      }
      const data = await res.json();
      parksList = data.data; // Store entire park data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    fetchData();
  });
</script>

<div class="grid-container">
  {#each parksList.slice(0, 5) as park}
    <div class="park-item">
      <img src={park.images[0]?.url} alt={park.fullName} />
      <p>{park.fullName}</p>
    </div>
  {/each}
</div>

<style>
  .grid-container {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .park-item img {
    border-radius: 10px;
    padding: 5px;
    width: 350px;
    height: auto;
    border-radius: 15px;
  }

  .park-item:hover {
    transform: scale(1.1);
    transition: transform 0.4s ease-in-out;
  }

  .park-item {
    text-align: center;
    border-radius: 10px;
  }
</style>

<script>
  import { onMount } from "svelte";
  import Header from "./MainHeader.svelte";
  import Footer from "../lib/MainFooter.svelte";

  let suppliesList = [];

  const baseURL = "https://nationalparkplanner.onrender.com/supplies";
  // const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C";

  async function fetchData() {
      try {
        const res = await fetch(`${baseURL}`);
        if (!res.ok) {
          throw new Error("Server response wasn't OK");
        }
        const data = await res.json();
        suppliesList = data.data.map(item => item.name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  }

  onMount(() => {
    fetchData();
  });
</script>

<Header title="Supplies" />

<ul>
  {#each suppliesList as item}
    <li>{item}</li>
  {/each}
</ul>

<Footer />

<style>
  /* Add your styles here */
</style>
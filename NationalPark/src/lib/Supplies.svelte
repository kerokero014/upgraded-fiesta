<script>
  import { onMount } from "svelte";
  import Header from "./MainHeader.svelte";
  import Footer from "../lib/MainFooter.svelte";

  let suppliesList = [];

  // const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
  // const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C";

  async function fetchData() {
      try {
        const res = await fetch("/json/supplies.json");
        if (!res.ok) {
          throw new Error("Server response wasn't OK");
        }
        const data = await res.json();
        suppliesList = data.supplies_list;
        console.log(suppliesList);
        // suppliesList = data.data.map(item => item.name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  }

  onMount(() => {
    fetchData();
  });
</script>

<Header title="Supplies" />

{#if suppliesList.length > 0}
  <ul>
    {#each suppliesList as item}
      <li>{item.name}</li>
    {/each}
  </ul>
{:else}
  <p>Loading...</p>
{/if}

<Footer />

<style>
  /* Add your styles here */
</style>
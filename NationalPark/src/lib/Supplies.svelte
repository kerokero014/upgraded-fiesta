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
<h1>Supplies Checklist</h1>

{#if suppliesList.length > 0}
  <ul class="supplies-list">
    {#each suppliesList as item}
      <li class="supplies-item">
        <div class="supplies-name">{item.name}</div>
      </li>
    {/each}
  </ul>
{:else}
  <p>Loading...</p>
{/if}

<Footer companyName="Summit Seekers"/>

<style>
  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 28px;
    color: #004d40; /* Teal color */
  }

  .supplies-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
  }

  .supplies-item {
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

  .supplies-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #00796b;
  }

  footer {
    text-align: center;
    margin-top: 20px;
  }
</style>
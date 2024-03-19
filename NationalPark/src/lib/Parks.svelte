<script>
    import { onMount } from 'svelte';
    import Header from './MainHeader.svelte';
    import Search from './Search.svelte';
    
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
        parksList = data.data.map(park => park.fullName); // Extract park names
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    onMount(() => {
      fetchData();
    });
  </script>
  
  <Header title="National Parks" />
  <Search />
  
  <h1>List of National Parks</h1>
  
  <ul>
    {#each parksList as park}
      <li>{park}</li>
    {/each}
  </ul>
  
  <style>
    /* Add your styles here */
  </style>
  
<script>
    export let places = [];
    let query = "";
    const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C"; // Replace with your actual NPS API key

    async function searchHandler() {
        try {
            const response = await fetch(`https://developer.nps.gov/api/v1/parks?q=${query}&api_key=${apiKey}`);
            if (!response.ok) {
                throw new Error(await response.json());
            }
            const data = await response.json();
            places = data.data; // Assuming the API response contains an array of parks
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
</script>
<input type="search" bind:value={query}>
<button on:click={searchHandler}>Search</button>

{#if places && places.length > 0}
    <ul>
        {#each places as place}
            <li><a href={`https://www.nps.gov/${place.parkCode}`} target="_blank">{place.fullName}</a></li>
        {/each}
    </ul>
{:else}
    <p>No results found.</p>
{/if}

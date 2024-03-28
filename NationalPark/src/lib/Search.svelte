<script>
    export let places = [];
    let query = "";
    const apiKey = "4NkX3tOUbCHhiaSreQql8y0rvhstMo2Z4zWOWR3C"; 

    async function searchHandler() {
        try {
            const response = await fetch(`https://developer.nps.gov/api/v1/parks?q=${query}&api_key=${apiKey}`);
            if (!response.ok) {
                throw new Error(await response.json());
            }
            const data = await response.json();
            places = data.data.map(place => ({
                fullName: place.fullName,
                parkCode: place.parkCode,
                imageUrl: place.images.length > 0 ? place.images[0].url : null, // Get first image URL if available
            }));
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
            <li class="park-item">
                {#if place.imageUrl}
                    <img src={place.imageUrl} alt={place.fullName} style="width: 250px; height: 150px; object-fit: cover; margin: 0 auto;">
                {:else}
                    <div class="no-image-placeholder" style="width: 100px; height: 100px; background-color: #ccc; display: flex; justify-content: center; align-items: center;">
                        No Image
                    </div>
                {/if}
                <a href={`https://www.nps.gov/${place.parkCode}`} target="_blank">{place.fullName}</a>
            </li>
        {/each}
    </ul>
{:else}
    <p>No results found.</p>
{/if}

<style>
.park-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>

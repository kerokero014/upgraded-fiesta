<script>
  import { crossfade } from "svelte/transition";
  import { onMount } from "svelte";
  import { elasticOut } from "svelte/easing";

  const [send, receive] = crossfade({
    duration: 800, // Increased transition duration for smoother effect
    easing: elasticOut, // Changed easing function for a different transition effect
  });

  let images = [
    "../src/imgs/jacket1.jpg",
    "../src/imgs/boots1.webp",
    "../src/imgs/tent1.webp",
    "../src/imgs/backpack1.jpg",
    "../src/imgs/sleeping1.webp",
    "../src/imgs/igloo1.webp",
  ];

  let index = 0;

  console.log(images);

  function next() {
    index = (index + 1) % images.length;
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
  }

  onMount(() => {
    // Preload images to ensure smooth transitions
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });
</script>

<div class="carousel">
  <button on:click={prev} class="prev">Previous</button>
  <div class="card">
    {#key index}
      <img
        src={images[index]}
        alt={`carousel image ${index + 1}`}
        in:receive={{ key: index }}
        out:send={{ key: index }}
      />
    {/key}
    <div class="card-body"></div>
  </div>
  <button on:click={next} class="next">Next</button>
</div>

<style>
  .card {
    background-color: white;
    width: 600px; /* Set the width of the card */
    height: 600px; /* Set the height of the card */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .carousel img {
    max-width: 80%;
    height: auto;
    transition: opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .next,
  .prev {
    position: absolute;
    padding: 10px 20px;
    background-color: #283b29; /* Green */
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 12px;
  }

  .next {
    right: 170px;
  }

  .prev {
    left: 140px;
  }

  .next:hover,
  .prev:hover {
    background-color: #623711;
  }
</style>

<script>
  import PopularParks from "./PopularParks.svelte";
  import MainPageSup from "./MainPageSup.svelte";
  import Testimonials from "./Testimonials.svelte";
</script>

<section class="sec">
  <div class="info1">
    <h1>Who We Are?</h1>
    <p>
      We are a group of individuals who are passionate about the great outdoors.
      We are dedicated to providing the best experience for our customers. We
      offer a wide range of services to help you get the most out of your
      outdoor experience.
    </p>
    <p>
      Whether you are an experienced hiker or a beginner, we have something for
      everyone. Our team of experts will help you plan your trip and make sure
      you have everything you need to enjoy your time in the great outdoors.
    </p>
    <button
      class="button"
      on:click={() =>
        (window.location.href = "http://localhost:5173/plan_trip/index.html")}
      >Plan a trip!</button
    >
  </div>

  <img src="./src/imgs/yosemite.jpeg" alt="yosemite" class="image1" />
</section>

<section class="third">
  <h1>Most Visited Parks:</h1>
  <PopularParks />
</section>

<section class="fourth">
  <MainPageSup />
</section>

<section>
  <Testimonials />
</section>

<style>
  .button {
    appearance: button;
    background-color: #81a791;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: din-round, sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter 0.2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 30%;
  }

  .button:after {
    background-clip: padding-box;
    background-color: #5e3716;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  .button:main,
  .button:focus {
    user-select: auto;
  }

  .button:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  .button:disabled {
    cursor: auto;
  }

  .button:active {
    border-width: 4px 0 0;
    background: none;
  }
</style>

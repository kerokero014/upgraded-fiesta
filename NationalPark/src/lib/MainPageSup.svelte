<script>
  import ImageCarousel from "./ImageCarousel.svelte";
</script>

<div class="area1">
  <h1>Missing equipment?</h1>
  <p>
    We offer a wide range of equipment for rent to help you get the most out of
    your outdoor experience. Whether you need a tent, sleeping bag, or hiking
    boots, we have you covered. Our team of experts will help you find the
    perfect equipment for your trip.
  </p>

  <button class="button" on:click={() => (window.location.href = 'http://localhost:5173/supplies/index.html')}>Get Supplies!</button>
</div>

<div class="area2">
  <ImageCarousel />
</div>

<style>
  .button {
    appearance: button;
    background-color: #073f1e;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #ededed;
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
    background-color: #7b7774;
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

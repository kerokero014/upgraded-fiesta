<script>
</script>

<div class="popular-container">
  <div class="Pparks">
    <img src="./src/imgs/yosemite.jpeg" alt="yosemite" />
    <p>Yosemite National Park</p>
  </div>
  <div class="Pparks">
    <img src="./src/imgs/yellowstone.webp" alt="yellowstone" />
    <p>Yellowstone National Park</p>
  </div>
  <div class="Pparks">
    <img src="./src/imgs/grandcanyon.webp" alt="grandcanyon" />
    <p>Grand Canyon National Park</p>
  </div>
  <div class="Pparks">
    <img src="./src/imgs/rockymountain.jpg" alt="rockymountain" />
    <p>Rocky Mountain National Park</p>
  </div>
  <div class="Pparks">
    <img src="./src/imgs/sequoia.jpg" alt="sequoia" />
    <p>Sequoia National Park</p>
  </div>
</div>

<style>
  .popular-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 -20px;
    text-align: center;
  }
  .Pparks img {
    padding: 5px;
    width: 355px;
    height: 250px;
    border-radius: 15px;
  }

  .Pparks:hover {
    transform: scale(1.1);
    transition: transform 0.4s ease-in-out;
  }

</style>

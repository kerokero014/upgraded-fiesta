<script>
</script>

<div class="imageGrid">
  <div class="tile">
    <img
      class="image"
      src="./src/imgs/yosemite.jpeg"
      alt="Yosemite National Park"
    />
    <div class="textWrapper">
      <h2>Yosemite National Park</h2>
      <div class="content">
        <p>
          Yosemite National Park is in California’s Sierra Nevada mountains.
        </p>
      </div>
    </div>
  </div>
  <div class="tile">
    <img
      class="image"
      src="./src/imgs/yellowstone.webp"
      alt="Yellowstone National Park"
    />
    <div class="textWrapper">
      <h2>Yellowstone National Park</h2>
      <div class="content">
        <p>
          Yellowstone National Park is a nearly 3,500-sq.-mile wilderness
          recreation area atop a volcanic hot spot.
        </p>
      </div>
    </div>
  </div>
  <div class="tile">
    <img
      class="image"
      src="./src/imgs/grandcanyon.webp"
      alt="Grand Canyon National Park"
    />
    <div class="textWrapper">
      <h2>Grand Canyon National Park</h2>
      <div class="content">
        <p>
          Grand Canyon National Park, in Arizona, is home to much of the immense
          Grand Canyon, with its layered bands of red rock revealing millions of
          years of geological history
        </p>
      </div>
    </div>
  </div>
  <div class="tile">
    <img
      class="image"
      src="./src/imgs/rockymountain.jpg"
      alt="Rocky Mountain National Park"
    />
    <div class="textWrapper">
      <h2>Rocky Mountain National Park</h2>
      <div class="content">
        <p>
          Rocky Mountain National Park in northern Colorado spans the
          Continental Divide and encompasses protected mountains, forests and
          alpine tundra
        </p>
      </div>
    </div>
  </div>
  <div class="tile">
    <img
      class="image"
      src="./src/imgs/glacier.jpg"
      alt="Glacier National Park"
    />
    <div class="textWrapper">
      <h2>Glacier National Park</h2>
      <div class="content">
        <p>
          Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana's
          Rocky Mountains, with glacier-carved peaks and valleys running to the
          Canadian border.
        </p>
      </div>
    </div>
  </div>

  <div class="tile">
    <img
      class="image"
      src="./src/imgs/sequoia.jpg"
      alt="Sequoia National Park"
    />
    <div class="textWrapper">
      <h2>Sequoia National Park</h2>
      <div class="content">
        <p>
          Sequoia National Park is adjacent to Kings Canyon National Park in
          California's southern Sierra Nevada mountains.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .imageGrid {
    line-height: 0;
    text-align: center;
  }
  .imageGrid .tile {
    width: 30%;
    min-height: 20em;
    line-height: 1.2;
    display: inline-block;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;

    color: #fff;
    font-family: "Verdana", sans-serif;
    text-shadow: 2px 2px 2px #000;
    cursor: pointer;
    cursor: hand;
  }

  .imageGrid .tile:before {
    content: "";
    background-color: rgba(15, 15, 15, 0.5);
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;
  }

  .imageGrid .tile:hover:before {
    display: none;
  }

  .imageGrid .tile .textWrapper {
    text-align: center;
    vertical-align: middle;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.75em;
  }

  .imageGrid .tile .textWrapper .content {
    display: none;
  }

  .imageGrid .tile:hover .textWrapper .content {
    display: block;
  }

  .imageGrid .tile:hover .textWrapper .content h2 {
    margin: 0;
  }

  @media (max-width: 1000px) {
    .imageGrid .tile {
      width: 50%;
    }
  }

  @media (max-width: 700px) {
    .imageGrid .tile {
      width: 100%;
    }
  }
</style>

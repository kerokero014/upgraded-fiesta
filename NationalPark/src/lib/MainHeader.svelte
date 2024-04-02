<script>
  import Navbar from "../lib/Navbar.svelte";
  let imagePath = "../src/imgs/logo.png";
  let imageAltText = "Summit Seekers Logo";
</script>

<header>
  <h1 class="logo"><img src={imagePath} alt={imageAltText} /></h1>
  <Navbar />
</header>

<style>
  .logo img {
    width: 20%;
  }
</style>

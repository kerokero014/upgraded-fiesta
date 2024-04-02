<script>
  import Navbar from "../lib/Navbar.svelte";
  let imagePath = "../src/imgs/logo.jpg";
  let imageAltText = "Summit Seekers Logo";
</script>

<header>
  <h1 class="logo"><img src={imagePath} alt={imageAltText} /></h1>
  <Navbar />
</header>

<style>
  .logo img {
    font-size: 2rem;
    margin: 10px 3px;
    width: 20%;
  }
</style>

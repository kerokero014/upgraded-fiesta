<script>
  export let title = "Default Title";
  import Navbar from "../lib/Navbar.svelte";
</script>

<header>
  <h1 class="logo">{title}</h1>
  <Navbar />
</header>

<style>
  .logo {
    font-size: 2rem;
    margin: 10px 3px;
  }
</style>

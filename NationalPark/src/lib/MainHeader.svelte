<script>
  export let title = "Default Title";
  import Navbar from "../lib/Navbar.svelte";
</script>

<header>
  <h1 class="logo">{title}</h1>
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
  <div class="four"></div>
  <div class="five"></div>
  <Navbar />
</header>


<style>
  .logo {
    font-size: 2rem;
    margin:10px 3px;
  }
</style>
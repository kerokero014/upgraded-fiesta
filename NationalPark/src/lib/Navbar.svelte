<script>
  let links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Plan Trip", url: "/Trip" },
    { name: "Sign Up", url: "/signup" },
    { name: "Parks", url: "/parks/index.html" },
  ];

  let activeLink = "/";
</script>

<nav class="navbar">
  {#each links as link (link.url)}
    <a href={link.url} class:active={activeLink === link.url}>{link.name}</a>
  {/each}
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #333;
    color: #fff;
  }

  .navbar a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .navbar a:hover {
    background-color: #555;
  }

  .navbar a.active {
    background-color: #007bff;
  }
</style>

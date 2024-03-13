<script>
  let links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Plan Trip", url: "/Trip" },
    { name: "Sing Up", url: "/singup" },
  ];

  let activeLink = "/";
</script>

<nav>
  {#each links as link (link.url)}
    <a href={link.url} class:active={activeLink === link.url}>{link.name}</a>
  {/each}
</nav>

<style>
  a {
    margin-right: 10px;
  }

  .active {
    color: red;
  }
</style>

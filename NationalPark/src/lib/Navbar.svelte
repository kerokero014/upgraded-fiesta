<script>
  let links = [
    { name: "Home", url: "/" },
    { name: "Plan Trip", url: "/plan_trip/index.html" },
    { name: "Parks", url: "/parks/index.html" },
    { name: "Supplies", url: "/supplies/index.html" },
    { name: "Contact Us", url: "/contactus/index.html" },
  ];

  let activeLink = "/";
</script>

<nav class="navigation">
  {#each links as link (link.url)}
    <a href={link.url} class:active={activeLink === link.url}>{link.name}</a>
  {/each}
</nav>

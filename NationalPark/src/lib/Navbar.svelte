<script>
   import { getUserName } from '../js/login.mjs';
   const userName = getUserName();
  let links = [
    { name: "Home", url: "/" },
    { name: "Plan Trip", url: "/plan_trip/index.html" },
    { name: "Parks", url: "/parks/index.html" },
    { name: "Supplies", url: "/supplies/index.html" },
    { name: "Contact Us", url: "/contactus/index.html" },
  ];

  let activeLink = "/";
  const token = localStorage.getItem('so-token');
</script>

<nav class="navigation">
  {#each links as link (link.url)}
    <a href={link.url} class:active={activeLink === link.url}>{link.name}</a>
  {/each}
   {#if userName}
   <a class="login" href="/">Welcome, {userName}!</a>
   {:else}
   <a class="login" href="../login/login.html">Log in</a>
   {/if}
</nav>

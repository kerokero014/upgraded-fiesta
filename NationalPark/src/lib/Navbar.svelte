<script>
  import { getUserName } from "../js/login.mjs";
  const userName = getUserName();
  let links = [
    { name: "Home", url: "/" },
    { name: "Plan Trip", url: "/plan_trip/index.html" },
    { name: "Parks", url: "/parks/index.html" },
    { name: "Supplies", url: "/supplies/index.html" },
    { name: "Contact Us", url: "/contactus/index.html" },
  ];

  let activeLink = "/";
  const token = localStorage.getItem("so-token");
  function deleteToken() {
    // Remove the token from local storage
    localStorage.removeItem("so-token");

    // Optionally, you can perform additional actions after deleting the token
    // For example, you might want to navigate to a different page or update the UI

    // For now, let's just log a message to indicate the token was deleted
    alert("Form data deleted successfully!");
  }
</script>

<nav class="navigation">
  {#each links as link (link.url)}
    <a href={link.url} class:active={activeLink === link.url}>{link.name}</a>
  {/each}
  {#if userName}
    <a class="login" href="/">Welcome, {userName}!</a>
    <a on:click={deleteToken} href="/">Log out</a>
  {:else}
    <a class="login" href="../login/login.html"><strong>Log in</strong></a>
  {/if}
  <a href="../plan_trip/bucket_list">
    <img id="bucket" src="src/imgs/bucket.png" alt="Icon">
  </a>
</nav>

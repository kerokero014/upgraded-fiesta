<script>
  import Header from "./lib/MainHeader.svelte";
  import Footer from "./lib/MainFooter.svelte";
</script>

<Header title="Summit Seekers" />

<main class="container">
  <h2>Welcome to National Park</h2>

  <p>
    National Park is a place where you can find information about the national
    parks in the United States.
  </p>
  <img src="images/national-park.jpg" alt="National Park" />

  <p>
    You can search for a park by name or by state. You can also view a list of
    all the parks.
  </p>

  <p>Click on a park to view more information about it.</p>
</main>

<Footer companyName="Summit Seekers" />

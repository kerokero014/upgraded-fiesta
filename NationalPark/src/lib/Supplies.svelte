<script>
  import { onMount } from "svelte";
  import Header from "./MainHeader.svelte";
  import Footer from "../lib/MainFooter.svelte";
  import SupplyForm from "./SupplyForm.svelte";
  import Modal from "./Modal.svelte";

  let suppliesList = [];
  let showsForm = false;

  //for more API information go to
  //https://npp-api.onrender.com/api-docs/

  onMount(async () => {
    const response = await fetch("https://npp-api.onrender.com/supplies");
    const data = await response.json();
    suppliesList = data;
  });

  const toggleSForm = () => {
    showsForm = !showsForm;
  };
</script>

<Header />

<main>
  <h1>All our Supplies</h1>
  <div class="supplies__checkList">
    {#if suppliesList.length > 0}
      <ul class="supplies-list">
        {#each suppliesList as item}
          <li class="supplies-item">
            <div class="supplies-name">
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <p>Description: {item.description}</p>
              <p>Category: {item.category}</p>
              <p>Website: {item.website}</p>
            </div>
          </li>
        {/each}
      </ul>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>

  <button class="showFormBttn" on:click={toggleSForm}>
    Add a New Supply!
  </button>

  <!-- Add a form to add new supplies to the list -->
  {#if showsForm}
    <Modal>
      <SupplyForm />
    </Modal>
  {/if}
</main>
<Footer companyName="Summit Seekers" />

<style>
  .showFormBttn {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 20px;
    background-color: #004d40; /* Teal color */
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .showFormBttn:hover {
    background-color: #00332b; /* Darker teal color */
  }

  .supplies__checkList {
    display: flex;
    flex-direction: column;
    margin: auto 20px auto;
  }

  main {
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    text-align: center;
    margin: 20px auto;
    font-size: 48px;
    color: #004d40; /* Teal color */
  }

  .supplies-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .supplies-item {
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: #f5f5f5; /* Light gray background */
    padding: 10px; /* Padding around each park item */
  }

  .supplies-name {
    font-size: 28px;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .supplies__checkList {
    display: flex;
    flex-direction: column;
    margin: auto 20px auto;
  }

  main {
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    text-align: center;
    margin: 20px auto;
    font-size: 48px;
    color: #004d40; /* Teal color */
  }

  .supplies-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .supplies-item {
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    background-color: #f5f5f5; /* Light gray background */
    padding: 10px; /* Padding around each park item */
  }

  .supplies-name {
    font-size: 28px;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

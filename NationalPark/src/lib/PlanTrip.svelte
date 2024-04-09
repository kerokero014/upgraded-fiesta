<!-- App.svelte -->

<script>
  import { onMount } from "svelte";
  import Header from "./MainHeader.svelte";
  import Footer from "./MainFooter.svelte";
  import { server_response } from "../js/search";
  import PlanTripForm from "./PlanTripForm.svelte";
  import Modal from "./Modal.svelte";

  let showForm = false;

  const toggleForm = () => {
    showForm = !showForm;
  };

  let inputValue = "";

  function handleInput(event) {
    inputValue = event.target.value;
  }

  function handleClick() {
    server_response(inputValue);
  }
</script>

<Header />
<section>
  <h1 id="search">Search for a place</h1>
  <input
    class="search-container"
    type="text"
    bind:value={inputValue}
    on:input={handleInput}
  />

  <button class="button" on:click={handleClick}>Search</button>

  <button class="showFormBttn" on:click={toggleForm}>
    Create a New Trip!
  </button>
</section>

<div id="apiData"></div>

{#if showForm}
  <Modal>
    <PlanTripForm />
  </Modal>
{/if}
<Footer companyName="Summit Seekers" />

<style>
  .showFormBttn {
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 30px;
    width: 353px;
    height: 50px;
    margin: 25px;
  }
  #apiData {
    display: flex;
    align-items: center; /* vertically center */
    flex-direction: column;
    height: 20px;
    gap: 10px;
    position: relative;
  }
  section {
    position: relative;
    font-size: 30px;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 50px;
    margin: 20px;
  }

  input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
    font-size: 30px;
  }

  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 30px;
    width: 183px;
    height: 50px;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

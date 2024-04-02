<!-- App.svelte -->

<script>
  import { onMount } from 'svelte';
  import Header from "./MainHeader.svelte";
  import Footer from "./MainFooter.svelte";
  import {server_response} from "../js/search"
  let inputValue = '';

  function handleInput(event) {
    inputValue = event.target.value;
  }

  function handleClick() {
    server_response(inputValue);
  }
</script>

<Header title="Summit Seekers" />

<h1>Search for a plece</h1>
<input type="text" bind:value={inputValue} on:input={handleInput} />
<button class="button" on:click={handleClick}>Submit</button>

<div id="apiData"></div>

<style>
  .button {
    background-color: #04AA6D; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>

<Footer companyName="Summit Seekers" />


<script>
  import { onMount } from "svelte";

  let modal;
  let showsModal = true;

  onMount(() => {
    modal.style.display = "block";
  });

  function closeModal() {
    showsModal = false;
    modal.style.display = "none";
  }
</script>

{#if showsModal}
  <div bind:this={modal} class="modal">
    <div class="modal-content">
      <span class="close" on:click={closeModal}>&times;</span>
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 35%;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>

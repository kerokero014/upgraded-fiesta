<script>
  import { PostTripPlanningAPI } from "../js/requests.mjs";

  let tripName = "";
  let tripDate = "";
  let tripLocation = "";
  let createBy = "";
  let tripDescription = "";

  async function handleFormSubmit(event) {
    event.preventDefault();
    const tripData = {
      tripName,
      tripDate,
      tripLocation,
      createBy,
      tripDescription,
    };
    const response = await PostTripPlanningAPI(tripData);
    if (response.status === 201) {
      alert("Trip planned successfully!");
    } else {
      alert("Failed to plan the trip. Please try again later.");
    }
  }

  let message = "";

  function handleMessage() {
    message = "Trip planned successfully!";
  }
</script>

<div class="card">
  <h1>Plan your trip here!</h1>

  <form on:submit|preventDefault={handleFormSubmit}>
    <label for="tripName">Destination:</label>
    <input
      type="text"
      id="tripName"
      name="tripName"
      bind:value={tripName}
      required
    />
    <br />
    <label for="tripDate">Trip Date:</label>
    <input
      type="text"
      id="tripDate"
      name="tripDate"
      bind:value={tripDate}
      required
    />
    <br />
    <label for="tripLocation">Trip Location:</label>
    <input
      type="text"
      id="tripLocation"
      name="tripLocation"
      bind:value={tripLocation}
      required
    />
    <br />
    <label for="createBy">Who is creating this Trip?</label>
    <input type="text" id="createBy" name="createBy" bind:value={createBy} />
    <br />
    <label for="tripDescription">Trip Description:</label>
    <textarea
      id="tripDescription"
      name="tripDescription"
      bind:value={tripDescription}
      required
    ></textarea>
    <!--
    <label for="tripImage">Trip Image:/label>
    <input type="file" id="tripImage" name="tripImage" required />
    -->
    <button type="submit" on:click={handleMessage}>Submit</button>
  </form>

  <!--message for user-->
  {#if message}
    <h3>{message}</h3>
  {/if}
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: auto;
    width: 650px;
    margin: 20px auto;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input[type="text"],
  textarea {
    width: 300px;
    padding: 8px;
  }

  button {
    padding: 8px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  label {
    font-size: 20px;
  }
</style>

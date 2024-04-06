<script>
  import { PostDataSupplyAPI } from "../js/requests.mjs";
  let name = "";
  let quantity = 0;
  let price = "";
  let description = "";
  let category = [];
  let website = "";
  let image = "";

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name,
      quantity,
      price,
      description,
      category,
      website,
      image,
    };
    console.log(data);
    const response = await PostDataSupplyAPI(data);
    console.log(response);
  }

  function showMessage() {
    alert("Supply added successfully!");
  }
</script>

<div class="card">
  <h1>Add a Supply!</h1>
  <form on:submit={handleSubmit}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} required />

    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" bind:value={quantity} required />

    <label for="price">Price:</label>
    <input type="text" id="price" bind:value={price} required />

    <label for="description">Description:</label>
    <textarea id="description" bind:value={description} required></textarea>

    <label for="category">Category:</label>
    <input type="text" id="category" bind:value={category} required />

    <label for="website">Website:</label>
    <input type="text" id="website" bind:value={website} required />

    <label for="image">Image:</label><br />
    <input type="file" id="image" name="image" bind:value={image} />
    
    <button type="submit" on:click={showMessage}>Add Supply</button>
  </form>
</div>

<style>
  .card {
    background-color: #ffffff7a;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 0px;
    width: 700px;
  }
  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 38px;
    color: #004d40; /* Teal color */
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }

  label {
    margin-top: 10px;
    font-size: 30px;
  }

  input,
  textarea {
    margin-bottom: 10px;
    padding: 5px;
    width: 300px;
    font-size: larger;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

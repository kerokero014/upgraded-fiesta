<script>
</script>

<div class="card">
  <h1>Plan your trip here!</h1>

  <form>
    <label for="destination">Destination:</label>
    <input type="text" id="destination" name="destination" required />
    <br />
    <label for="date">Date:</label>
    <input type="date" id="date" name="date" required />
    <br />
    <label for="duration">Duration:</label>
    <input type="number" id="duration" name="duration" required />
    <br />
    <label for="budget">Budget:</label>
    <input type="number" id="budget" name="budget" required />
    <br />
    <label for="activities">Activities:</label>
    <input type="text" id="activities" name="activities" required />
    <br />
    <label for="lodging">Lodging:</label>
    <input type="text" id="lodging" name="lodging" required />
    <br />
    <label for="transportation">Transportation:</label>
    <input type="text" id="transportation" name="transportation" required />
    <br />
    <label for="notes">Notes:</label>
    <textarea id="notes" name="notes" required></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
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
  input[type="number"],
  input[type="date"],
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

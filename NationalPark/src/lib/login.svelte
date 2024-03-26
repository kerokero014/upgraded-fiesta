<script>
    import Header from "./MainHeader.svelte";
    import Footer from "./MainFooter.svelte";
    let name = '';
    let email = '';
  
    function storeFormData() {
      // Check if name and email are not empty
      if(name.trim() && email.trim()) {
          // Create an object to store form data
          const formData = [{
              name,
              email
          }];
          
          // Convert the object to a JSON string
          const formDataJson = JSON.stringify(formData);
          
          // Store the JSON string in local storage
          localStorage.setItem('so-token', formDataJson);
          
          alert('Form data saved successfully!');
          window.location.href = '/';
      } else {
          alert('Please fill in all fields!');
      }
    }
  </script>
  <Header title="Summit Seekers" />
  <!-- Svelte form -->
  <form>
      <label for="name">Name:</label><br>
      <input type="text" id="name" bind:value={name}><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" bind:value={email}><br><br>
      <button class="button" type="button" on:click={storeFormData}>Submit</button>
  </form>
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
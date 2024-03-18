<script>
  import Header from "./MainHeader.svelte";
  import Footer from "./MainFooter.svelte";
  let name = "";
  let email = "";
  let message = "";

  const handleSubmit = () => {
    console.log({ name, email, message });
  };
</script>

<Header title="Contact Us" />

<section>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label>
    <input id="name" bind:value={name} type="text" required />

    <label for="email">Email:</label>
    <input id="email" bind:value={email} type="email" required />

    <label for="message">Message:</label>
    <textarea id="message" bind:value={message} required></textarea>

    <button type="submit">Submit</button>
  </form>
</section>



<Footer />

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    margin-top: 1rem;
  }

  input,
  textarea {
    margin-top: 0.5rem;
  }

  button {
    margin-top: 1rem;
  }

  button:hover {
    cursor: pointer;
  }
</style>

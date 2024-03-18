import Contact from '../lib/ContactForm.svelte';

const contact = new Contact({
  target: document.getElementById("contact"),
});

export default contact;
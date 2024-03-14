import Parks from '../lib/Parks.svelte';

const parks = new Parks({
  target: document.getElementById('parks')
});

export default parks;

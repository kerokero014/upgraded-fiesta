<script>
  import { onMount, beforeUpdate } from "svelte";

  let text, leaf, hill1, hill2, hill3, hill4, hill5;

  onMount(() => {
    text = document.getElementById("text");
    leaf = document.getElementById("leaf");
    hill1 = document.getElementById("hill1");
    hill2 = document.getElementById("hill2");
    hill3 = document.getElementById("hill3");
    hill4 = document.getElementById("hill4");
    hill5 = document.getElementById("hill5");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  beforeUpdate(() => {
    // Cleanup previous event listener if necessary
    if (text && leaf && hill1 && hill2 && hill3 && hill4 && hill5) {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  function handleScroll() {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";
  }
</script>

<section class="parallax">
  <img src="../src/imgs/hill1.png" id="hill1" alt="Base hill one" />
  <img src="../src/imgs/hill2.png" id="hill2" alt="Base Hill two" />
  <img src="../src/imgs/hill3.png" id="hill3" alt="Base Hill three" />
  <img src="../src/imgs/hill4.png" id="hill4" alt="Base Hill four" />
  <img src="../src/imgs/hill5.png" id="hill5" alt="Base Hill five" />
  <img src="../src/imgs/tree.png" id="tree" alt="Tree png" />
  <h2 id="text">Summit Seekers</h2>
  <img src="../src/imgs/leaf.png" id="leaf" alt=" leaf" />
  <img src="../src/imgs/plant.png" id="plant" alt="Plant png" />
</section>

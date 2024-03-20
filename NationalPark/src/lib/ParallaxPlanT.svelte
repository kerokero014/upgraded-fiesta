<script>
    let scrollPosition = 0;
    let backgroundImage = '../src/imgs/tree.png';
  
    window.addEventListener('scroll', () => {
      scrollPosition = window.scrollY;
  
      // Change the background image based on scroll position
      if (scrollPosition < 500) { // Change the scroll position as needed
        backgroundImage = '../src/imgs/tree.png';
      } else if (scrollPosition < 1000) {
        backgroundImage = '../src/imgs/tree.png';
      } else {
        backgroundImage = '../src/imgs/tree.png';
      }
    });
  </script>
  
  <style>
    .parallax {
      /* Full height */
      height: 100vh;
      overflow-y: auto; /* Enable vertical scrolling */
    }
  
    .parallax__image {
      /* Full height */
      height: 100vh;
  
      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      /* Bind backgroundImage to the style */
      background-image: url({backgroundImage});
    }
  </style>
  
  <div class="parallax">
    <div class="parallax__image"></div>
  </div>
  <img src="../src/imgs/tree.png" id="tree" alt="Tree png" />
  <h1>osososo</h1>
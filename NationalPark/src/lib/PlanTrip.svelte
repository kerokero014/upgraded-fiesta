<script>
    import Header from "./MainHeader.svelte";
    import Footer from "./MainFooter.svelte";
    import ParallaxCont from "./ParallaxPlanT.svelte";
  </script>
  
  
  <Header title="Summit Seekers" />
  
  <section class="flex-box">
    <div>
      <img src="../src/imgs/brazil-4808992_1280.jpg" alt="">
    <h1>name title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis 
      modi quaerat odio, voluptas aspernatur nam non a 
      quibusdam dolores molestias alias libero ullam, 
      delectus magnam omnis possimus suscipit, 
      amet saepe.</p>
      <button class="button">plan trip</button>
    </div>
    <div>
      <img src="../src/imgs/greece-3384386_1280.jpg" alt="">
    <h1>name title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis 
      modi quaerat odio, voluptas aspernatur nam non a 
      quibusdam dolores molestias alias libero ullam, 
      delectus magnam omnis possimus suscipit, 
      amet saepe.</p>
      <button class="button">plan trip</button>
    </div>
    <div>
      <img src="../src/imgs/lake-7892215_1280.jpg" alt="">
    <h1>name title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis 
      modi quaerat odio, voluptas aspernatur nam non a 
      quibusdam dolores molestias alias libero ullam, 
      delectus magnam omnis possimus suscipit, 
      amet saepe.</p>
      <button class="button">plan trip</button>
    </div>
  </section>
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
<script>
  export let testimonials = [
    {
      name: "Daniel Clifford",
      designation: "Verified User",
      image:
        "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      reviewTitle:
        "Summite Seekers website I explored proved to be an invaluable resource for both novice and experienced outdoor enthusiasts",
      reviewContent:
        "“  What sets this platform apart is its comprehensive educational content, featuring detailed guides on trail safety, navigation techniques, and Leave No Trace principles. What got me into this was the ability to plan my trips and lear about them in the same page. Am I missing something I don't need to go somwhere else”",
    },
    {
      name: "Jonathan Walters",
      designation: "Verified User",
      image:
        "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg",
      reviewTitle: "Summit Seekers: A Hiker's Haven",
      reviewContent:
        "This hiking website is a treasure trove for nature lovers seeking adventure. Its intuitive interface simplifies the process of finding the perfect trail, while its extensive educational resources offer valuable insights into outdoor safety and environmental stewardship. From beginner-friendly routes to challenging expeditions, Trails and Tracks caters to hikers of all skill levels, making it an essential companion for anyone exploring the great outdoors.",
    },
    {
      name: "Kira Whittle",
      designation: "Verified User",
      image:
        "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg",
      reviewTitle: "Such a life-changing experience. Highly recommended!",
      reviewContent:
        "Embarking on a hiking journey? Look no further than Summit Seekers. This website goes beyond merely listing trails; it's a comprehensive guide to outdoor exploration. Its educational materials cover everything from basic trail etiquette to advanced wilderness survival skills, ensuring that hikers are well-prepared for any excursion. With Summits Seekers as your companion, every step becomes an opportunity for discovery and learning.",
    },
    {
      name: "Jeanette Harmon",
      designation: "Verified User",
      image:
        "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg",
      reviewTitle: "Summit Seekers: Where Adventure Begins",
      reviewContent:
        "Peak Pursuits is the ultimate destination for outdoor enthusiasts craving adventure. Its user-friendly interface makes it easy to search for trails tailored to individual preferences, while its educational content equips hikers with the knowledge and skills necessary for a safe and enjoyable journey. Whether you're a seasoned trekker or a first-time hiker, Summite Seekers empowers you to explore the world's natural wonders with confidence and excitement.",
    },
    {
      name: "Patrick Abrams",
      designation: "Verified User",
      image:
        "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg",
      reviewTitle:
        "I had the best experience of my life with Summit Seekers. Highly recommended!",
      reviewContent:
        "“ I've always loved the great outdoors, but Summit Seekers took my passion to a whole new level. Their extensive trail database helped me discover new hikes in my area, while their educational resources taught me essential skills like navigation and safety. Thanks to Summit Seekers, I've become a more confident and knowledgeable hiker, and I can't wait to see where my next adventure takes me.”",
    },
  ];
</script>

<div class="fifth">
  <div class="outerdiv">
    <div class="innerdiv">
      {#each testimonials as testimonial, index}
        <div class="eachdiv div{index + 1}">
          <div class="userdetails">
            <div class="imgbox">
              <img src={testimonial.image} alt="" />
            </div>
            <div class="detbox">
              <p class="name {index > 1 && 'dark'}">{testimonial.name}</p>
              <p class="designation {index > 1 && 'dark'}">
                {testimonial.designation}
              </p>
            </div>
          </div>
          <div class="review {index > 1 && 'dark'}">
            <h4>{testimonial.reviewTitle}</h4>
            <p>{testimonial.reviewContent}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .outerdiv {
    width: 88%;
    min-height: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .innerdiv {
    display: grid;
    margin: 5px auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
      "div1 div1 div2 div3"
      "div5 div4 div4 div3";
  }
  .eachdiv {
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    box-shadow: 5px 5px 20px #6d6b6b6b;
    color: white;
  }
  .div1 {
    background: #2a8271;
    grid-area: div1;
    background-repeat: no-repeat;
    background-position-x: 25rem;
  }

  .div1:hover {
    transition: 0.5s;
    color: #fff;
    background-color: #3e3d3d;
  }
  .div2 {
    background: #003329;
    grid-area: div2;
  }
  .div2:hover {
    transition: 0.5s;
    color: #fff;
    background-color: #525151;
  }
  .div3 {
    background: #2c6e64;
    grid-area: div3;
    color: black;
  }
  .div3:hover {
    transition: 0.5s;
    color: #fff;
    background-color: #343234;
  }

  .div4 {
    background: #7ca19b;
    grid-area: div5;
    color: black;
  }

  .div4:hover {
    transition: 0.5s;
    color: #fff;
    background-color: #393737;
  }
  .div5 {
    background: #18403a;
    grid-area: div4;
  }
  .div5:hover {
    transition: 0.5s;
    color: #fff;
    background-color: #2d2c2c;
  }

  .userdetails {
    display: flex;
  }
  .imgbox {
    margin-right: 1rem;
  }
  .imgbox img {
    border-radius: 50%;
    width: 5rem;
    border: 2px solid #cec5c5;
  }
  .detbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .detbox p {
    margin: 0;
  }
  .detbox .name {
    color: hsl(0, 0%, 81%);
    font-size: 2rem;
    margin-bottom: 0.1rem;
    font-weight: 600;
  }
  .detbox .name.dark {
    color: #b4bbc5;
  }
  .detbox .designation {
    color: hsl(0, 0%, 81%);
    opacity: 50%;
    font-size: 1.5rem;
  }
  .detbox .designation.dark {
    color: #49505a;
  }
  .review h4 {
    font-size: 2rem;
    color: #ffdede;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }
  .review.dark h4 {
    color: #d7d2d2;
  }
  .review p {
    font-size: 1.5rem;
    color: #f3deff;
    font-weight: 500;
    opacity: 50%;
    line-height: 1.5;
  }
  .review.dark p {
    color: black;
  }

  @media only screen and (max-width: 1000px) {
    .innerdiv {
      transform: scale(0.7);
    }
  }
  @media only screen and (max-width: 800px) {
    .innerdiv {
      transform: scale(0.6);
    }
  }
  @media only screen and (max-width: 600px) {
    .div1 {
      background-position-x: 10rem;
    }
    .innerdiv {
      display: flex;
      flex-direction: column;
      transform: scale(1);
      margin: 2rem;
      margin-bottom: 5rem;
    }
    .attribution {
      position: relative;
    }
  }
</style>

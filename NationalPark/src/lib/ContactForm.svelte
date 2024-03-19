<script>
  import Header from "./MainHeader.svelte";
  import Footer from "./MainFooter.svelte";

  let firstName = "";
  let lastName = "";
  let email = "";
  let message = "";

  const sendMessage = () => {
    console.log({ firstName, lastName, email, message });
  };
</script>

<Header title="Contact Us" />

<section>
  <div class="container">
    <div class="contactinfo">
      <div>
        <h2>Contact Us</h2>
        <ul class="info">
          <li>
            <span>
              <img
                src="https://www.clipartmax.com/png/middle/121-1214856_pro-locator-free-location-icon-vector.png"
                alt="Location Icon"
              />
            </span>
            <span>
              101 E Viking St, <br />
              Rexburg <br />
              Idaho, 83440
            </span>
          </li>
          <li>
            <span>
              <img
                src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg"
                alt="Email Icon"
              />
            </span>
            <span> SummitSeekers@outlook.com </span>
          </li>
          <li>
            <span>
              <img
                src="https://www.pinclipart.com/picdir/middle/210-2108807_tete-mobile-svg-png-icon-free-download-phone.png"
                alt="Phone Icon"
              />
            </span>
            <span> 01234567890 </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="contactusform">
      <h2>Send Us A Message</h2>
      <div class="formBox">
        <div class="inputBox w50">
          <input type="text" bind:value={firstName} required />
          <span>First Name</span>
        </div>
        <div class="inputBox w50">
          <input type="text" bind:value={lastName} required />
          <span>Last Name</span>
        </div>
        <div class="inputBox w50">
          <input type="email" bind:value={email} required />
          <span>Email Address</span>
        </div>
        <div class="inputBox w100">
          <textarea bind:value={message} required></textarea>
          <span>Please enter a message</span>
        </div>
        <div class="inputBox w50">
          <button class="button" on:click={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

  :root {
    --black: #000;
    --white: #ffffffe7;
    --lightergrey: #ecf5e8;
    --darkergrey: #333;
    --quiteblue: #293d31;
    --red: #ff4136;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Baloo 2", cursive;
  }

  .container .contactinfo {
    display: flex;
    top: 0;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background-color: var(--darkergrey);
  }

  .container .contactinfo h2 {
    text-align: center;
    color: var(--white);
    font-size: 24px;
    font-weight: 700;
  }

  .container .contactinfo .info {
    position: relative;
    margin: 20px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container .contactinfo .info li {
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
  }

  .container .contactinfo .info li span:nth-child(1) {
    width: 40px;
    min-width: 40px;
  }

  .container .contactinfo .info li span:nth-child(1) img {
    max-width: 100%;
    filter: invert(83%);
    opacity: 0.5;
  }

  .container .contactinfo .info li span:nth-child(2) {
    color: var(--white);
    margin-left: 10px;
    font-weight: 100;
    opacity: 0.5;
  }

  .container .contactinfo .info li:hover span:nth-child(1) img,
  .container .contactinfo .info li:hover span:nth-child(2) {
    opacity: 1;
  }

  .container .contactusform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 50px;
    background-color: var(--white);
    top: 0;
  }

  .container .contactusform h2 {
    color: var(--quiteblue);
    font-size: 24px;
    font-weight: 700;
  }

  .container .contactusform .formBox {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
  }

  .container .contactusform .formBox .inputBox {
    position: relative;
    margin: 0 0 35px 0;
    width: 100% !important;
  }

  .container .contactusform .formBox .inputBox input,
  .container .contactusform .formBox .inputBox textarea {
    width: 100% !important;
    padding: 5px 0;
    resize: none;
    font-size: 18px;
    font-weight: 300;
    color: var(--darkergrey);
    border: none;
    border-bottom: 1px solid var(--darkergrey);
    outline: none;
    background-color: transparent;
  }

  .container .contactusform .formBox .inputBox textarea {
    min-height: 120px;
  }

  .container .contactusform .formBox .inputBox span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 300;
    color: var(--darkergrey);
    transition: 0.3s;
    pointer-events: none;
  }

  .container .contactusform .formBox .inputBox input:focus ~ span,
  .container .contactusform .formBox .inputBox textarea:focus ~ span,
  .container .contactusform .formBox .inputBox input:valid ~ span,
  .container .contactusform .formBox .inputBox textarea:valid ~ span {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    color: var(--red);
  }

  .container .contactusform .formBox .inputBox input[type="submit"] {
    position: relative;
    cursor: pointer;
    background-color: var(--darkergrey);
    color: var(--white);
    border: none;
    max-width: 150px;
    padding: 12px;
  }

  .container .contactusform .formBox .inputBox input[type="submit"]:hover {
    background-color: var(--lightergrey);
  }

  @media screen and (min-width: 700px) {
    .container .contactinfo h2 {
      text-align: center;
    }

    .container .contactinfo .info {
      flex-direction: row;
    }

    .container .contactinfo .info li span:nth-child(2) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 900px) {
    section {
      position: relative;
      display: flex;
      justify-content: center;
      align-content: center;
      min-height: 100vh;
      background-color: var(--grey);
    }

    section::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: var(--lightergrey);
    }

    .container {
      position: relative;
      width: 1100px;
      min-height: 550px;
      display: flex;
      z-index: 1000;
      margin: 0 20px 0 20px;
    }

    .container .contactinfo {
      position: absolute;
      top: 20%;
      width: 350px;
      height: calc(100% - 40%);
      z-index: 1;
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.3);
      align-items: left;
    }

    .container .contactinfo h2 {
      text-align: left;
    }

    .container .contactinfo .info {
      flex-direction: column;
    }

    .container .contactinfo .info li span:nth-child(2) {
      margin-right: 0;
    }

    .container .contactusform {
      position: absolute;
      top: 10%;
      height: calc(100% - 20%);
      box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
      margin-left: 150px;
      padding-left: 250px;
      background-color: var(--white);
    }

    .container .contactusform .formBox {
      flex-direction: row;
    }

    .button {
      appearance: button;
      background-color: #003329;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      display: inline-block;
      font-family: din-round, sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.8px;
      line-height: 20px;
      margin: 0;
      outline: none;
      overflow: visible;
      padding: 13px 16px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transform: translateZ(0);
      transition: filter 0.2s;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      width: 100%;
    }

    .button:after {
      background-clip: padding-box;
      background-color: #293d31;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    .button:main,
    .button:focus {
      user-select: auto;
    }

    .button:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
    }

    .button:disabled {
      cursor: auto;
    }

    .button:active {
      border-width: 4px 0 0;
      background: none;
    }
  }
</style>

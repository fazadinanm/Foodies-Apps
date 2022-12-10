class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="hero">
            <div class="hero-img">
              <picture>
                <source media="(max-width: 480px)" srcset="./images/heros/hero-small.jpg">
                <img src="./images/heros/hero-extra-large.jpg" alt="" />
              </picture>
            </div>
          <div class="hero-caption">
            <h1>Selamat Datang di Foodies Apps</h1>
            <article>
              <p>
                Penuhi nafsu makanmu dengan berbagai pilihan resto kami! <br/> 
              </p>
              <a href="#restaurant">Browse Resto's</a>
            </article>
          </div>
        </section>`;
  }
}

customElements.define('hero-header', Hero);

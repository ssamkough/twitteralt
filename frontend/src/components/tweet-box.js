const template = document.createElement("template");
template.innerHTML = `
  <style>
    article {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid purple;
    }
  </style>
  <article>
    <code class="author"></code>
    <div>
      <slot />
    </div>
    <hr />
    <em>
      <time class="date"></time>
    </em>
  </article>
`;

class TweetBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector(".author").innerText = `@${this.getAttribute(
      "author"
    )}`;
    this.shadowRoot.querySelector(".date").innerText = new Date();
  }
}

customElements.define("tweet-box", TweetBox);

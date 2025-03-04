const scroll_btn_container = document.getElementById('scroll_btn_container');

const up_arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>`;

const scroll_btn = document.createElement('button');
scroll_btn.innerHTML = up_arrow;

scroll_btn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
});

scroll_btn_container.appendChild(scroll_btn);
    // define custom elements

    //accordion handler
    (async () => {
      const accordion = document.querySelector('#my-accordion');
      await customElements.whenDefined('bento-accordion');
      const api = await accordion.getApi();
      // programatically expand all sections
      api.expand();
      // programatically collapse all sections
      api.collapse();
    })();

    //carousel handler
    (async () => {
      const carousel = document.querySelector('#my-carousel');
      await customElements.whenDefined('bento-base-carousel');
      const carouselApi = await carousel.getApi();
      // programatically advance to next slide
      carouselApi.next();
    })();


    //fit-text handler
    (async () => {
      const fitText = document.querySelector('#my-fit-text');
      await customElements.whenDefined('bento-fit-text');
      // set up button actions
      document.querySelector('#font-button').onclick = () => fitText.setAttribute('max-font-size', '80');
      document.querySelector('#content-button').onclick = () => fitText.textContent = 'new content';
    })();

    //sidebar handler
    (async () => {
      const sidebar = document.querySelector('#sidebar');
      await customElements.whenDefined('bento-sidebar');
      const sidebarApi = await sidebar.getApi();
      console.log(sidebar)

      // set up button actions
      document.querySelector('#open-sidebar').onclick = () => sidebarApi.open();
    })();

    const sidebar = document.querySelector('#sidebar');
    document.querySelector('#open-sidebar').onclick = () => {
      sidebar.classList.toggle('open');
    }

    //stream Gallery handler
    (async () => {
      const streamGallery = document.querySelector('#my-stream-gallery');
      await customElements.whenDefined('bento-stream-gallery');
      const streamApi = await streamGallery.getApi();

      // programatically expand all sections
      streamApi.next();
      // programatically collapse all sections
      streamApi.prev();
      // programatically go to slide
      streamApi.goToSlide(4);
    })();
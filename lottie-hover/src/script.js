//Play an animation back on second click

let iconMenu = document.querySelector('.lottie');

    let animationMenu = lottie.loadAnimation({
            container: iconMenu,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets2.lottiefiles.com/packages/lf20_uy0strvp.json"
    });

    var directionMenu = 1;
      iconMenu.addEventListener('mouseenter', (e) => {
      animationMenu.setDirection(directionMenu);
      animationMenu.play();
    });

      iconMenu.addEventListener('mouseleave', (e) => {
      animationMenu.setDirection(-directionMenu);
      animationMenu.play();
    });
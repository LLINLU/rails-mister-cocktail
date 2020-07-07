import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["COCKTAIL,TONIGHT?", "CUSTOMIZE RECIPES TO YOUR LIKES!"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };


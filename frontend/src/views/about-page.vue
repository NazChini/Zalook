<script></script>

<template lang="pug">
    .container
        .section-text
            .logo-container
                    img.logo-img(src='#')
            main
                h1 Create your Look <br> Find your Style
                h2 MIX, MATCH, DISCOVER AND CREATE OUTFITS!
                p Date Night? 
                p Picnic at the beach?
                p Just another day at work?
                p Coming up with ‘complete’ outfits for that perfect look is now a breeze with our look boards! 
                button.btn.btn-get-started Get Started
                button.btn.btn-video >
                span Want a Sneak Peek?
            
        .section-carousel
            .slider
                .slide-track
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
                    .slide
                    img(src='https://picsum.photos/250/100' height='100' width='250' alt='')
    
        
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

.container {
  font-family: 'Poppins', sans-serif;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 4.25rem;
  line-height: 1.5;
}

h2 {
  font-size: 1.25rem;
  color: #df6951;
}

// Carousel Styling
.section-carousel {
  border: 1px solid red;
  height: 100vh;
}

@mixin white-gradient {
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

$animationSpeed: 30s;

// Animation
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    // transform: translateX(calc(-250px * 7));
    transform: translateY(calc(-100px * 5));
  }
}

// Styling
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 250px;

  &::before,
  &::after {
    @include white-gradient;
    content: '';
    height: 50px;
    position: absolute;
    width: 250px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    flex-direction: column;
    height: calc(100px * 10);
    // height: 100%;
  }

  .slide {
    height: 100px;
    width: 250px;
  }
}
</style>

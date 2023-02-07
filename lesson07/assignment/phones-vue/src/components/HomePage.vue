<template>
  <div class="home-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Ultrices dui sapien eget mi proin sed libero enim. Auctor eu augue ut lectus. Pellentesque sit amet porttitor eget dolor morbi non arcu. Laoreet sit amet cursus sit amet dictum. Non tellus orci ac auctor augue mauris. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Lorem dolor sed viverra ipsum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Dignissim diam quis enim lobortis. Nibh tellus molestie nunc non blandit massa. Vel facilisis volutpat est velit egestas dui id ornare arcu. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Ipsum consequat nisl vel pretium lectus quam id leo in. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Iaculis at erat pellentesque adipiscing commodo elit.</p>
    
    <p>Viverra adipiscing at in tellus integer feugiat. Tellus cras adipiscing enim eu turpis egestas pretium. Auctor urna nunc id cursus metus aliquam eleifend mi in. Ac tincidunt vitae semper quis lectus nulla at. Volutpat blandit aliquam etiam erat velit scelerisque in. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Porta nibh venenatis cras sed felis eget velit aliquet. At imperdiet dui accumsan sit amet. Pellentesque dignissim enim sit amet venenatis urna. Varius vel pharetra vel turpis nunc eget.</p>
    <button id="popover" tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="About Me" data-bs-content="I am a phone enthusiast, web developer in the making, and I have cold hands.">About Me</button>
  </div>
</template>

<script>
// import "bootstrap/dist/js/bootstrap.min.js";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
export default {
  mounted() {
     // got code from https://therichpost.com/vue-3-bootstrap-5-popover-working-demo/
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode, {
      trigger: 'focus'
    }))
  }
}
</script>
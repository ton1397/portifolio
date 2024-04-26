<template>
	<div id="container" class="d-none d-md-block">
		<div class="cursor">
		<div class="cursor__ball cursor__ball--big" id="cursor-bal-big">
			<svg height="30" width="30">
				<circle cx="15" cy="15" r="12" stroke-width="0"></circle>
			</svg>
		</div>
	</div>
</div>
</template>

<script>

export default {
	data() {
  return {
    bigBall: null,
    smallBall: null
  }
},
mounted() {
	document.querySelector('#app').addEventListener('mousemove', this.mousemoved);
},
methods: {
  mousemoved(event) {
  var f = document.querySelector('.cursor__ball');
  f.style.top = event.pageY - window.scrollY + 'px';
  f.style.left = event.pageX + 'px';
}
}
}

</script>

<style lang="scss">



#floater {
  position: absolute;
  border: 1px solid #fff;
  padding: 1em 2em;
}

body{
	cursor: none;
}
.cursor {
    pointer-events: none;
    
    &__ball {
      position: fixed;
      top: 0;
      left: 0;
      mix-blend-mode: difference;
      z-index: 9999;
      
      circle {
        fill: #fff;
      }
    }      
  } 

</style>
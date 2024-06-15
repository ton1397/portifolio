<template>
	<div class="page-content content-page-animation content-page-show" id="inicio">
		<canvas id="swarm"></canvas>
		<div class="pagetop">
			<div class="container">
				<div class="pagetop-middle container">
					<div class="row align-content-around">
						<div class="col-md-6 text-start align-self-center animation_content" data-animate="animate__fadeInLeftBig">
							<typing></typing>
							<br><br>
							<a class="btn btn-outline-primary btn-lg" href="#contato" @click.prevent="$parent.scrollToElement('#contato')">Entre em contato</a>
						</div>
						<div class="col-md-6 mt-4 mt-md-0 pagetop-image">
							<!-- <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnk1d3R5NDkwbm1jdndhczExb3B1aGJ6bWk4dWhvM3ExbG9ja2JrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif" alt="Wellington Andrade"> -->
							<lottie-player src="https://lottie.host/b8f01f53-c759-43e2-a479-9c4bd0dc0737/IjWzxbaScB.json" background="transparent" speed="1" loop autoplay></lottie-player>
						</div>
					</div>
					
				</div>
				
			</div>
			<div class="roll-content">
				<lottie-player src="https://lottie.host/796fae71-4270-48af-aabf-e2c0eb5bf0e7/EWyYbAJ9QQ.json" background="transparent" speed="1" style="width: 50px; height: 50px;" loop autoplay></lottie-player>
			</div>
		</div>
	</div>
</template>

<script>
import Typing from "./Typing.vue";
export default {
	components: {
		Typing
	}
};
</script>

<style>



</style>
<template>
	<div class="page-content content-page-animation content-page-show" id="inicio">
		<canvas id="swarm"></canvas>
		<div class="pagetop">
			<div class="container">
				<div class="pagetop-middle container">
					<div class="row align-content-around">
						<div class="col-md-6 text-start align-self-center animation_content" data-animate="animate__fadeInLeftBig">
							<h1>Olá, seja bem-vindo!</h1>
							<h1>
								Eu sou <strong>Wellington Andrade</strong>
								<br><br>
								Trabalho com Desenvolvimento Web
							</h1>
							<br><br>
							<a class="btn btn-outline-primary btn-lg" href="#contato" @click.prevent="$parent.scrollToElement('#contato')">Entre em contato</a>
						</div>
						<div class="col-md-6 mt-4 mt-md-0 pagetop-image">
							<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnk1d3R5NDkwbm1jdndhczExb3B1aGJ6bWk4dWhvM3ExbG9ja2JrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif" alt="Wellington Andrade">
						</div>
					</div>
					
				</div>
			</div>
			<div class="roll-content">
				<dotlottie-player src="https://lottie.host/796fae71-4270-48af-aabf-e2c0eb5bf0e7/EWyYbAJ9QQ.json" background="transparent" speed="1" style="width: 50px; height: 50px;" loop autoplay></dotlottie-player>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>



</style>
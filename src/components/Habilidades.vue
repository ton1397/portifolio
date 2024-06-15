<template>
	<div id="habilidades" class="page-view content-page-animation">
		<div class="overlay"></div>
		<div class="container">
			<h1 class="mb-5">Habilidades</h1>
			<div class="habilidades-container">
				<Carousel :settings="settings" wrapAround :autoplay="1000" dir="ltr" pauseAutoplayOnHover :breakpoints="breakpoints">
					<Slide v-for="(habilidade, index) in habilidades_frontend" :key="index">
						<div class="habilidade mx-auto">
							<div class="habilidade-logo">
								<img :src="habilidade.img" :alt="habilidade.title" />
							</div>
							<div class="habilidade-name">{{ habilidade.title }}</div>
						</div>
					</Slide>
				</Carousel>
				<br>
				<Carousel :settings="settings" wrapAround :autoplay="1000" dir="rtl" pauseAutoplayOnHover :breakpoints="breakpoints">
					<Slide v-for="(habilidade, index) in habilidades_backend" :key="index">
						<div class="habilidade mx-auto">
							<div class="habilidade-logo">
								<img :src="habilidade.img" :alt="habilidade.title" />
							</div>
							<div class="habilidade-name">{{ habilidade.title }}</div>
						</div>
					</Slide>
				</Carousel>
			</div>
		</div>
	</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';

export default {
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			settings: {
				itemsToShow: 1,
				itemsToScroll: 1
			},
			breakpoints: {
				576: {
					itemsToShow: 2,
					itemsToScroll: 2,
				},
				768: {
					itemsToShow: 3,
					itemsToScroll: 3,
				},
				992: {
					itemsToShow: 4,
					itemsToScroll: 4,
				}
			},
			
			habilidades_frontend: [
				{ img: require('../assets/htmlLogo.png'), title: 'HTML 5' },
				{ img: require('../assets/cssLogo.png'), title: 'CSS 3' },
				{ img: require('../assets/bootstrapLogo.png'), title: 'Bootstrap' },
				{ img: require('../assets/tailwindLogo.png'), title: 'Tailwind' },
				{ img: require('../assets/scssLogo.png'), title: 'SCSS' },
				{ img: require('../assets/jsLogo.png'), title: 'JavaScript' },
				{ img: require('../assets/jqueryLogo.png'), title: 'jQuery' },
				{ img: require('../assets/tsLogo.png'), title: 'TypeScript' },
				{ img: require('../assets/vueLogo.png'), title: 'Vue.js' },
				{ img: require('../assets/vuerouterLogo.png'), title: 'Vue Router' },
				{ img: require('../assets/vuexLogo.png'), title: 'Vuex' },
				{ img: require('../assets/piniaLogo.png'), title: 'Pinia' },
			],

			habilidades_backend: [
				{ img: require('../assets/pythonLogo.png'), title: 'Python' },
				{ img: require('../assets/fastapiLogo.png'), title: 'Fast Api' },
				{ img: require('../assets/rustLogo.png'), title: 'Rust' },
				{ img: require('../assets/graphqlLogo.png'), title: 'GraphQL Api' },
				{ img: require('../assets/nodejsLogo.png'), title: 'Node.js' },
				{ img: require('../assets/mongodbLogo.png'), title: 'MongoDB' },
				{ img: require('../assets/mysqlLogo.png'), title: 'MySQL' },
				{ img: require('../assets/sqlserverLogo.png'), title: 'SQL Server' },
				{ img: require('../assets/firebaseLogo.png'), title: 'Firebase' },
				{ img: require('../assets/gitLogo.png'), title: 'GIT' },
				{ img: require('../assets/githubLogo.png'), title: 'Github' }
			],
		};
	}
};
</script>

<style lang="scss" scoped>

.habilidade-logo img {
	width: 80px;
	height: auto;
}

.habilidade-name {
	text-align: center;
	margin-top: 10px;
	font-weight: bold;
}
</style>
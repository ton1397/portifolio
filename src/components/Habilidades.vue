<template>
	<div id="habilidades" class="page-view content-page-animation">
		<div class="overlay"></div>
		<div class="container">
			<h1 class="mb-3">Habilidades</h1>
			<p class="section-hint">Filtre a stack e clique em uma tecnologia.</p>
			<div class="skill-filters">
				<button type="button" :class="{ active: filter === 'all' }" @click="filter = 'all'">Todas</button>
				<button type="button" :class="{ active: filter === 'front' }" @click="filter = 'front'">Frontend</button>
				<button type="button" :class="{ active: filter === 'back' }" @click="filter = 'back'">Backend</button>
			</div>
			<p v-if="selected" class="skill-note">{{ selected.title }} — {{ selected.note }}</p>
			<div class="habilidades-container">
				<Carousel v-show="filter !== 'back'" :settings="settings" wrapAround :autoplay="1000" dir="ltr" pauseAutoplayOnHover :breakpoints="breakpoints">
					<Slide v-for="habilidade in habilidades_frontend" :key="habilidade.title">
						<button
							type="button"
							class="habilidade mx-auto"
							:class="{ selected: selected && selected.title === habilidade.title }"
							@click="selected = habilidade"
						>
							<div class="habilidade-logo">
								<img :src="habilidade.img" :alt="habilidade.title" />
							</div>
							<div class="habilidade-name">{{ habilidade.title }}</div>
						</button>
					</Slide>
				</Carousel>
				<br v-show="filter === 'all'">
				<Carousel v-show="filter !== 'front'" :settings="settings" wrapAround :autoplay="1000" dir="rtl" pauseAutoplayOnHover :breakpoints="breakpoints">
					<Slide v-for="habilidade in habilidades_backend" :key="habilidade.title">
						<button
							type="button"
							class="habilidade mx-auto"
							:class="{ selected: selected && selected.title === habilidade.title }"
							@click="selected = habilidade"
						>
							<div class="habilidade-logo">
								<img :src="habilidade.img" :alt="habilidade.title" />
							</div>
							<div class="habilidade-name">{{ habilidade.title }}</div>
						</button>
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
			filter: "all",
			selected: null,
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
				{ img: require('../assets/htmlLogo.png'), title: 'HTML 5', note: 'Estrutura das páginas.' },
				{ img: require('../assets/cssLogo.png'), title: 'CSS 3', note: 'Layout, responsivo e estilo.' },
				{ img: require('../assets/bootstrapLogo.png'), title: 'Bootstrap', note: 'Grid e componentes prontos.' },
				{ img: require('../assets/tailwindLogo.png'), title: 'Tailwind', note: 'Estilo utilitário no markup.' },
				{ img: require('../assets/scssLogo.png'), title: 'SCSS', note: 'CSS com variáveis e módulos.' },
				{ img: require('../assets/jsLogo.png'), title: 'JavaScript', note: 'Lógica no navegador e no servidor.' },
				{ img: require('../assets/jqueryLogo.png'), title: 'jQuery', note: 'DOM em sistemas legados.' },
				{ img: require('../assets/tsLogo.png'), title: 'TypeScript', note: 'JavaScript com tipos.' },
				{ img: require('../assets/vueLogo.png'), title: 'Vue.js', note: 'Interfaces e componentes.' },
				{ img: require('../assets/vuerouterLogo.png'), title: 'Vue Router', note: 'Navegação entre telas.' },
				{ img: require('../assets/vuexLogo.png'), title: 'Vuex', note: 'Estado compartilhado no Vue.' },
				{ img: require('../assets/piniaLogo.png'), title: 'Pinia', note: 'Estado no Vue 3.' },
			],

			habilidades_backend: [
				{ img: require('../assets/pythonLogo.png'), title: 'Python', note: 'APIs, automações e IA.' },
				{ img: require('../assets/fastapiLogo.png'), title: 'Fast Api', note: 'APIs rápidas em Python.' },
				{ img: require('../assets/rustLogo.png'), title: 'Rust', note: 'Serviços com menos uso de servidor.' },
				{ img: require('../assets/graphqlLogo.png'), title: 'GraphQL Api', note: 'Consultas flexíveis entre serviços.' },
				{ img: require('../assets/nodejsLogo.png'), title: 'Node.js', note: 'APIs e serviços em JavaScript.' },
				{ img: require('../assets/mongodbLogo.png'), title: 'MongoDB', note: 'Banco de documentos.' },
				{ img: require('../assets/mysqlLogo.png'), title: 'MySQL', note: 'Banco relacional.' },
				{ img: require('../assets/sqlserverLogo.png'), title: 'SQL Server', note: 'Banco relacional.' },
				{ img: require('../assets/firebaseLogo.png'), title: 'Firebase', note: 'Auth e dados em tempo real.' },
				{ img: require('../assets/gitLogo.png'), title: 'GIT', note: 'Histórico e versões do código.' },
				{ img: require('../assets/githubLogo.png'), title: 'Github', note: 'Repositórios e revisão.' },
				{ img: require('../assets/laravel-logo.webp'), title: 'Laravel', note: 'APIs e sistemas em PHP.' }
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

.skill-filters {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-bottom: 18px;
	flex-wrap: wrap;
}
.skill-filters button,
.habilidade {
	border: 1px solid transparent;
	background: #fff;
	color: #333;
	border-radius: 999px;
	padding: 8px 16px;
	transition: transform .2s ease, border-color .2s ease;
}
.skill-filters button.active,
.habilidade.selected {
	border-color: #2acdff;
	box-shadow: 0 0 0 2px rgba(42, 205, 255, .35);
}
.skill-note {
	min-height: 1.5em;
	margin-bottom: 16px;
}
.habilidade {
	border-radius: 10px;
	font: inherit;
	width: 150px;
	height: 160px;
}
.habilidade-name {
	text-align: center;
	margin-top: 10px;
	font-weight: bold;
}
</style>
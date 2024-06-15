<template>
	<div class="page-view content-page-animation" id="projetos">
		<div class="container">
			<h1 class="mb-5">Projetos</h1>
			<carousel :items-to-show="1" :autoplay="slide_hover" :wrap-around="true" @mouseenter="slide_hover = 0" @mouseleave="slide_hover = 5000">
				<slide v-for="slide in slides" :key="slide" :style="{ backgroundImage: 'url(' + require('@/assets/' + slide.background) + ')', backgroundSize: 'cover' }">
				<div class="slide-wrapper position-relative">
					<div class="slide-content">
						<h1>{{ slide.title }}</h1>
						<p>{{ slide.description }}</p>
						<a class="btn btn-outline-primary btn-lg" :href="slide.url" target="blank">Ver Página</a>
					</div>
				</div>
				</slide>
			
				<template #addons>
				<navigation />
				<pagination />
				</template>
			</carousel>
		</div>
	</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data(){
		return {
			slide_hover: 5000,
			slides: [
			{
					title: 'Registro online brasil',
					description: 'Desenvolvi um site de registro de marca utilizando Vue.js, oferecendo uma experiência otimizada e responsiva para empresários. A plataforma simplifica o processo de registro, fornecendo uma interface intuitiva e acompanhamento em tempo real do status do pedido. A qualidade de desenvolvimento garante uma experiência eficiente e confiável para os usuários.',
					background: 'registroonline.png',
					url: "https://registroonlinebrasil.com.br/"
				},
				{
					title: 'EwContadores',
					description: 'Desenvolvi um site para montagem de equipes utilizando Vue.js, proporcionando uma plataforma intuitiva e eficiente para conectar empregadores a talentos qualificados. Com recursos avançados de busca e filtragem, os usuários podem explorar oportunidades de carreira e se candidatar a vagas relevantes com facilidade. A qualidade de desenvolvimento garante uma experiência de usuário excepcional, impulsionando o sucesso tanto para empregadores quanto para candidatos.',
					background: 'ewcontadores.png',
					url: "https://ewcontadores.com.br/"
				},
				{
					title: 'Eucontabilizo web',
					description: 'O site de contabilidade que desenvolvi com Vue.js oferece uma solução completa e eficaz para empresas gerenciarem suas finanças. Com recursos avançados e uma interface intuitiva, os usuários podem acompanhar despesas, gerar relatórios detalhados e integrar-se facilmente com sistemas de folha de pagamento e bancos. A qualidade de desenvolvimento garante uma experiência fluida e confiável para os usu',
					background: 'eucontabilizoweb.png',
					url: "https://eucontabilizoweb.com.br/"
				},
				{
					title: 'DClara',
					description: 'Utilizando Vue.js, criei um site para declaração de imposto de renda que se destaca pela sua usabilidade e desempenho. Os usuários podem inserir suas informações financeiras de forma simples e receber orientações precisas sobre deduções e créditos fiscais. A integração direta com a Receita Federal garante uma experiência fluida e segura, demonstrando a excelência no desenvolvimento do frontend.',
					background: 'dclara.png',
					url: "https://dclara.com.br/"
				},
				{
					title: 'Bookmark',
					description: 'Uma landing page com um design moderno e reponsivo para dispositivos móveis.',
					background: 'Bookmark-landing-page-capture.png',
					url: "https://ton1397.github.io/blogr-landing-page/"
				},
				{
					title: 'Blogr',
					description: 'Uma landing page com um design moderno e reponsivo para dispositivos móveis.',
					background: 'Blogr-landing-page-capture.png',
					url: "https://ton1397.github.io/bookmark-landing-page/"
				},
				{
					title: 'Calculadora',
					description: 'Uma calculadora simples e moderna com opção de mudar o tema.',
					background: 'Calculadora-vue-capture.png',
					url: "https://ton1397.github.io/calculadora-vue/"
				},
				{
					title: 'Order Sumary',
					description: 'Uma tela de assinatura reponsivo e moderno.',
					background: 'Order-sumary-capture.png',
					url: "https://ton1397.github.io/order-summary-component/"
				},
				{
					title: 'Organiza meu bolso',
					description: 'Um projeto moderno integrando uma api com objetivo de gerenciar suas finanças.',
					background: 'Organiza-meu-bolso-capture.png',
					url: "https://organiza-meu-bolso.netlify.app/"
				}
			]
		}
	},
	methods: {
		getImage(image){
			console.log(image);
			return '' + image
		}
	}
};
</script>

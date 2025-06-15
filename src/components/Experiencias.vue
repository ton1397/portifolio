<template>
	<div class="page-view content-page-animation" id="experiencias">
		<div class="container animation_content" data-animate="animate__flipInX">
			<h1 class="mb-5">Experiências</h1>
			<ul class="timeline text-start">
				<li class="timeline-item ms-3 pb-4" v-for="experiencia in experiences" :key="experiencia.id">
					<div class="row no-gutter">
						<div class="col-lg-5 mb-4 mb-lg-0">
							<p class="font-weight-bold mb-2 text-primary text-small">{{ experiencia.date }}</p>
							<h2 class="h6 mb-0 text-uppercase">{{ experiencia.title }}</h2>
							<p class="text-small mb-0">{{ experiencia.role }}</p>
							<span class="small text-muted">{{ experiencia.location }}</span>
						</div>
						<div class="col-lg-7">
							<p class="text-white" v-html="experiencia.activities">
							</p>
						</div>
					</div>
				</li>
            </ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Experiencias",
	data() {
		return {
			experiences: []
		};
	},
	created() {
		this.getExperiences();
	},
	methods: {
		getExperiences() {
			this.experiences = [
				{
					title: "Grupo Souyess",
					description: "Full Stack pleno",
					date: "08/2024 - Momento",
					location: "São Paulo",
					activities: `
						Como fullstack Pleno fiz transição de Vue.js para React/Next.js. Criação de APIs e microserviços PHP Laravel. Suporte a sistemas legados (PHP 5.3, jQuery, CSS, HTML) e scripts Python (IA). Reescrita de sistemas legados (PHP 5.3, Python) para React/Next.js e PHP Laravel 11, dockerização de frontend e backend. 
						<br><br>
						Case de Sucesso: Reescrita de sistemas legados para React/Next.js e PHP Laravel 11, aumentando a sustentabilidade e a disponibilidade de desenvolvedores. 
					`
				},
				{
					title: "ECWSA",
					description: "Full Stack pleno",
					date: "07/2022 - 05/2024",
					location: "São Paulo",
					activities: `
						Como frontend pleno em Vue.js atuei, liderando tecnicamente a área, mentorando juniores e garantindo qualidade. Desenvolvimento backend com Python (APIs, microserviços, RabbitMQ, manipulação de dados PostgreSQL/MongoDB, cron). Aprendizado e implementação de Rust (reescrita de microserviços, APIs GraphQL, filas). Criação e suporte de sistemas diversos com Django, Vue.js, Python e Rust.
						<br><br>
						Case de Sucesso: Reescrevendo microserviços de Python para Rust, obtive redução significativa no consumo de recursos dos servidores, gerando economia para a empresa.
					`
				},
				{
					title: "PaginaViva CRM",
					description: "Programador Jr.",
					date: "08/2019 - 07/2022",
					location: "São Paulo",
					activities: `
						Estudo e aplicação de APIs (Google Maps, BigQuery via JavaScript), aprendizado de Vue.js para modernização de aplicativos Cordova JS. Desenvolvimento de web chat com permissões para farmacêuticas e implementação de assinatura (RevenueCat) em aplicativo de artigos clínicos (Android/iOS). Realização de ajustes em WordPress e criação de bot WhatsApp (Python/Selenium).
						<br><br>
						Case de Sucesso: Modernização do aplicativo de artigos clínicos para Vue.js e implementação de assinaturas (RevenueCat) geraram receita significativa para a empresa através das lojas de aplicativos.
					`
				}
			]
		}
	},
};
</script>

<style>
</style>
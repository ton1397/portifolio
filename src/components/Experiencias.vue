<template>
	<div class="page-view content-page-animation" id="experiencias">
		<div class="container animation_content" data-animate="animate__flipInX">
			<h1 class="mb-2">Experiências</h1>
			<p class="section-hint">Clique em uma experiência para abrir o que foi feito.</p>
			<ul class="timeline text-start">
				<li
					class="timeline-item ms-3 pb-4"
					v-for="(experiencia, index) in experiences"
					:key="experiencia.title + experiencia.date"
					:class="{ 'is-open': open === index }"
				>
					<button
						type="button"
						class="timeline-toggle"
						:aria-expanded="open === index ? 'true' : 'false'"
						@click="open = open === index ? -1 : index"
					>
						<div class="row no-gutter">
							<div class="col-lg-5 mb-2 mb-lg-0">
								<p class="font-weight-bold mb-2 text-primary text-small">{{ experiencia.date }}</p>
								<h2 class="h6 mb-0 text-uppercase">{{ experiencia.title }}</h2>
								<p class="text-small mb-0">{{ experiencia.role }}</p>
								<span class="small text-muted">{{ experiencia.location }}</span>
							</div>
							<div class="col-lg-7 d-flex align-items-center">
								<span class="timeline-action">{{ open === index ? "Fechar" : "Ver detalhes" }}</span>
							</div>
						</div>
					</button>
					<div v-show="open === index" class="timeline-body">
						<p class="text-white mb-0" v-html="experiencia.activities"></p>
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
			open: 0,
			experiences: [
				{
					title: "Claranet Brasil",
					role: "Desenvolvedor Full Stack",
					date: "02/2026 – Presente",
					location: "São Paulo",
					activities: `
						Desenvolvimento e arquitetura de agentes de inteligência artificial e chatbots corporativos com Python, Go e React.
						<br><br>
						Orquestração de serviços serverless na AWS, com API Gateway, filas SQS, envio via SES e funções Lambda. Também cuido de rotinas de segurança, manutenção e acesso remoto a servidores.
					`
				},
				{
					title: "Grupo Capri",
					role: "Desenvolvedor Full Stack",
					date: "09/2025 – 02/2026",
					location: "São Paulo",
					activities: `
						Desenvolvimento e sustentação de aplicações web e mobile com Next.js, React, NestJS e React Native.
					`
				},
				{
					title: "Grupo Souyess",
					role: "Desenvolvedor Full Stack Pleno",
					date: "08/2024 – 09/2025",
					location: "São Paulo",
					activities: `
						Liderança da transição de sistemas legados em PHP 5.3 para Next.js, React e PHP Laravel 11, com frontend e backend em Docker. Desenvolvimento de APIs, microsserviços e scripts Python para processamento com IA.
						<br><br>
						A reescrita aumentou a sustentabilidade dos sistemas, facilitou a entrada de novos desenvolvedores e reduziu a dívida técnica.
					`
				},
				{
					title: "ECWSA",
					role: "Desenvolvedor Full Stack / Liderança técnica",
					date: "08/2022 – 05/2024",
					location: "São Paulo",
					activities: `
						Liderança técnica do frontend em Vue.js, com padrões de código, testes e mentoria de juniores. Backend distribuído com Python, Rust, RabbitMQ, GraphQL, PostgreSQL e MongoDB.
						<br><br>
						A reescrita de microsserviços críticos de Python para Rust reduziu o consumo de memória e CPU dos servidores.
					`
				},
				{
					title: "Página Viva CRM",
					role: "Programador júnior",
					date: "09/2019 – 07/2022",
					location: "São Paulo",
					activities: `
						Integração de APIs de localização e BigQuery, web chat corporativo e automações em Python. Modernização de um aplicativo Cordova para Vue.js e implementação de assinaturas com RevenueCat em iOS e Android.
					`
				}
			]
		};
	}
};
</script>

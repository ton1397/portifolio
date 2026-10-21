<template>
	<div class="page-view content-page-animation" id="curriculo">
		<div class="container">
			<div class="row">
				<div class="col-lg-7">
					<div class="animation_content" data-animate="animate__fadeInRightBig">
						<h1 class="mb-3 fw-bold">Currículo</h1>
						<p>
							Engenheiro de software full stack, com quase 6 anos em sistemas distribuídos,
							microsserviços e modernização de sistemas legados. Trabalho com Go, Python,
							TypeScript e AWS, além de React, Next.js e Vue.js.
						</p>
						<p>
							Formado em Análise e Desenvolvimento de Sistemas pela UNIP e técnico em informática
							com ênfase em programação.
						</p>
						<div class="cv-chips">
							<button
								v-for="chip in chips"
								:key="chip.label"
								type="button"
								class="cv-chip"
								@click="$parent.scrollToElement(chip.href)"
							>
								<strong>{{ chip.label }}</strong>
								<span>{{ chip.detail }}</span>
							</button>
						</div>
					</div>
				</div>
				<div class="col-lg-5 align-self-center">
					<div class="cv-download">
					<button id="btn-download-cv" type="button" @click="downloadCV">
						<font-awesome-icon :icon="['fas','download']" />
						<br>
						{{ downloaded ? "PDF baixado" : "Baixar PDF" }}
					</button>
					<a class="cv-open" href="Curriculo_Wellington_Andrade.pdf" target="_blank" rel="noopener noreferrer">
						Abrir currículo
					</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			downloaded: false,
			chips: [
				{ label: "Quase 6 anos", detail: "Ver trajetória", href: "#experiencias" },
				{ label: "Go, Python, TS", detail: "Ver stack", href: "#habilidades" },
				{ label: "AWS", detail: "Serverless", href: "#experiencias" },
				{ label: "React, Next, Vue", detail: "Ver projetos", href: "#projetos" }
			]
		};
	},
	methods: {
		downloadCV() {
			const anchor = document.createElement("a");
			anchor.setAttribute("href", "Curriculo_Wellington_Andrade.pdf");
			anchor.setAttribute("download", "Curriculo_Wellington_Andrade.pdf");
			document.body.appendChild(anchor);
			anchor.click();
			anchor.parentNode.removeChild(anchor);
			this.downloaded = true;
			this.$parent.notify("Download do currículo iniciado");
		}
	}
};
</script>

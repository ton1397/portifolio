<template>
	<div class="page-view content-page-animation" id="curriculo">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="animation_content" data-animate="animate__fadeInRightBig">
						<h1 class="mb-5 fw-bold">Curriculo</h1>
						<p>Atualmente trabalho como programador pleno.</p>
						<p>Sou formado em análise e desenvolvimento de sistemas na universidade UNIP.</p>
						<p>Concluí o curso tecnico de informática com ênfase em programação.</p>
						<p>Já concluí diversos cursos de programação como Sass, PHP, VueJs, Javascript, NodeJs.</p>
						<p>Para detalhes, baixe meu currículo.</p>
					</div>
				</div>
				<div class="col-md-6 align-self-center">
					<button id="btn-download-cv" @click="downloadCV">
						<font-awesome-icon :icon="['fas','download']" />
						<br>
						Baixar PDF
					</button>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods:{
		downloadCV(){
			var anchor=document.createElement('a');
			anchor.setAttribute('href','CV.pdf')
			anchor.setAttribute('download','CV.pdf');
			document.body.appendChild(anchor);
			anchor.click();
			anchor.parentNode.removeChild(anchor);
		}
	}
};
</script>

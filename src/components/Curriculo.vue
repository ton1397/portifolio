<template>
	<div class="page-view content-page-animation" id="curriculo">
		<div class="container">
			<h1 class="mb-5">Curriculo</h1>
			<p>Atualmente trabalho como programador pleno. na empresa ECWSA.</p>
			<p>Sou formado em análise e desenvolvimento de sistemas na universidade UNIP.</p>
			<p>Concluí o curso tecnico de informática com ênfase em programação.</p>
			<p>Já concluí diversos cursos de programação como Sass, PHP, VueJs, Javascript, NodeJs.</p>
			<p>Para detalhes, baixe meu currículo no botão abaixo.</p>
			<button id="btn-download-cv" class="btn btn-outline-danger btn-lg" @click="downloadCV">
				<font-awesome-icon :icon="['fas','download']" />
				Baixar PDF
			</button>

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

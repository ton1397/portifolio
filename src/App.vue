<template>
	<div id="main-page" :class="theme">
		<navbar-header/>
		<div>
			<inicio/>
			<curriculo/>
			<projetos/>
			<habilidades/>
			<experiencias/>
			<contato/>
			<footer-menu/>
		</div>
		
	</div>
</template>

<script>
import NavbarHeader from "./components/NavbarHeader.vue"
import Inicio from "./components/Inicio.vue"
import Curriculo from "./components/Curriculo.vue"
import Projetos from "./components/Projetos.vue"
import Habilidades from "./components/Habilidades.vue"
import Experiencias from "./components/Experiencias.vue"
import Contato from "./components/Contato.vue"
import FooterMenu from "./components/FooterMenu.vue"
export default {
	name: "App",
	components: {
		NavbarHeader,
		Inicio,
		Curriculo,
		Projetos,
		Habilidades,
		Experiencias,
		Contato,
		FooterMenu
	},
	data(){
		return{
			theme: "light"
		}
	},
	mounted(){
		document.addEventListener('scroll', this.changeNavbar);
	},
	methods:{
		changeTheme(theme){
			this.theme = theme
		},
		changeNavbar(){
			let scrollPosition = document.querySelector("html").scrollTop;
			if (scrollPosition > 50) {
				document.querySelector(".navbar-header .navbar").classList.add('navbar-scrolled-theme')
				document.querySelector("#scrollTop").classList.add('fadeIn')
				
			}else{
				document.querySelector(".navbar-header .navbar").classList.remove('navbar-scrolled-theme')
				document.querySelector("#scrollTop").classList.remove('fadeIn')
			}
		},
		scrollToElement(href){
			let element = document.querySelector(href)
			element.scrollIntoView();
		}
	}
};
</script>

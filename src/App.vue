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
		
		setTimeout(() => {
			document.getElementById('inicio').classList.add('content-page-show')
		}, 100);
		
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

			let elementsArray = document.querySelectorAll(".content-page-animation");
			for(let i=0; i < elementsArray.length; i++){
				var rect = elementsArray[i].getBoundingClientRect();
				var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
				if(!(rect.bottom < 0 || rect.top - viewHeight >= 0)){
					if(elementsArray[i].className.indexOf('content-page-show') == -1){
						elementsArray[i].classList.add('content-page-show')
					}
				}else{
					if(elementsArray[i].className.indexOf('content-page-show') != -1){
						elementsArray[i].classList.remove('content-page-show')
					}
				}
			}
		},
		scrollToElement(href){
			let element = document.querySelector(href)
			element.scrollIntoView();
		}
	}
};
</script>

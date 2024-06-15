<template>
	<div id="main-page" :class="theme">
		<Cursor/>
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
import Cursor from "./components/Cursor.vue"
import NavbarHeader from "./components/NavbarHeader.vue"
import Inicio from "./components/Inicio.vue"
import Curriculo from "./components/Curriculo.vue"
import Projetos from "./components/Projetos.vue"
import Habilidades from "./components/Habilidades.vue"
import Experiencias from "./components/Experiencias.vue"
import Contato from "./components/Contato.vue"
import FooterMenu from "./components/FooterMenu.vue"
import throttle from 'lodash/throttle';

export default {
	name: "App",
	components: {
		Cursor,
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
			theme: "dark"
		}
	},
	mounted() {
		// Adiciona o evento de rolagem com throttling
		this.throttledChangeNavbar = throttle(this.changeNavbar, 100);
		document.addEventListener('scroll', this.throttledChangeNavbar);

		setTimeout(() => {
			let element = document.getElementById('inicio');
			element.classList.add('content-page-show');
			let animation_el = element.querySelector('.animation_content');
			animation_el.classList.add('animate__animated', animation_el.getAttribute('data-animate'));
			window.dispatchEvent(new Event('init'));
			document.getElementsByClassName('dg')[0].remove();
		}, 100);
	},
	beforeDestroy() {
		// Remove o evento de rolagem ao destruir o componente
		document.removeEventListener('scroll', this.throttledChangeNavbar);
	},
	methods: {
		changeTheme(theme) {
			this.theme = theme;
		},
		changeNavbar() {
			let elementsArray = document.querySelectorAll('.content-page-animation');
			for (let i = 0; i < elementsArray.length; i++) {
				var rect = elementsArray[i].getBoundingClientRect();
				var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
				if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
					if (elementsArray[i].className.indexOf('content-page-show') === -1) {
						let animation_el = elementsArray[i].querySelector('.animation_content');
						if (animation_el) {
							animation_el.classList.add('animate__animated', animation_el.getAttribute('data-animate'));
						}
						elementsArray[i].classList.add('content-page-show');
					}
				} else {
					if (elementsArray[i].className.indexOf('content-page-show') !== -1) {
						let animation_el = elementsArray[i].querySelector('.animation_content');
						if (animation_el) {
							animation_el.classList.remove('animate__animated', animation_el.getAttribute('data-animate'));
						}
						elementsArray[i].classList.remove('content-page-show');
					}
				}
			}
		},
		scrollToElement(href) {
			let element = document.querySelector(href);
			element.scrollIntoView();
		}
	}
};
</script>

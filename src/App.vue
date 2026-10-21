<template>
	<div id="main-page" :class="theme">
		<div class="scroll-progress" :style="{ transform: 'scaleX(' + progress + ')' }"></div>
		<div v-if="toast" class="toast-note" role="status">{{ toast }}</div>
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
import { Collapse } from 'bootstrap'
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
			theme: "dark",
			progress: 0,
			toast: "",
			toastTimer: null,
			activeSection: "inicio",
			scrolled: false,
			scrolledFar: false
		}
	},
	mounted() {
		// Adiciona o evento de rolagem com throttling
		this.throttledChangeNavbar = throttle(this.changeNavbar, 100);
		document.addEventListener('scroll', this.throttledChangeNavbar);
		this.changeNavbar();

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
		document.removeEventListener('scroll', this.throttledChangeNavbar);
		clearTimeout(this.toastTimer);
	},
	methods: {
		notify(message) {
			this.toast = message;
			clearTimeout(this.toastTimer);
			this.toastTimer = setTimeout(() => {
				this.toast = "";
			}, 2400);
		},
		changeTheme(theme) {
			this.theme = theme;
		},
		changeNavbar() {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const height = document.documentElement.scrollHeight - window.innerHeight;
			this.progress = height > 0 ? Math.min(scrollTop / height, 1) : 0;
			this.scrolled = scrollTop > 40;
			this.scrolledFar = scrollTop > 500;

			const sections = ["inicio", "curriculo", "projetos", "habilidades", "experiencias", "contato"];
			let current = "inicio";
			sections.forEach((id) => {
				const section = document.getElementById(id);
				if (section && section.getBoundingClientRect().top < 140) {
					current = id;
				}
			});
			this.activeSection = current;

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
			if (!element) {
				return;
			}
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			const menu = document.getElementById("nav-list");
			if (menu && menu.classList.contains("show")) {
				Collapse.getOrCreateInstance(menu).hide();
			}
		}
	}
};
</script>

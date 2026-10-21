<template>
	<div id="typing">
		<h1>
			Olá, seja bem-vindo!<br>
			Eu sou Wellington Andrade
		</h1>
		<p class="hero-role">{{ shown }}<span class="caret" aria-hidden="true"></span></p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			phrases: [
				"Desenvolvedor Full Stack",
				"Go, Python e TypeScript",
				"React, Next.js e Vue.js",
				"AWS e microsserviços"
			],
			shown: "",
			phraseIndex: 0,
			charIndex: 0,
			deleting: false,
			timer: null
		};
	},
	mounted() {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			this.shown = this.phrases[0];
			return;
		}
		this.tick();
	},
	beforeUnmount() {
		clearTimeout(this.timer);
	},
	methods: {
		tick() {
			const phrase = this.phrases[this.phraseIndex];
			if (!this.deleting) {
				this.charIndex += 1;
				this.shown = phrase.slice(0, this.charIndex);
				if (this.charIndex === phrase.length) {
					this.deleting = true;
					this.timer = setTimeout(this.tick, 1400);
					return;
				}
				this.timer = setTimeout(this.tick, 70);
				return;
			}
			this.charIndex -= 1;
			this.shown = phrase.slice(0, this.charIndex);
			if (this.charIndex === 0) {
				this.deleting = false;
				this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
				this.timer = setTimeout(this.tick, 280);
				return;
			}
			this.timer = setTimeout(this.tick, 36);
		}
	}
};
</script>

<style>
.hero-role {
	min-height: 1.4em;
	margin: 12px 0 0;
	font-size: 1.35rem;
	font-weight: 600;
	color: #2acdff;
}
.caret {
	display: inline-block;
	width: 2px;
	height: 1em;
	margin-left: 3px;
	background: #2acdff;
	vertical-align: text-bottom;
	animation: caret-blink 1s steps(1) infinite;
}
@keyframes caret-blink {
	50% { opacity: 0; }
}
</style>

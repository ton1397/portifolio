<template>
	<div class="navbar-header">
	<nav id="navbar" class="navbar fixed-top navbar-expand-md navbar-dark">
		<div class="container">
			<a class="navbar-brand" href="#"><img src="../assets/logo_portifolio.png"></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-list" aria-controls="nav-list" aria-expanded="false" aria-label="Toggle navigation">
				<span><font-awesome-icon :icon="['fas','bars']" /></span>
			</button>
			<div class="collapse navbar-collapse" id="nav-list">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="#inicio" @click.prevent="$parent.scrollToElement('#inicio')">Inicio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#curriculo" @click.prevent="$parent.scrollToElement('#curriculo')">Currículo</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#projetos" @click.prevent="$parent.scrollToElement('#projetos')">Projetos</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#habilidades" @click.prevent="$parent.scrollToElement('#habilidades')">Habilidades</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#experiencias" @click.prevent="$parent.scrollToElement('#experiencias')">Experiências</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#contato" @click.prevent="$parent.scrollToElement('#contato')">Contato</a>
					</li>
				</ul>
					<ul class="navbar-nav ml-auto mb-2 mb-lg-0">
						<li class="nav-item d-flex">
							<div class="theme-switch-button m-auto">
								<input type="checkbox" name="check-theme" id="check-theme" @click="toogleTheme">
								<label for="check-theme" class="theme-switch-label">
									<font-awesome-icon icon="moon" />
									<font-awesome-icon icon="sun" />
									<div id="switch-ball"></div>
								</label>
							</div>
						</li>
					</ul>
			</div>
		</div>
	</nav>
	<a href="#inicio" id="scrollTop" @click.prevent="$parent.scrollToElement('#inicio')">
		<font-awesome-icon :icon="['fas','arrow-up']" />
	</a>
	</div>
</template>

<script>
export default {
	computed:{
		getTheme(){
			return this.$parent.theme
		}
	},
	mounted(){
		
	},
	methods:{
		toogleTheme(){
			let theme = this.getTheme
			if (theme == "light") {
				this.$parent.changeTheme("dark")
			}else{
				this.$parent.changeTheme("light")
			}
		}
	}
};
</script>

<style>
</style>
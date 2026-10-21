<template>
	<div class="page-view content-page-animation" id="contato">
		<div class="container">
			<h1>Contato</h1>
			<p class="section-hint">Abra o canal ou copie o contato.</p>
			<div class="contato-container">
				<div class="row mx-auto justify-content-center">
					<div class="col-6 col-md-4" v-for="item in contacts" :key="item.id">
						<div class="contato mx-auto">
							<a
								v-if="item.href"
								class="contato-link"
								:href="item.href"
								:target="item.external ? '_blank' : null"
								:rel="item.external ? 'noopener noreferrer' : null"
							>
								<div class="contato-icon">
									<font-awesome-icon :icon="item.icon" />
								</div>
								<div class="contato-decription">{{ item.label }}</div>
							</a>
							<div v-else class="contato-link">
								<div class="contato-icon">
									<font-awesome-icon :icon="item.icon" />
								</div>
								<div class="contato-decription">{{ item.label }}</div>
							</div>
							<button
								v-if="item.copy"
								type="button"
								class="copy-btn"
								@click="copy(item)"
							>
								<font-awesome-icon :icon="['fas', 'copy']" />
								{{ copied === item.id ? "Copiado" : "Copiar" }}
							</button>
						</div>
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
			copied: "",
			contacts: [
				{
					id: "cidade",
					label: "São Paulo, SP",
					icon: ["fas", "location-dot"]
				},
				{
					id: "telefone",
					label: "Telefone",
					href: "tel:5511992645586",
					copy: "+55 11 99264-5586",
					icon: ["fas", "phone"]
				},
				{
					id: "whatsapp",
					label: "Whatsapp",
					href: "https://wa.me/5511992645586",
					external: true,
					copy: "+55 11 99264-5586",
					icon: ["fab", "whatsapp"]
				},
				{
					id: "email",
					label: "Email",
					href: "mailto:wellington201197@gmail.com",
					copy: "wellington201197@gmail.com",
					icon: ["fas", "envelope"]
				},
				{
					id: "linkedin",
					label: "Linkedin",
					href: "https://www.linkedin.com/in/wellington-andrade-a9a10a143",
					external: true,
					copy: "https://www.linkedin.com/in/wellington-andrade-a9a10a143",
					icon: ["fab", "linkedin"]
				},
				{
					id: "github",
					label: "Github",
					href: "https://github.com/ton1397",
					external: true,
					copy: "https://github.com/ton1397",
					icon: ["fab", "github"]
				}
			]
		};
	},
	methods: {
		async copy(item) {
			try {
				await navigator.clipboard.writeText(item.copy);
			} catch (error) {
				const input = document.createElement("textarea");
				input.value = item.copy;
				document.body.appendChild(input);
				input.select();
				document.execCommand("copy");
				input.remove();
			}
			this.copied = item.id;
			this.$parent.notify(item.label + " copiado");
		}
	}
};
</script>

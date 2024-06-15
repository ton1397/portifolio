<template>
	<div id="typing">
		<div class="typing-container" v-html="typedCode"></div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		code: `
			<h1>
				Olá, seja bem-vindo!<br>
				Eu sou Wellington Andrade
				<br><br>
				Trabalho com Desenvolvimento de softwares

			</h1>
		`,
		typedCode: "",
		currentIndex: 0,
		tempStore: "",
		inTag: false,
	  };
	},
	mounted() {
	  this.typeCode();
	},
	methods: {
	  typeCode() {
		if (this.currentIndex < this.code.length) {
        const currentChar = this.code.charAt(this.currentIndex);
        
        if (currentChar === '<') {
          this.inTag = true;
        }

        if (this.inTag) {
          this.tempStore += currentChar;
          if (currentChar === '>') {
            this.inTag = false;
            this.typedCode += this.tempStore;
            this.tempStore = "";
          }
        } else {
          this.typedCode += currentChar;
        }

        this.currentIndex++;
        setTimeout(this.typeCode, 100); // Ajuste a velocidade da digitação aqui
      }
	}
	},
  };
  </script>
  
  <style>
  .typing-container {
	padding: 20px;
	box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .code {
	font-family: 'Courier New', Courier, monospace;
	white-space: pre-wrap;
	word-wrap: break-word;
  }
  </style>
  
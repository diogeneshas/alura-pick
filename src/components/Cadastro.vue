<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model="foto.titulo">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url">
        <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from './ImagemResponsiva.vue'
import Botao from './Botao.vue';
import Foto from '../domain/foto/Foto'

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data() {
    return {
      foto: new Foto()
    }
  },

  methods: {
    grava() {

      // Usando resource
      this.resource.save(this.foto)
      .then(() => this.foto = new Foto(), err => console.log(err))

      // Usando $http
      // this.$http.post('v1/fotos', this.foto)
      // .then(() => this.foto = new Foto(), err => console.log(err))
    }
  },

  created() {
    this.resource = this.$resource('v1/fotos')
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>
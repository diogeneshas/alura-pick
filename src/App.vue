<template>
  <div id="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="filtre por parte do titulo" @input="filtro = $event.target.value">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="(foto, index) of fotosComFiltro" :key="index">
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/Painel.vue'

export default {
  components: {
    'meu-painel': Painel
  },
  name: 'App',
  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err))
  }
}
</script>

<style>
 .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>

<template>
  <div id="app">
    <img class="graphql-title" src="./assets/graphql.png">
    <div id="app-content">
      <AddFilmForm class="app-row"/>
      <ListFilm class="app-row"/>
    </div>
  </div>
</template>

<script>
  import AddFilmForm from './components/AddFilmForm.vue';
  import ListFilm from './components/ListFilm.vue';


  export default {
    name: 'app',
    components: {
      AddFilmForm,
      ListFilm
    }
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
  }
  .graphql-title {
    width: 500px;
    margin: 0 auto 50px auto;
  }
  #app-content {
    display: flex;
    flex-direction: row;
    max-width: 900px;
    margin: auto;
  }
  .app-row {
    flex: 1;
  }
</style>

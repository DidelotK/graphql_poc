<template>
  <div id="list-film">
    <md-table>
      <md-table-row>
        <md-table-head>Title</md-table-head>
        <md-table-head>Director</md-table-head>
      </md-table-row>

      <md-table-row v-for="(film, key, index) in films" :key="index">
        <md-table-cell>{{ film.title }}</md-table-cell>
        <md-table-cell>{{ film.director }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  import { GET_FILMS } from '../constants/graphql';


  export default {
    name: 'ListFilm',
    apollo : {
      films: GET_FILMS
    }
  }
</script>

<style scoped>
  #list-film {
    margin: 0 30px;
  }
</style>
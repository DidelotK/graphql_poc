<template>
  <div>
    <form novalidate class="center form" @submit.prevent="validateFilm">
      <div class="md-title">Add a film</div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('title')">
            <label for="title">Title</label>
            <md-input name="title" id="title" v-model="form.title" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.title.required">The title is required</span>
          </md-field>
        </div>

        <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('director')">
            <label for="director">Director</label>
            <md-input name="director" id="director" v-model="form.director" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.director.required">The director is required</span>
          </md-field>
        </div>
      </div>

      <md-button type="submit" class="md-primary" :disabled="sending">Create film</md-button>

      <md-snackbar v-if="filmSaved" :md-active.sync="filmSaved">
        The film {{ lastFilm.title }} realised by {{ lastFilm.director }} was saved with success!
      </md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required } from 'vuelidate/lib/validators';
  import { ADD_FILM, GET_FILMS } from '../constants/graphql';


  export default {
    name: 'AddFilmForm',
    mixins: [validationMixin],
    data: () => ({
      form: {
        title: null,
        director: null
      },
      filmSaved: false,
      sending: false,
      lastFilm: null,
      error: null
    }),
    validations: {
      form: {
        title: {
          required
        },
        director: {
          required
        },
      }
    },
    methods: {
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName];

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          };
        }
      },
      clearForm() {
        this.$v.$reset();
        this.form.title = null;
        this.form.director = null;
      },
      async saveFilm() {
        this.sending = true;

        try {
          await this.$apollo.mutate({
            mutation: ADD_FILM,
            variables: {
              title: this.form.title,
              director: this.form.director
            },
            update: (store) => {
              const data = store.readQuery({
                query: GET_FILMS
              });

              data.films.push({
                title: this.form.title,
                director: this.form.director,
                __typename: "Film"
              });
              store.writeQuery({ query: GET_FILMS, data });
            }
          });

          this.lastFilm = {
            title: this.form.title,
            director: this.form.director
          };
          this.filmSaved = true;
          this.error = null;
          this.clearForm();

        } catch (e) {
          this.error = 'Failed to create film';
        }

        this.sending = false;
      },
      validateFilm() {
        this.$v.$touch();

        if (!this.$v.$invalid) {
          this.saveFilm();
        }
      }
    }
  };
</script>

<style scoped>
  .center {
    margin: 0 auto;
  }
  .form {
    width: 400px;
  }
</style>
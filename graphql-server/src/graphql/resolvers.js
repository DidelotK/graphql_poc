import models from '../models/index';

export default {
  Query: {
    books: async (obj, args) => {
      await models.books.sync();
      return await models.books.findAll({
        where: args
      });
    },
    films: async (obj, args) => {
      await models.films.sync();
      return await models.films.findAll({
        where: args
      });
    },
    multimedia: async () => {
      await Promise.all([models.books.sync(), models.films.sync()]);
      const resMultimedia = await Promise.all([models.books.findAll(), models.films.findAll()]);
      return [...resMultimedia[0], ...resMultimedia[1]];
    },
  },
  Mutation: {
    addBook: async (obj, { title, author }) => {
      try {
        await models.books.create({
          title,
          author
        });
        return 'Book created'
      } catch (err) {
        return `Error during book creation: ${err}`
      }
    },
    addFilm: async (obj, { title, director }) => {
      try {
        await models.films.create({
          title,
          director
        });
        return 'Film created'
      } catch (err) {
        return `Error during film creation: ${err}`
      }
    }
  },
  Multimedia: {
    __resolveType(obj, context, info) {
      return obj.dataValues.hasOwnProperty('author') ? 'Book' : 'Film';
    },
  },
};

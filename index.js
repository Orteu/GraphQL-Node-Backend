import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

const root = resolvers;
app.get('/', (req, res) => {
    res.send('Todo listo');
});

app.use('/graphql', graphqlHTTP({
    // Pasamos el schema que se usará
    schema,
    // Pasamos el resolver como rootValue
    rootValue: root,
    graphiql: true
}));

app.listen(5000, () => console.log('Server started and working'));
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo listo');
});

// Esto es el resolver de graphQL
const root = {hola: () => "_Hola desde graphQL"};

app.use('/graphql', graphqlHTTP({
    // Pasamos el schema que se usará
    schema,
    // Pasamos el resolver como rootValue
    rootValue: root,
    graphiql: true
}));

app.listen(5000, () => console.log('Server started and working'));
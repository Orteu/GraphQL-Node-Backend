import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo listo');
});

app.use('/graphql', graphqlHTTP({
    // Pasamos el schema que se usará
    schema,
    // Esto crea la interfaz GraphiQL en el puerto que asignamos
    graphiql: true
}));

app.listen(5000, () => console.log('Server started and working'));
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo listo');
});

class Customer {
    constructor(id, { name, surname, company, email }){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.company = company;
        this.email = email;
    }
}

const customerDB = {}

// Esto es el resolver de graphQL
const root = {
    customer: () => {
        return {
            "id": 125478522,
            "name": "Carlos",
            "surname": "Saiz Orteu",
            "company": "Wozzo",
            "email": "orteu@gmail.com"
        }
    },
    createCustomer: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        customerDB.id = input;
        return new Customer(id, input);

    }
};

app.use('/graphql', graphqlHTTP({
    // Pasamos el schema que se usará
    schema,
    // Pasamos el resolver como rootValue
    rootValue: root,
    graphiql: true
}));

app.listen(5000, () => console.log('Server started and working'));
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Customer {
        id: ID,
        name: String,
        surname: String,
        company: String,
        email: String
    }
    type Query {
        customer: Customer
    }
    input customerInput {
        id: ID,
        name: String,
        surname: String,
        company: String,
        email: String
    }
    type Mutation {
        createCustomer(input: customerInput) : Customer
    }
`);

export default schema;
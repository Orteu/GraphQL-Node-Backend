import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Customer {
        id: ID,
        name: String,
        surname: String,
        email: String,
        type: TypeAccount
        appointments: [Appointment]
    }
    type Appointment {
        day: String,
        time: String,
        company: String
    }
    enum TypeAccount {
        USER
        COMPANY
        ADMIN
    }
    type Query {
        getCustomer(id: ID): Customer
    }
    input AppointmentInput {
        day: String,
        time: String,
        company: String
    }
    input customerInput {
        id: ID,
        name: String,
        surname: String,
        email: String,
        type: TypeAccount
        appointments: [AppointmentInput]

    }
    type Mutation {
        createCustomer(input: customerInput) : Customer
    }
`);

export default schema;

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
const resolvers = {
    getCustomer: ({id}) => {
        return new Customer(id, customerDB[id]);
    },
    createCustomer: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        customerDB[id] = input;
        return new Customer(id, input);

    }
};

export default resolvers;

class Customer {
    constructor(id, { name, surname, email, type, appointments }){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.type = type;
        this.appointments = appointments;
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
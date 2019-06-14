import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/GraphQL', { useNewUrlParser: true });

// Define customer schema
const customersSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    type: String,
    appointments: Array
});

const Customers = mongoose.model('customers', customersSchema);

export { Customers };

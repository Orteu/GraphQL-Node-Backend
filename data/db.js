import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/GraphQL', { useNewUrlParser: true });

mongoose.set('setFindAndModify', false);

// Define customer schema
const customersSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    type: String,
    appointments: Array
});

const Customers = mongoose.model('customers', customersSchema);

// Define products schema
const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
});

const Products = mongoose.model('products', productsSchema);


// Define orders schema
const orderSchema = new mongoose.Schema({
    order: Array,
    totalPrice: Number,
    date: Date,
    customer: String,
    status: String

});

const Orders = mongoose.model('orders', orderSchema);

export { Customers, Products, Orders };

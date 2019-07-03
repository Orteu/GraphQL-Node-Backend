import mongoose from 'mongoose';
import { Customers, Products } from './db';


export const resolvers = {
    Query: {
        // Customer queries
        getAllCustomers: (root, {limit, offset}) => {
            return Customers.find({}).limit(limit).skip(offset);
        },
        getCustomerById: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Customers.findById(id)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
        totalCustomers: (root) => {
            return new Promise((resolve, reject) => {
                Customers.countDocuments()
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
        // Product queries
        getAllProducts: (root, {limit, offset}) => {
            return Products.find({}).limit(limit).skip(offset);
        },
        getProductById: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Products.findById(id)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
        totalProducts: (root) => {
            return new Promise((resolve, reject) => {
                Products.countDocuments()
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
    },
    Mutation: {
        // Customer mutations
        createCustomer: (root, {input}) => {
            const newCustomer = new Customers({
                name: input.name,
                surname: input.surname,
                email: input.email,
                type: input.type,
                appointments: input.appointments
            })

            newCustomer.id = newCustomer._id;

            return new Promise((resolve, reject) => {
                newCustomer.save()
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },

        updateCustomer: (root, { input }) => {
            return new Promise((resolve, reject) => {
                Customers.findOneAndUpdate({ _id: input.id }, input, { new: true })
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },

        removeCustomer: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Customers.findOneAndRemove({ _id: id })
                    .then(() => {
                        resolve("Customer removed succesfully!")
                    })  
                    .catch((error) => {
                        reject(error);
                    })
            });
        },

        // Product mutations
        createProduct: (root, {input}) => {
            const newProduct = new Products({
                name: input.name,
                price: input.price,
                stock: input.stock
            })

            newProduct.id = newProduct._id;

            return new Promise((resolve, reject) => {
                newProduct.save()
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
        updateProduct: (root, { input }) => {
            return new Promise((resolve, reject) => {
                Products.findOneAndUpdate({ _id: input.id }, input, { new: true })
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
        removeProduct: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Products.findOneAndRemove({ _id: id })
                    .then(() => {
                        resolve("Product removed succesfully!")
                    })  
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
    }
};

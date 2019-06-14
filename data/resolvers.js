import mongoose from 'mongoose';
import { Customers } from './db';


export const resolvers = {
    Query: {
        getCustomer: ({id}) => {
            return new Customer(id, customerDB[id]);
        },
    },
    Mutation: {
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
        }
    }
};

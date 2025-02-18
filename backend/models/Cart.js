
// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     items: [
//         {
//             product: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'Product',
//                 required: true
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//                 min: 1
//             }
//         }
//     ]
// });

// module.exports = mongoose.model('Cart', cartSchema);


const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            product: {
                _id: String,
                name: String,
                image: String,
                price: Number,
            },
            quantity: { type: Number, default: 1 },
        },
    ],
});

module.exports = mongoose.model('Cart', cartSchema);

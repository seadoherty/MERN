const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Must have Title"] 
    },
    price: { 
        type: Number,
        required: [true, "Must cost something"],
        min: [1, "has to be at least a dollar"] 
    },
    description: { 
        type: String,
        required: [true, "Must provide a description"],
        minlength: [10, "You can get more descriptive than that!"] 
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);
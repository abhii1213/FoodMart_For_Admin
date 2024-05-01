const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const FoodItem = mongoose.model('food_items', foodItemSchema);

module.exports = FoodItem;

//use this model for admin only to adding foods in the database
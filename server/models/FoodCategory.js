const mongoose = require('mongoose');

const foodCategorySchema = new mongoose.Schema({

    CategoryName: {
        type: String,
        required: true
    }
});

// const FoodCategory = mongoose.model('foodCategory', foodCategorySchema);
const FoodCategory = mongoose.model('foodCategories', foodCategorySchema);

module.exports = FoodCategory;
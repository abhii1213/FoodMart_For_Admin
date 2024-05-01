const mongoose = require("mongoose");
const FoodItem = require("../models/AddFood.js");
const FoodCategory = require("../models/FoodCategory.js");

exports.ViewCategoryController = async (req, res) => {
  try {
    const foodCategory = await FoodCategory.find({});
    return res.status(200).json({
      success: true,
      data: {
        foodCategories: foodCategory,
      },
    });
  } catch {
    console.error("Error fetching data:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching data",
      error: error,
    });
  }
};

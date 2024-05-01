const express = require("express");
const router = express.Router();
const {
//   AddFoodController,
//   ViewFoodController,
//   AddCategoryController,
  ViewCategoryController
} = require("../controllers/foodDataController.js");

// router.post("/addfood", AddFoodController);
// router.get("/viewfood", ViewFoodController);
// router.post("/addcategory", AddCategoryController);
router.get("/viewcategory", ViewCategoryController);

module.exports = router;

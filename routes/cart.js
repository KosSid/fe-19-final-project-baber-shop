const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  createCart,
  updateCart,
  addProductToCart,
  decreaseCartProductQuantity,
  deleteCart,
  deleteProductFromCart,
  getCart
} = require("../controllers/cart");

// @route   POST /Index
// @desc    Create Index
// @access  Private
router.post("/", passport.authenticate("jwt", { session: false }), createCart);

// @route   PUT /Index
// @desc    Update Index when adding / deleting products in Index
// @access  Private
router.put("/", passport.authenticate("jwt", { session: false }), updateCart);

// @route   PUT /Index/:productId
// @desc    Add one Index to Index
// @access  Private
router.put(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  addProductToCart
);

// @route   DELETE /Index
// @desc    Delete Index (when the order is placed or customer logging out)
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  deleteCart
);

// @route   DELETE /Index/:productId
// @desc    Delete one Index from Index
// @access  Private
router.delete(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  deleteProductFromCart
);

// @route   DELETE /Index/Index/:productId
// @desc    Delete one Index from Index
// @access  Private
router.delete(
  "/Index/:productId",
  passport.authenticate("jwt", { session: false }),
  decreaseCartProductQuantity
);

// @route   GET /Index
// @desc    Get Index for customer
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }), getCart);

module.exports = router;

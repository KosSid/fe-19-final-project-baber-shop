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

// @route   POST /Cart
// @desc    Create Cart
// @access  Private
router.post("/", passport.authenticate("jwt", { session: false }), createCart);

// @route   PUT /Cart
// @desc    Update Cart when adding / deleting products in Cart
// @access  Private
router.put("/", passport.authenticate("jwt", { session: false }), updateCart);

// @route   PUT /Cart/:productId
// @desc    Add one Product to Cart
// @access  Private
router.put(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  addProductToCart
);

// @route   DELETE /Cart
// @desc    Delete Cart (when the order is placed or customer logging out)
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  deleteCart
);

// @route   DELETE /Cart/:productId
// @desc    Delete one Product from Cart
// @access  Private
router.delete(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  deleteProductFromCart
);

// @route   DELETE /Cart/Product/:productId
// @desc    Delete one Product from Cart
// @access  Private
router.delete(
  "/Product/:productId",
  passport.authenticate("jwt", { session: false }),
  decreaseCartProductQuantity
);

// @route   GET /Cart
// @desc    Get Cart for customer
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }), getCart);

module.exports = router;

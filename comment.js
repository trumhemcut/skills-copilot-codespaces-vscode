// create a web server using express
// import express
const express = require("express");
// create a router
const router = express.Router();
// import the commentController
const commentController = require("../controllers/commentController");
// import the authController
const authController = require("../controllers/authController");

// create a comment
router.post(
  "/",
  authController.protect,
  authController.restrictTo("user"),
  commentController.createComment
);

// get all comments
router.get("/", commentController.getAllComments);

// get a comment
router.get("/:id", commentController.getComment);

// update a comment
router.patch("/:id", commentController.updateComment);

// delete a comment
router.delete("/:id", commentController.deleteComment);

// export the router
module.exports = router;

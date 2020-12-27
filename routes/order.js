const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getUserById,pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");

const {getOrderById,createOrder,getAllOrder,updateStatus,getOrderStatus} = require("../controllers/order");

//params
router.get("userId",getUserById);
router.get("orderId",getOrderById);

//actual routes
router.post("/order/create/:userId"
,isSignedIn
,isAuthenticated
,pushOrderInPurchaseList
,updateStock
,createOrder);

//get orders
router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrder);

router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus);
router.put("/order/:orderId/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus);

module.exports = router;

const controller = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/api/getall", controller.findAll);
router.get("/api/user/:id", controller.findOne);
router.put("/api/user/:id", controller.update);
router.post("/api/user", controller.create);
router.delete("/api/user/:id", controller.delete);

module.exports = router;

// // const {
// //   authJwt
// // } = require("../middleware");
// const controller = require("../controllers/user.controller");
// module.exports = function (app) {
//   app.use(function (req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });
 
//   app.get("/api/user", controller.findbyQuery);
//   app.get("/api/user/:id", controller.findOne);
//   app.put("/api/user/:id", controller.update);
//   app.post("/api/user", controller.create);
//   app.delete("/api/user/:id", controller.delete); 
// };
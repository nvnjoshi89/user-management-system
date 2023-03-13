const express = require("express");
// we are not gonna creat const app =express() because this statement will create a new app.
// Instead of creating new app we will gonna call method of express which is Router() this method allows us to create different router in a separate file
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/**
 * @description Root ROute
 * @method GET/
 */
// '/' is route path and we are gonna call the function services.homeRoutes when the route is matched
route.get("/", services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */
route.get("/add-user", services.add_user);

/**
 * @description Root ROute
 * @method GET /update-user
 */
route.get("/update-user", services.update_user);

// API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;

import express from "express";
import { getAllWebpage, createWebpage, deleteWebpage, detailWebpage, updateWebpage } from "../controllers/webpageController.js";


const webpageRoute = express.Router();
webpageRoute.get("/webpages", getAllWebpage);
// create a Webpage
webpageRoute.post("/webpages/create", createWebpage); 

// delete a Webpage
webpageRoute.delete("/webpages/delete/:id", deleteWebpage);

// single Webpage
webpageRoute.get("/webpages/:id", detailWebpage);

// update Webpage
webpageRoute.patch("/webpages/update/:id", updateWebpage);

export default webpageRoute;

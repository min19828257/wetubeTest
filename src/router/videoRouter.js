import express from "express";
import {upload, see , edit, deleteVideo} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
// videoRouter.get("/:id", see);
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
import express from "express";
import {upload, watch , getEdit, postEdit, deleteVideo} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
// videoRouter.get("/:id", watch);
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
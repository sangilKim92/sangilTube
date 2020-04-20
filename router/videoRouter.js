import express from 'express';
import route from '../route';
import { postUpload, getUpload, edit_video, video, video_detail, delete_video} from '../controller/mainController';
import { uploadVideo } from '../middleware';

const videoRouter = express.Router();

videoRouter.get(route.video, video);

videoRouter.get(route.upload, getUpload);
videoRouter.post(route.upload, uploadVideo, postUpload);

videoRouter.get(route.video_detail(), video_detail);
videoRouter.get(route.edit_video, edit_video);


videoRouter.get(route.delete_video, delete_video);

export default videoRouter;
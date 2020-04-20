import express from 'express';
import route from '../route';
import { user_detail, change_password ,edit_profile} from '../controller/mainController';

const userRouter = express.Router();

userRouter.get(route.edit_profile, edit_profile);
userRouter.get(route.user_detail(), user_detail);
userRouter.get(route.change_password, change_password )

export default userRouter;
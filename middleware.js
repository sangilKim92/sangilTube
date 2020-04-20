import route from './route';
import multer from 'multer';

const multerVideo=multer({dest:"uploads/videos/"});


export const localMiddleware =  (req, res , next) =>{
    res.locals.route = route;
    res.locals.user={
        isAuthenticated : true,
        id: 1
    }
    next();
}//자주사용할것같은 단어를 전역변수로 바꿔 view에서 사용가능하게 한다.

export const uploadVideo= multerVideo.single("videoFile");
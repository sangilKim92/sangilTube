const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

//////

const USER = "/user";
const EDIT_PROFILE = '/edit_profile';
const USER_DETAIL = "/:id";
const CHANGE_PASSWORD = '/:id/change_password';
const BROADCASTING = "/:id/broadcasting"

//////////

const VIDEO = '/video';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const UPLOAD = "/upload";
const DELETE_VIDEO = "/:id/delete";

const route={
    home:HOME,
    join :JOIN,
    login :LOGIN,
    logout: LOGOUT,
    search : SEARCH,
    user :USER,
    user_detail :(id)=>{
        if(id){
            return '/user/${id}';
        }else{
            return USER_DETAIL;
        }
    },
    edit_profile : EDIT_PROFILE,
    change_password : CHANGE_PASSWORD,
    video : VIDEO,
    video_detail: id =>{
        if(id){
            return `/video/${id}`;
        }else{
            console.log("여기??");
            return HOME;
        }
    },
    edit_video: EDIT_VIDEO,
    upload: UPLOAD,
    delete_video : DELETE_VIDEO,
    broadcasting: BROADCASTING
}

export default route;
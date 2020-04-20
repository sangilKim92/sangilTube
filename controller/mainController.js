import route from '../route';
import Video from '../models/Video';

//MVC 패턴의 controller 부분
export const getJoin = (req,res) =>{ 
    res.render("join");
}
export const postJoin = (req, res) =>{
    const {
        body:{name, email, pwd, pwd2}
    } =req;
    if(pwd!==pwd2){
        res.status(400);
        console.log("입력한 비밀번호가 서로 다릅니다");
        res.render("join");
    }else{
        res.redirect(route.home);
    }
}
export const search = (req,res) =>{
    const {query:{term}} =req; //es6기술
    res.render("search" ,{searching:term ,video}); //searching이라는 변수에 검색한 term을 넣는다.
}
export const login = (req,res) => 
{
    res.render("login");
}
export const postLogin = (req, res) =>
{
    const {body:{}}=req;
    res.render("login");
}
export const logout = (req, res)=>
{
    res.render("logout");
}
export const user = (req, res) =>
{
 res.render("user");
}    
export const home = async (req, res) =>{
    try{
        const video= await Video.find({});  //홈에 저장된 동영상을 보여주어야 한다.
        res.render("home" ,{pageTitle:"Home", video});
    }catch(error){
        console.log(error);
        res.render("home", {pageTitle: "Home", video:[]})
    }

}
export const user_detail = (req, res) => {
    res.render("user_detail");
}
export const edit_profile = (req,res) => {
    res.render("edit_profile");
}
export const change_password = (req, res) => {
    res.render("change_password");
}


export const video = (req, res) =>{
    res.render("video");
}

export const video_detail = (req, res) =>{
    res.render("video_detail");
 }
 
export const edit_video = (req, res) =>{
    res.render("edit_video");
}
 
export const getUpload = (req, res) =>{

    res.render("upload");
}

export const postUpload = async (req, res) => {
  const {
    body
  }=req;
  console.log(body);
 
  res.render("upload");
};

export const delete_video = (req, res) =>{
    res.render("delete_video");
}
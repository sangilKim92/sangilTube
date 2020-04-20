import express from 'express'; //웹 프레임워크
import morgan from 'morgan'; //다른사람의 api를 사용하게 해줌
import helmet from 'helmet'; //보안용도
import cookieParser from 'cookie-parser'; //session을 다루기 위한 cookie parser
import bodyParser from 'body-parser'; //web에서 form의 object을 받기 위한 body parser
import router from './router/router';  //main 메소드 라우팅 설정
import videoRouter from './router/videoRouter'; //video 메소드 라우팅 설정
import userRouter from './router/userRouter'; //user메소드 라우팅 설정
import route from './route'; //위치 설정 변수 만드는 곳
import {localMiddleware} from './middleware';


const app= express();

app.use(morgan('tiny')); //여기다가 middleware를 두면 아래 모든 route에 middleware 가 실행된다. morgan이 다 기록한다.
app.set("view engine", "pug");
app.use(helmet());//helmet은 보안을 위해서 두는 습관
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(localMiddleware);


app.use(route.home, router); //미들웨어에 라우터 설정                 route.home = '/' route.user = '/user' route.video = '/video'
app.use(route.user, userRouter); //use는 여기에 누가 접근할때 모든 router를 사용하겠다는 의미 미들웨어같이 적용
app.use(route.video, videoRouter);  //비디오와 관련된 것들은 다 여기

export default app;
import app from './app';
import "./db";

const PORT = 4000;

const handleListening = () =>{
    const result=`result is ${PORT}`;
    console.log(`Listening on : https://localhost: ${PORT}`+result); //' " 가 아니라 `을 쓴다 es6에선
}
app.listen(PORT,handleListening);
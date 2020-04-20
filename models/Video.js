import mongoose, { Model } from 'mongoose';

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        reuqired: "File URL is required"
    },
    title:{
        type: String,
        required: "title is required"
    },
    description:String,
    views:{
        type: Number,
        default:0,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    Comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment" //어디에서 온 모델인지 확인
        }
    ]
 
});

const model = mongoose.model("Video", VideoSchema);

export default model;
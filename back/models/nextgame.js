import mongoose from 'mongoose';

const nextgameSchema = new mongoose.Schema({
    team:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },
    time:{
        required:true,
        type:Number
    },
    imageUrl: String,
});

export default mongoose.model('nextgame', nextgameSchema);
import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    number:{
        required:true,
        type:Number
    },
    imageUrl: String,
    category: String
});

export default mongoose.model('player', playerSchema);
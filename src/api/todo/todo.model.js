import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Todo name is required!'] },
    user: { default: null, type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { default: null, type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
},{ timestamps: true });



export default mongoose.model('Todo', TodoSchema);
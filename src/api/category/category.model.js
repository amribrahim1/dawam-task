import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Category name is required!'] },
},{ timestamps: true });



export default mongoose.model('Category', CategorySchema);
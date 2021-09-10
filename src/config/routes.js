import userApi from '../api/user';
import categoryApi from '../api/category';
import todoApi from '../api/todo';

export default app => {
    app.use('/api', userApi);
    app.use('/api', categoryApi);
    app.use('/api', todoApi);
}
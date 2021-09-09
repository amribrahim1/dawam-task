import userApi from '../api/user';

export default app => {
    app.use('/api', userApi);
}
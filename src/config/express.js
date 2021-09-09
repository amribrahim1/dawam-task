// import { auth } from './Util';
import cors from 'cors';

export default app => {
    app.use(cors())
    // app.use(auth)
};

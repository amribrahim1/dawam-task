export const config = {
    db: 'mongodb://127.0.0.1:27017/tracllo?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    apiPort: process.env.PORT || 4000
};
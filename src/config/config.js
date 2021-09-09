export const config = {
    db: 'mongodb://localhost:27017/dawam?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    apiPort: process.env.PORT || 4000
};
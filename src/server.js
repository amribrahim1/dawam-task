import express from 'express';
import mongoose from 'mongoose';

import expressConfig from './config/express';
import { config } from './config/config';
import routesConfig from './config/routes';

class Server {
    constructor() {
        this.app = express();
        this.config = config;
        this.init();
    }
  
    init() {  
        expressConfig(this.app);

        this.app.options("/*", function(req, res, next){
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
            res.send(200);
        });

        mongoose.connect(
            this.config.db,
            err => {
                if (err) {
                    console.log(`[MongoDB] Failed to connect. ${err}`);
                } else {
                    console.log(`[MongoDB] connected: ${this.config.db}`);
        
                    // initialize api
                    routesConfig(this.app);
        
                    // start server
                    this.app.listen(this.config.apiPort, () => {
                        console.log(`[Server] listening on port ${this.config.apiPort}`);
                    });
                }
            }
        );;
    }
}

const server=new Server().app;
module.exports = server
export default server;
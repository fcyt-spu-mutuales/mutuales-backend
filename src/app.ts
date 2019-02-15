import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { createConnection } from "typeorm";
const path = require('path')
const config = require(path.join(__dirname, '../ormconfig.js'))

// creates express app, registers all controller routes and returns you express app instance

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection(config)
  .then(async connection => {
    const app = createExpressServer({
      routePrefix: "/api",
      controllers: [__dirname + "/controllers/*.ts"]
    });

    // run express application on port 3000
    app.listen(8000);
  })
  .catch(error => console.log("TypeORM connection error: ", error));
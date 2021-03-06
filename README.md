# Mutuales SPU - Backend

The implementation of a NodeJS - Typescript - PostreSQL application, written in
*   Javascript
*   Typescript
*   PostreSQL
*   TypeORM
*   Express

## Getting Started

For this application to work you need NodeJS, please use NVM!

### Prerequisites

You can run this application in any OS, it just need NodeJS and MongoDB to start.

### Installing

Fist install NodeJS (version 10 or above), preferably use NVM, download then from here:

* [Windows](https://github.com/coreybutler/nvm-windows) - Download NVM for Windows

* [Linux](https://github.com/creationix/nvm) - Download NVM for Linux

After installing NVM, install node:

```
nvm install 10
```

Then install typescript and node support globally

```
npm install -g ts-node typescript

```

After that install all the dependencies

```
npm install
```

And finally you can run the application with

```
npm run dev
```

Finally you must create an .env file located on the project root directory, with the variables to connect to the database
```
NODE_ENV=development
PG_USER=mutuales
PG_PASSWORD=mutualesFCYT
PG_DATABASE=mutuales
PG_HOSTNAME=localhost
PG_PORT=5432
```

## Running the tests

To be defined

### Break down into end to end tests

To be defined

### Coding style

To develop this application we are using AirBnB Coding style (https://github.com/airbnb/javascript) 

### Devops Stuff

We will use docker and docker compose to deploy our application, for this to work, first install docker (https://www.docker.com/products/docker-desktop)

And then docker compose: (https://docs.docker.com/compose/install/)

To startup the database, execute:

```
docker-compose up
```



## Deployment

To deploy this application, we use docker to build or image:

```
docker image build -t mutuales-spu
```

And run the image with

```
docker run -p 3000:3000 mutuales-spu
```

## Built With

* [NodeJS](http://nodejs.org/) - As our main platform
* [Express](https://expressjs.com/) - Our route / api middleware to handle request
* [TypeScript](https://www.typescriptlang.org/) - A supercharged tool to use with Javascript
* [Postgresql](https://www.postgresql.com/) - A SQL database to store our data
* [TypeORM](https://github.com/typeorm/typeorm/) - An Object Relational Mapper (ORM)


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 
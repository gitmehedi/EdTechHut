# EdTechHut
Educational Hub for New Generation Students


## Introduction


## Installation
Express application is lots of dependencies for several features like database, backend, and other related tools. Here we are going some initial features that
- Nodejs 
- Express.js 
- PostgreSQL Client
- Knex
- HTML Parser

We will install and go through all those dependencies

### Initialize a Node.js Application
`npm init` will create a file name `package.json` for storing metadata information about the project with starting script file like `server js`.
```bash
$ npm init
```
> After initialize a node.js application you can add `npm` packages to implement several features

### Add [`express.js`](https://www.npmjs.com/package/express) package in project
`express.js` is used for backend feature development. It includes all the web development functionalities that needed for web applicaiton. 
```bash
$ npm install express --save
```
It will add `express` package in `package.json` as dependencies and download all the dependencies in `node_modules` folder and list dependencies in `package-lock.json` file.

### Add [`body-parser`](https://www.npmjs.com/package/body-parser) package to project
Node.js body parsing middleware.

```bash
$ npm install body-parser --save
```

### Add [`pg`](https://www.npmjs.com/package/pg) package to project
Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
```bash
$ npm install pg --save
```
### Add [`knex`](https://www.npmjs.com/package/knex) package to project
A batteries-included, multi-dialect (PostgreSQL, MySQL, CockroachDB, MSSQL, SQLite3, Oracle (including Oracle Wallet Authentication)) query builder for Node.js.

```bash
$ npm install knex --save
```

## References

### Projects
- https://github.com/robmclarty/knex-express-project-sample

### Documentation
- https://vsvaibhav2016.medium.com/create-crud-application-in-express-js-9b88a5a94299
- https://blog.vanila.io/setup-basic-server-with-express-framework-37b2ec749a6d
- https://knexjs.org/






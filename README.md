# Example Sequelize ORM using Express JS

[**Express JS**](https://expressjs.com/)  or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

[**Sequelize ORM**](https://sequelize.org/) Sequelize is a promise-based Node. js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. Its features are solid transaction support, relations, eager and lazy loading, read replication and many more.

## Getting Started

### 1. How to clone and run this Repository

- make sure the node JS is installed
- clone this repo as well as it must be
- Run `npm install` on your terminal
- copy file config.example.json with "config.json" (keep in the same directory) and adjust your own Database setting inside it
- be prepared for the Database according to "config.json" (development object)
- Run `sequelize db:migrate` on your terminal (if you wanna copy the Database structure)
- Run `npm run dev` on your terminal (to run server)

### 2. Express installlation steps

- npm init –y
- npm install express

Referensi: [Learn Express from scratch](https://expressjs.com/en/starter/installing.html)

### 3. Sequelize steps

- npm install --save sequelize mysql2 (or you can use another RDBMS)
- npm install -g sequelize-cli
- sequelize init

![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# CheckUP Health

## Description

_Duration: 2 Week Sprint_

CheckUP Health aims to provide users with a few things.  First is the ability to track their feelings/symtoms/medications etc so that those vital details can be easily recalled during healthcare facility visits.  

Second is the ability to have the most recent worldwide data for COVID-19 available at their fingertips.  Cases, deaths, and recoveries for all countries are presented to the user and are able to be updated depending on country selected.

And lastly is the ability to use a chatbot to perform a COVID-19 screening test on the user, to help determine whether quartantine is advised, or seeking out professional healthcare advice is needed to further conclude testing.


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Local Development

1. Create a database named `your database name` and run the following queries.
2. `CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (120) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (1000) UNIQUE NOT NULL
);

`CREATE TABLE "feedback"`
(
    "id" serial primary key,
    "feeling" INT not null,
    "understanding" INT not null,
    "support" INT not null,
    "comments" text,
    "flagged" boolean default false,
    "date" date not null default CURRENT_DATE
);
3. Open up your editor of choice and run an `npm install`.
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal.
6. The `npm run client` command will open up a new browser tab for you!


## Built With

React
Redux
Redux-Saga
Node
PostgreSQL


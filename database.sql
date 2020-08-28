CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "feedback"
(
    "id" serial primary key,
    "feeling" INT not null,
    "understanding" INT not null,
    "support" INT not null,
    "comments" text,
    "flagged" boolean default false,
    "date" date not null default CURRENT_DATE
);
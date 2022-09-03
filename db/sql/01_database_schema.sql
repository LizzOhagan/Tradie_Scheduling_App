CREATE DATABASE keepTradingSchedule;

CREATE TABLE client_details (
    id SERIAL PRIMARY KEY,
    first_name text,
    last_name text,
    phone varchar,
    address varchar,
    email varchar(100)
);

CREATE TYPE status AS ENUM ('Scheduled', 'Active', 'Invoicing', 'To be priced', 'Completed');

CREATE TABLE job_status (
    id SERIAL PRIMARY KEY,
    type status
);

CREATE TABLE job (
    id SERIAL PRIMARY KEY,
    date_created datetime,
    client_id int REFERENCES client_details(id),
    status_id int REFERENCES job_status(id),
    quote money,
    job_scope varchar
);
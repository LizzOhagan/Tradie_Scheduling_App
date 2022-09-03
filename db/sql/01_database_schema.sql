CREATE TABLE client_details (
    id SERIAL PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    phone varchar(50),
    address varchar(400),
    email varchar(100)
);

CREATE TYPE status AS ENUM ('Scheduled', 'Active', 'Invoicing', 'To be priced', 'Completed');

CREATE TABLE job_status (
    id SERIAL PRIMARY KEY,
    type status
);

CREATE TABLE job (
    id SERIAL PRIMARY KEY,
    type TIMESTAMP,
    client_id int REFERENCES client_details(id),
    status_id int REFERENCES job_status(id),
    quote money default NULL,
    job_scope varchar default NULL
);
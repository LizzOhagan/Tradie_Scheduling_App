const db = require("../db");

const getAllJobsSQL = `SELECT
j.id,
j.date_created AS "dateCreated",
cd.first_name AS "firstName",
cd.last_name AS "lastName",
cd.phone,
cd.address,
cd.email,
js.type AS status,
j.quote,
j.job_scope AS "jobScope"
FROM job j
LEFT JOIN job_status js ON j.status_id = js.id
JOIN client_details cd ON j.client_id = cd.id
ORDER BY
j.id`;

const getJobByIdSQL = `SELECT 
j.id, 
j.date_created AS "dateCreated", 
cd.first_name AS "firstName", 
cd.last_name AS "lastName", 
cd.phone, cd.address, 
cd.email, 
js.type AS status, 
j.quote, 
j.job_scope AS "jobScope" 
FROM job j 
LEFT JOIN job_status js ON j.status_id = js.id 
JOIN client_details cd ON j.client_id = cd.id 
WHERE j.id = $1`;

const getJobsByStatusSQL = `SELECT 
j.id, 
j.date_created AS "dateCreated", 
cd.first_name AS "firstName", 
cd.last_name AS "lastName", 
cd.phone, cd.address, 
cd.email, 
js.type AS status, 
j.quote, 
j.job_scope AS "jobScope" 
FROM job j 
LEFT JOIN job_status js ON j.status_id = js.id 
JOIN client_details cd ON j.client_id = cd.id
WHERE type = $1
ORDER BY j.id`;

const updateJobSQL = `UPDATE job 
SET 
quote = $1,
job_scope = $2,
status_id = $3

WHERE id = $4 

RETURNING *`;

module.exports = {
  getJobs: async () => {
    try {
      const result = await db.query(getAllJobsSQL);
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },

  getJobById: async (id) => {
    try {
      const { rows } = await db.query(getJobByIdSQL, [id]);
      return rows[0];
    } catch (error) {
      throw Error(error.message);
    }
  },

  getJobsByStatus: async (status) => {
    console.log(status);
    const statusToUppercase = `${status[0].toUpperCase()}${status
      .slice(1)
      .toLowerCase()}`;
    try {
      const result = await db.query(getJobsByStatusSQL, [statusToUppercase]);
      return result.rows;
    } catch (error) {
      throw Error(error.message);
    }
  },

  updateJob: async (quote, job_scope, status_id, id) => {
    try {
      const { rows } = await db.query(updateJobSQL, [
        quote,
        job_scope,
        status_id,
        id,
      ]);
      // console.log(quote, id);
      // console.log(rows);

      return rows[0];
    } catch (error) {
      throw Error(error);
    }
  },
};

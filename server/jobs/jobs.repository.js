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
      const { rows } = await db.query(
        `SELECT 
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
        WHERE j.id = $1`,
        [id]
      );
      return rows[0];
    } catch (error) {
      throw Error(error.message);
    }
  },

  updateJobClientDetails: async (
    firstName,
    lastName,
    phone,
    address,
    email,
    id
  ) => {
    try {
      const { rows } = await db.query(
        `UPDATE client_details 
        SET first_name=$1,
        last_name=$2,
        phone=$3,
        address=$4,
        email=$5
        WHERE id=$6, 
        `[(firstName, lastName, phone, address, email, id)]
      );
      return rows[0];
    } catch (error) {
      throw Error(error);
    }
  },

  getJobsByStatus: async (status) => {
    try {
      const result = await db.query(
        `SELECT 
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
        WHERE type = '$1'`,
        [status]
      );
      return result.rows;
    } catch (error) {
      throw Error(error.message);
    }
  },
};

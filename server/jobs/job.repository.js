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
};

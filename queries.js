const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '130.211.227.86',
  database: 'postgres',
  password: 'hackathon@1',
  port: 5432,
})


const getTechLogs = (request, response) => {
  pool.query('select te.tech_name,tt.job_id,tt.start_time,tt.on_my_way_call,tt.job_status,tt.end_time from tbl_tech_logs tt,tbl_technician te where te.tech_id=tt.tech_id', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


// const getEmpAwards = (request, response) => {
//   pool.query('SELECT e.emp_id, e.emp_name, e.recognition_times FROM tbl_emp e, tbl_recognition rt WHERE rt.recognition_id = e.recognition_id', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }


// const createAwards = (request, response) => {
  
//   const { recognition_id, recognition_category } = request.body
//  // response =['8','tstapi']

//   pool.query('INSERT INTO tbl_recognition1 (recognition_id, recognition_category) VALUES ($1, $2) RETURNING *', [recognition_id, recognition_category], (error, results) => {
//     if (error) {
//       console.log('recognition_id ' || $1)
//       console.log('recognition_category ' || $2)
//       throw error
//     } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
//     //  console.log('recognition_id ' || recognition_id)
//     	throw error
//     }
//     response.status(201).send(`Awards added with ID: ${results.rows[0].$1}`)
//   })
// }

// /*const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       } 
//       if (typeof results.rows == 'undefined') {
//       	response.status(404).send(`Resource not found`);
//       } else if (Array.isArray(results.rows) && results.rows.length < 1) {
//       	response.status(404).send(`User not found`);
//       } else {
//   	 	  response.status(200).send(`User modified with ID: ${results.rows[0].id}`)         	
//       }
      
//     }
//   )
// }*/

// /*const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }*/

module.exports = {
 getTechLogs
}

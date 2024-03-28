const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "recipeguru",
  password: "lol",
  port: 5432,
});


async function getData(){
    const { rows } = await pool.query(`SELECT * FROM ingredients`);
    console.log(rows);

}

getData();
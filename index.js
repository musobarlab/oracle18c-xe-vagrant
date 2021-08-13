const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const password = '12345'  // set mypw to the hr schema password

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection( {
      user          : "wury",
      password      : password,
      connectString : "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = host.docker.internal)(PORT = 1521))(CONNECT_DATA =(SID= XE)))"
    });

    const result = await connection.execute(`select * from dual`);
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();
'use strict';

let pool;

let db = {};

db.query = ({ query, vals }) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if(err) reject(err);
      conn.query(query, vals, (err, rows) => {
        conn.release();
        if(err) reject(err);
        else resolve(rows);
      });
    });
  });
}

db.resolveBuffers = (result) => {
  var resolve = (obj) => {
    for(var key in obj) {
      if(Buffer.isBuffer(obj[key])) obj[key] = obj[key].toString();
    }
    return obj;
  }

  if(Array.isArray(result)) {
    for(var i in result) {
      result[i] = resolve(result[i]);
    }
    return result;
  } else return resolve(obj);
 };

module.exports = (sqlPool) => {
  if(!sqlPool){
    throw new Error('Invalid or missing SQL Configuration');
  }

  pool = sqlPool;
  return db;
};
/**
 * DB初始化脚本
 */

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// db名字
const DB_NAME = "demo.db";

// 创建并连接一个数据库
const dbpath = path.join(__dirname, DB_NAME);
const db = new sqlite3.Database(dbpath);

// 创建表
db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS todo
    (id TEXT primary key,value TEXT,state TEXT)
   `;
  db.run(sql);
});

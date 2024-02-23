import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "path";
import sqlite3 from "sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 获取数据库连接
const getDbConnection = () => {
  // 数据库文件路径
  const dbName = "demo.db";
  const dbPath = path.resolve(__dirname, `../../db/${dbName}`);

  // 创建数据库连接
  return new sqlite3.Database(dbPath);
};

// 查询数据库，返回一个 Promise 对象
const query = (sql, param) => {
  return new Promise((resolve, reject) => {
    // 获取数据库连接
    const db = getDbConnection();

    // 执行查询
    db.all(sql, param, (error, row) => {
      // 关闭数据库连接
      db.close();

      // 如果发生错误，则 reject Promise
      if (error) {
        reject(error);
      }

      // 如果没有查询到数据，则 resolve undefined
      else if (row === undefined) {
        resolve(undefined);
      }

      // 否则，resolve 查询结果
      else {
        resolve(row);
      }
    });
  });
};

// 修改数据库，返回一个 Promise 对象
const mutate = (sql, param) => {
  // 获取数据库连接
  const db = getDbConnection();

  // 设置繁忙超时时间为 3 秒
  db.configure("busyTimeout", 3000);

  return new Promise((resolve, reject) => {
    // 开启事务
    db.serialize(() => {
      db.exec("BEGIN TRANSACTION");

      // 执行修改操作
      db.run(sql, param, (error) => {
        if (error !== null) {
          // 如果发生错误，则回滚事务并 reject Promise
          db.serialize(() => {
            db.exec("ROLLBACK");
            db.close();
            reject(error);
          });
        } else {
          // 如果修改成功，则提交事务并 resolve Promise
          db.serialize(() => {
            db.exec("COMMIT");
            db.close();
            resolve("success");
          });
        }
      });
    });
  });
};

// 导出查询和修改函数
export { query, mutate };

import sql from "mssql";

let pool: sql.ConnectionPool | null = null;

export const getConnection = async (): Promise<sql.ConnectionPool> => {
  const config: sql.config = {
    server: process.env.AZURE_SQL_SERVER!,
    options: {
      database: process.env.AZURE_SQL_DATABASE!,
      encrypt: true,
      enableArithAbort: true,
    },
    authentication: {
      type: "azure-active-directory-default",
      options: {
        clientId: undefined,
      },
    },
  };

  // Create and connect the new pool
  pool = new sql.ConnectionPool(config);
  await pool.connect();
  return pool;
};

import { Sequelize } from "sequelize";
import * as tedious from "tedious";

let sequelize: Sequelize | undefined = undefined;

export const getSequelizeConnection = (): Sequelize => {
  if (!sequelize) {
    sequelize = new Sequelize({
      dialect: "mssql",
      dialectModule: tedious,
      host: "sqlserver-certranker.database.windows.net",
      database: "sqldb-certranker",
      dialectOptions: {
        authentication: {
          type: "azure-active-directory-default",
        },
        options: {
          encrypt: true,
          enableArithAbort: true,
        },
      },
    });
  }
  return sequelize;
};

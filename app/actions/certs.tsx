import { getConnection } from "@/app/utility/dbClient";
import { Cert } from "@/app/types/models";
import sql from "mssql";

export async function getAllCerts() {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query("SELECT * FROM Certifications ORDER BY short_name");
    return result.recordset as Cert[];
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
}

export async function getCertById(id: string) {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("certId", sql.NVarChar, id)
      .query("SELECT * FROM Certifications WHERE short_name = @certId");
    return result.recordset[0] as Cert;
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
}

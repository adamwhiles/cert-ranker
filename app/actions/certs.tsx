import DbClient from "@/app/utility/dbClient";
import { Cert } from "@/app/types/models";

const cosmosDb = new DbClient();
const client = await cosmosDb.getConnection();
const database = client.database("certranker");
const container = database.container("certs");

export async function getAllCerts() {
  try {

    const query = container.items.query(`SELECT * FROM c`);
    const { resources } = await query.fetchAll();
    return resources as Cert[];
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
}

export async function getCertById(id: string) {
  try {
    const { resource } = await container.item(id, id).read();
    return resource as Cert;
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }

}

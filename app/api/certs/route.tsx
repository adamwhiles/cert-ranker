import { DbClient } from "../../utility/dbClient";

const cosmosDb = new DbClient();

export async function GET() {
  const client = cosmosDb.getConnection();
  const database = client.database("msftlearningresources");
  const container = database.container("learningresources");
  const query = await container.items.query(`SELECT * FROM learningresources`);
  const data = await query.fetchAll();
  return Response.json(data);
}

import DbClient from "../../utility/dbClient";

const cosmosDb = new DbClient();

export async function GET() {
  const client = await cosmosDb.getConnection();
  const database = client.database("msftlearningresources");
  const container = database.container("learningresources");
  const query = container.items.query(`SELECT * FROM learningresoources`);
  const data = await query.fetchAll();
  return Response.json(data);
}

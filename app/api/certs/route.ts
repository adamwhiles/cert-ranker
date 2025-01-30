import DbClient from "../../utility/dbClient";

const cosmosDb = new DbClient();

export async function GET() {
  const client = await cosmosDb.getConnection();
  const database = client.database("certranker");
  const container = database.container("certs");
  const query = container.items.query(`SELECT * FROM certs`);
  const data = await query.fetchAll();
  return Response.json(data);
}

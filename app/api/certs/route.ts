import DbClient from "../../utility/dbClient";

const cosmosDb = new DbClient();

export async function GET() {
  try {
    const client = await cosmosDb.getConnection();
    const database = client.database("certranker");
    const container = database.container("certs");

    const query = container.items.query(`SELECT * FROM c`); // Correct CosmosDB SQL query
    const { resources } = await query.fetchAll(); // Extract `resources` from response

    return new Response(JSON.stringify(resources), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

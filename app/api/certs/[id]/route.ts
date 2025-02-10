import { NextRequest } from "next/server";
import DbClient from "../../../utility/dbClient";

type Params = Promise<{ id: string }>;

const cosmosDb = new DbClient();

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const client = await cosmosDb.getConnection();
    const database = client.database("certranker");
    const container = database.container("certs");
    const { id } = await params;

    if (!id) {
      return new Response(JSON.stringify({ error: "ID parameter is required" }), { status: 400 });
    }

    const { resource } = await container.item(id, id).read();

    if (!resource) {
      return new Response(JSON.stringify({ error: "Document not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(resource), { status: 200 });
  } catch (error) {
    console.error("Error fetching document:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

import { CosmosClient } from "@azure/cosmos";

export default class DbClient {
  private client: CosmosClient;
  private endpoint: string;
  private key: string;

  constructor(
    endpoint: string = process.env.COSMOS_URI || "",
    key: string = process.env.COSMOS_KEY || "",
  ) {
    this.endpoint = endpoint;
    this.key = key;
    this.client = new CosmosClient({ endpoint: this.endpoint, key: this.key });
  }

  public getConnection(): CosmosClient {
    return this.client;
  }
}

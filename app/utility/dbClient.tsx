import { TokenCredential, DefaultAzureCredential } from "@azure/identity";
import { CosmosClient, CosmosClientOptions } from "@azure/cosmos";

const credential: TokenCredential =  new DefaultAzureCredential();

export default class DbClient {
  private endpoint: string;
  private options: CosmosClientOptions = {
    endpoint: process.env.COSMOS_URI || "",
    aadCredentials: credential,
  }

  constructor(
    endpoint: string = process.env.COSMOS_URI || "",
  ) {
    this.endpoint = endpoint;
  }

  public async getConnection(): Promise<CosmosClient> {
    const client: CosmosClient = new CosmosClient(this.options);

    return client;
  }
}

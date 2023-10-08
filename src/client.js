import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ne4kjryn",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-10-07",
});

export default client;

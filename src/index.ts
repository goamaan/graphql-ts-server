import { MikroORM } from "@mikro-orm/core";
import { PROD } from "./constants";
import { Post } from "./entities/post";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "graphql-ts-server",
    debug: !PROD,
    type: "postgresql",
    entities: [Post],
  });
};

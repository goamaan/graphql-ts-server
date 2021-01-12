import { MikroORM } from "@mikro-orm/core";
import { PROD } from "./constants";
import { Post } from "./entities/post";
import path from "path";

export default {
  dbName: "graphql-ts-server",
  debug: !PROD,
  type: "postgresql",
  entities: [Post],
  user: "postgres",
  password: "postgres",
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
} as Parameters<typeof MikroORM.init>[0];

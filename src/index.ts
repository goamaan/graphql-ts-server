import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  orm.getMigrator().up();
  // const post = orm.em.create(Post, { title: "first" });
  // await orm.em.persistAndFlush(post);
  // console.log(await orm.em.find(Post, {}));
};

main().catch((err) => console.log(err));

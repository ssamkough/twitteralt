import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/", async (context) => {
    await context.send({
      root: `${Deno.cwd()}/`,
      index: "public/src/index.html",
    });
  })
  .post("/tweet", (context) => {
    context.response.body = "tweet test";
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

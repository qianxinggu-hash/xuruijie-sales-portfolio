import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the sales portfolio and verified evidence", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>徐睿婕｜销售与商务拓展<\/title>/);
  assert.match(html, /销售能力，不止在谈判桌上/);
  assert.match(html, /7<\/strong><span>个品牌项目/);
  assert.match(html, /3 类<\/strong><span>现场互动玩法/);
  assert.match(html, /1\.6万<\/strong><span>获赞与收藏/);
  assert.match(html, /兰格格草原酸奶节/);
  assert.match(html, /\/work\/langgege-product\.jpg/);
  assert.match(html, /4 篇留存样本笔记共获得 464 点赞、34 收藏和 10 条评论/);
  assert.doesNotMatch(html, /XRJ|Sales &amp; Business Development/);
});

test("keeps the evidence layout responsive and its assets available", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    access(new URL("../public/work/hero-event.jpg", import.meta.url)),
    access(new URL("../public/work/langgege-product.jpg", import.meta.url)),
    access(new URL("../public/work/ugc-91f074.jpg", import.meta.url)),
  ]);

  assert.match(css, /\.capability-side-metrics/);
  assert.match(css, /\.case-photo-stack/);
  assert.match(css, /@media \(max-width: 600px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(`${page}\n${css}`, /—|–/);
});

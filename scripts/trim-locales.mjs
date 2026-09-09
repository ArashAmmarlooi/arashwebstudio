import fs from "fs";

const REMOVE = ["de", "pt", "zh"];

function removeLocaleBlock(content, loc) {
  const patterns = [`  ${loc}: {`, `    ${loc}: {`];
  for (const startMarker of patterns) {
    const start = content.indexOf(startMarker);
    if (start === -1) continue;

    let depth = 0;
    let started = false;
    let i = start + startMarker.length - 1;
    while (i < content.length) {
      const ch = content[i];
      if (ch === "{") {
        depth++;
        started = true;
      }
      if (ch === "}") {
        depth--;
      }
      if (started && depth === 0) {
        let end = i + 1;
        if (content[end] === ",") end++;
        if (content[end] === "\r") end++;
        if (content[end] === "\n") end++;
        return content.slice(0, start) + content.slice(end);
      }
      i++;
    }
  }
  return content;
}

function trimFile(path) {
  let content = fs.readFileSync(path, "utf8");
  for (const loc of REMOVE) {
    let prev;
    do {
      prev = content;
      content = removeLocaleBlock(content, loc);
    } while (content !== prev);
  }
  fs.writeFileSync(path, content);
  console.log(`trimmed ${path}`);
}

for (const file of [
  "lib/page-translations.ts",
  "lib/pricing.ts",
  "lib/blog.ts",
  "lib/service-translations.ts",
]) {
  trimFile(file);
}

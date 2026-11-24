import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "WARNING: This human runs on caffeine, sarcasm, and spite. Do not shake. May bite if approached before 9 AM.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);

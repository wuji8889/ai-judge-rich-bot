// ai-judge-rich-01 entry (Node 22, standard library only): writes one plan to
// /output/entry.txt — the plan an AI agent would follow to turn $100, a computer
// with internet access and 30 days into the most money. Deterministic: the same
// bytes on every run, no network.
//
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Day 1: offer one thing where buyers already pay: same-day bug fix for a web app, $49 flat, fixed in 4 hours or free. The buyer pays by card link once the fix is shown working. Post it on Reddit r/webdev, Indie Hackers and X, and answer 20 "my site is broken" posts, first fix free if it takes under an hour.',
  'Days 2-10: fix everything the same day with code. No calls, no meetings. Ask each buyer for a public review; raise the price to $79 after 10 reviews. Keep a public log of fixes as proof.',
  'Days 11-30: spend $30 of earnings on $1 make.fun bounty fees and enter one bounty a day where fewer than 200 agents entered, with the same skill, while fixes keep selling. Bank everything above $100.',
  'Edge: speed is the product. A human quotes 3 days; you ship in 4 hours, so the buyer picks you. Expect 1-2 fixes a day: about $600-900 by day 30. Worst case, the $49 jobs alone repay the $100 several times over.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);

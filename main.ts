// make.fun bounty: u-kreutzx-the-funniest-out-of-office-054815cf
// "The Funniest Out-of-Office" — writes one original out-of-office
// message, a single line of at most 140 characters, to stdout.
// Node 22, standard library only. No network, no model calls,
// no file reads: the line is written here, in this file.
const line =
  "Out of office until Monday. My inbox is on autopilot and it already filed a complaint about me. Urgent? Email the void — it replies faster.";

// Guard: the bounty caps the entry at 140 characters. Count code
// points (not UTF-16 units) so multi-byte characters are measured
// the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 140) {
  throw new Error(`Entry must be 1-140 characters, got ${length}.`);
}
if (line.includes("\n")) {
  throw new Error("Entry must be a single line with no newline.");
}

console.log(line);

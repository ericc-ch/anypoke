import fs from "node:fs";
import path from "node:path";

interface ResultItem {
  name: string;
  url: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultItem[];
}

async function fetchMoves() {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/api-data/refs/heads/master/data/api/v2/move/index.json";

  const response = await fetch(url);
  const moves = (await response.json()) as ApiResponse;

  const movesFile = path.join(import.meta.dirname, "..", "public", "moves.txt");
  const fileContent = moves.results
    .reduce((acc, move) => acc + `${move.name}\n`, "")
    .trim();

  fs.writeFileSync(movesFile, fileContent);
}

void fetchMoves();

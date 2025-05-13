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

export async function fetchAbilities() {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/api-data/refs/heads/master/data/api/v2/ability/index.json";

  const response = await fetch(url);
  const abilities = (await response.json()) as ApiResponse;

  const movesFile = path.join(
    import.meta.dirname,
    "..",
    "public",
    "data",
    "abilities.txt"
  );
  const fileContent = abilities.results
    .reduce((acc, move) => acc + `${move.name}\n`, "")
    .trim();

  fs.writeFileSync(movesFile, fileContent);
}

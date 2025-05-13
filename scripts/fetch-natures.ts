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

export async function fetchNatures() {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/api-data/refs/heads/master/data/api/v2/nature/index.json";

  const response = await fetch(url);
  const natures = (await response.json()) as ApiResponse;

  const movesFile = path.join(
    import.meta.dirname,
    "..",
    "public",
    "data",
    "natures.txt"
  );
  const fileContent = natures.results
    .reduce((acc, move) => acc + `${move.name}\n`, "")
    .trim();

  fs.writeFileSync(movesFile, fileContent);
}

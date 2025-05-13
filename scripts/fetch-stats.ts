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

const blacklistedStats = ["accuracy", "evasion"];

export async function fetchStats() {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/api-data/refs/heads/master/data/api/v2/stat/index.json";

  const response = await fetch(url);
  const stats = (await response.json()) as ApiResponse;

  const movesFile = path.join(
    import.meta.dirname,
    "..",
    "public",
    "data",
    "stats.txt"
  );
  const fileContent = stats.results
    .filter((type) => !blacklistedStats.includes(type.name))
    .reduce((acc, move) => acc + `${move.name}\n`, "")
    .trim();

  fs.writeFileSync(movesFile, fileContent);
}

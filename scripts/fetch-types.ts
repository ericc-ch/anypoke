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

const blacklistedTypes = ["unknown", "shadow"];

export async function fetchTypes() {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/api-data/refs/heads/master/data/api/v2/type/index.json";

  const response = await fetch(url);
  const types = (await response.json()) as ApiResponse;

  const movesFile = path.join(
    import.meta.dirname,
    "..",
    "public",
    "data",
    "types.txt"
  );
  const fileContent = types.results
    .filter((type) => !blacklistedTypes.includes(type.name))
    .reduce((acc, move) => acc + `${move.name}\n`, "")
    .trim();

  fs.writeFileSync(movesFile, fileContent);
}

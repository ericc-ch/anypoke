import { fetchAbilities } from "./fetch-abilities";
import { fetchMoves } from "./fetch-moves";
import { fetchNatures } from "./fetch-natures";
import { fetchStats } from "./fetch-stats";
import { fetchTypes } from "./fetch-types";

async function fetchAll() {
  await fetchAbilities();
  await fetchMoves();
  await fetchNatures();
  await fetchStats();
  await fetchTypes();
}

void fetchAll();

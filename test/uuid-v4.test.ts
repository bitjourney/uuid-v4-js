import { generateUUIDv4 } from "../src/uuid-v4";
import isUUID from "is-uuid";

console.log("1..10");
for (let i = 0; i < 10; i++) {
  const uuid = generateUUIDv4();
  console.log((isUUID.v4(uuid) ? "ok " : "not ok ") + (i + 1));
}

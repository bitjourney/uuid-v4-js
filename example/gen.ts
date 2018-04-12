import { generateUUIDv4 } from "../src/uuid-v4";
import isUUID from "is-uuid";

for (let i = 0; i < 10; i++) {
  const uuid = generateUUIDv4();

  console.log("## try", i);
  console.log("UUIDv4:", uuid);
  console.log("isUUID.v1:", isUUID.v1(uuid));
  console.log("isUUID.v2:", isUUID.v2(uuid));
  console.log("isUUID.v3:", isUUID.v3(uuid));
  console.log("isUUID.v4:", isUUID.v4(uuid));
  console.log("isUUID.v5:", isUUID.v5(uuid));
}

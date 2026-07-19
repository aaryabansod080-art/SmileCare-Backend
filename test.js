import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:SmileCare123@cluster0.l0rudxx.mongodb.net/smilecare?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("✅ Connected with MongoDB Driver");
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}
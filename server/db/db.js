    import { MongoClient } from "mongodb";

    const uri = "mongodb://localhost:27017"; 
    const client = new MongoClient(uri);

    export default async function connectMongodb() {
    await client.connect();
    const db = client.db("nike_clone_db"); 
    return db;
    }

import { MongoClient } from 'mongodb';

export async function connectToDataBase() {
  const client = await MongoClient.connect(`${process.env.MONGODB_URI}`, {
    useUnifiedTopology: true,
  });
  return client;
}

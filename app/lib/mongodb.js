import mongoose from "mongoose";

export default async function connect() {
  const connected = mongoose.connection.readyState === 0;
  const key = process.env.mongodb;

  try {
    if (connected) {
      await mongoose.connect(key);
    }
  } catch (error) {
    console.log(error);
  }
}

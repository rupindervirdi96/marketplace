import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;

    connection.once("connected", () => {
      console.log("MongoDB connected.");
    });

    connection.on("error", (err: any) => {
      console.log("MongoDB connected.");
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
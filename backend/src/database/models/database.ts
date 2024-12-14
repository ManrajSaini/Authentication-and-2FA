import mongoose from "mongoose";
import { getEnv } from "../../common/utils/get-env";
import { config } from "../../config/app.config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to Mongo database");
  } catch (error) {
    console.error("Error connecting to Mongo database", error);
    process.exit(1);
  }
};

export default connectDatabase;

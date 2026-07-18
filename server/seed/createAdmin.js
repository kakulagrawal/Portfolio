import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import connectDB from "../config/db.js";
import Admin from "../models/adminModel.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "kakulagrawal32@gmail.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("kakulag14@", 10);

    const admin = await Admin.create({
      name: "Kakul Agrawal",
      email: "kakulagrawal32@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin Created Successfully");
    console.log(admin);

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

createAdmin();
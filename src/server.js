"use strict";

import express from "express";
import dotenv from "dotenv";
dotenv.config();

export const server = express();
export const PORT = process.env.PORT;

"use strict";

// Express
import express from "express";
server.use(express.json());

// Serversettings
import { server, PORT } from "./server";

// import Routes
import { authRoutes } from "../routes/authRoutes";
import { petRoutes } from "../routes/petRoutes";

// Routes
server.use("/api", authRoutes);
server.use("/api", petRoutes);

// Server Start
server.listen(PORT, () => {
  console.log(`Server ist gestartet und hört auf Port: ${PORT}`);
});

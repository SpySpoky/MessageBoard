import express from "express";
import cors from "cors";
import requestLogger from "./middleware/requestLogger.js";
import messageRouter from "./routes/messageRouter.js";
import errorHandler from './middleware/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/messages", messageRouter);

app.use(errorHandler);
app.listen(4200, () => {
  console.log("Up at http://localhost:4200");
});
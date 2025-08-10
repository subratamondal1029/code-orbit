import "./config.js";
import app from "./app.js";
import connectDB from "./db/mongodb.js";

const PORT = process.env.PORT || 8000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the application:", error);
    process.exit(1);
  }
})();

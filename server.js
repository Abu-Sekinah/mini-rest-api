const express = require("express");
const app = express();
const itemsRoutes = require("./routes/items");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/items", itemsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const itemsRoutes = require("./routes/items");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("Hello, World!"));
app.use("/items", itemsRoutes);
app.use((req, res) => res.status(404).json({ error: "Not Found" }));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

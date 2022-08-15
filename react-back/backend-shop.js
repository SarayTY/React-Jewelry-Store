const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const cart = require("./routes/cart");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

mongoose
.connect("mongodb://localhost/react-shop-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB..."));
const products = require("./routes/products");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);
app.use("/api/products", products);
app.use("/api/cart", cart);


const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));

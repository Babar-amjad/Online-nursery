
const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoute");
const plantRoutes = require("./Routes/PlantRoute");
const stripe = require("stripe")("sk_test_51OvkBgK3EE8oND0uKjWknfpISsXfl1L9za0K08dbQiFvaSg1IyCSX7jEw1PESWjwUt1hwunMeedZtfnKu0O42XsZ00QLRUhUIE");
const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5500;

//Connection to DataBase Call here
connectDB();



// Allow requests from url'
const corsOptions = {
  origin: ["http://localhost:5173"], // Add your frontend URL here
  methods: "GET,POST",
  credentials: true,
}; 

app.use(cors(corsOptions));
// checkout api
app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  // Ensure products is an array and not empty
  if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: "Invalid or empty product list" });
  }

  try {
      const lineItems = products.map((product) => ({
          price_data: {
              currency: "inr",
              product_data: {
                  name: product.name,
                  images: [product.image] // Corrected the key from "im" to "image"
              },
              unit_amount: product.price * 100,
          },
          quantity: product.amount // Corrected the key from "qnty" to "amount"
      }));

      const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: lineItems,
          mode: "payment",
          success_url: "http://localhost:5173/success", // Corrected the typo in the URL
          cancel_url: "http://localhost:5173/cancel",
      });

      res.json({ id: session.id });
  } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: "Error creating checkout session" });
  }
});


app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Run Server on ${PORT}`);
});

app.use(express.json());


app.use("/", userRoutes);
app.use("/", userRoutes);
app.use("/", plantRoutes);

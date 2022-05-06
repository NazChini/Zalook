const mongoose = require("mongoose");
const Product = require("./models/product");
console.log(Product);
console.log(typeof Product);

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DATABASE;

mongoose.set("debug", true);

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.aspym.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection established"))
  .catch(console.log);

async function main() {
  await Product.deleteMany({});
  const product1 = new Product({ name: "my dress", category: "day dress" });
  // product1.setCoordinates(30, 30);
  console.log(product1);
  await product1.save();
}
main();

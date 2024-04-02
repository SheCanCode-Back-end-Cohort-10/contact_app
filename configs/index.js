const configs = {
  port: process.env.PORT || 3000,
  mongoURI:
    process.env.MONGODB_URI ||
    "mongodb+srv://Mariya:KKXp3IWxu7Sbp5zi@cluster0.fslpg5p.mongodb.net/contacts",
  secret: process.env.SECRET || "mysecret",
};

export default configs;

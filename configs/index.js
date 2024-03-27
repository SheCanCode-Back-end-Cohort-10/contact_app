const configs = {
    port: process.env.PORT||5000,
    mongoURI: process.env.MONGODB_URI||"mongodb+srv://Alice:12345@cluster0.6eqmb7j.mongodb.net/contacts",
    secret: process.env.SECRET
}

export default configs;
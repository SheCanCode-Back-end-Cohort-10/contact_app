const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ||'mongodb://localhost:27017/contacts',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;
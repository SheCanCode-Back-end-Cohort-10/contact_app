const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI || 'mongodb+srv://niyocroirealine:WrQb8AXOcGA4eNrf@cluster0.ebwlnjc.mongodb.net/ContactApp',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;
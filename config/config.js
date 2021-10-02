/*const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/csWorks'
}
*/  LOKAL
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb+srv://dbPeter:meister05@csworks.ehqap.mongodb.net/csWorks?retryWrites=true&w=majority'
}
// # mongodb+srv://dbPeter:meister05@csworks.ehqap.mongodb.net/csWorks?retryWrites=true&w=majority
 
export default config
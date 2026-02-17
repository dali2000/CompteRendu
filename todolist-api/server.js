const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 3000;
MONGO_URI= 'mongodb+srv://dalikbaier_db_user:dali@cluster0.g02dt9m.mongodb.net/';
console.log('port: ', PORT);
console.log('uri: ', MONGO_URI);

(async () => {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}) ();
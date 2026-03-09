import app from './src/app';
import { connectToDatabase } from './src/config/database';

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
    console.log("Database connection established, starting server...");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
});
# CHECK OUT MY DEPLOYED WEBSITE
Check out my [deployed website](https://vastraa-frontend-tey9.onrender.com/)

# HOW TO RUN 

#### Currently this repo has setting according to render deployment to run this code on local machine u need to do following changes.

##### 1. Add .env variables.
###### 1(a). Backend env variable. 
Create a .env file in backend directory and add the following details.
```javascript
PORT=8000
MONGODB_URL="your own mongodb url"
JWT_SECRET="your own jwt secret"

ADMIN_EMAIL="example@vastraa.com"
ADMIN_PASSWORD="admin"

CLOUDINARY_NAME="YOUR CLOUDINARY PROJECT NAME "
CLOUDINARY_APIKEY="YOUR API KEY"
CLOUDINARY_API_SECRET="YOUR API SECRET"

RAZORPAY_KEY_ID="YOUR OWN ID"
RAZORPAY_KEY_SECRET="YOUR OWN SECRET"
```
###### 1(b). Frontend env variable.
Create a .env file in frontend directory and add the following details.
```javascript
VITE_FIREBASE_APIKEY="your-api-key-here"

VITE_FORMSPREE_URL="your url"

VITE_RAZORPAY_KEY_ID="your id"
```

##### 2. Add server port to  vite.config.js in both admin and frontend.
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server : {port: "your vite port example 5173, 5174, 5175"}
});
```

##### 3. Change serverUrl in AuthContext.jsx of both admin and frontend vite app.

```javascript
const serverUrl = "http://localhost:8000" 
```

##### 4. Change cors setting in index.js of backend.
```javascript
app.use(
  cors({
    origin: ["http://localhost:yourPortNumberOfFrontendViteApp", "http://localhost:yourPortNumberOfBackendViteApp"],
    credentials: true,
  })
);
```

##### 5. Run command in terminal   
###### 5(a). To install dependecies in admin backend and frontend folder.
```cli
npm install 
```
###### 5(a). To run admin backend and frontend.
```cli
npm run dev
```
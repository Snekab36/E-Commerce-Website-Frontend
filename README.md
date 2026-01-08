🛒 SparkMart – MERN E-Commerce Website

SparkMart is a full-stack E-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js).
It supports user authentication, product browsing, cart management, checkout, and order history.

🚀 Features
👤 User Features

User Registration & Login (JWT Authentication)

Product Listing & Product Details

Add to Cart / Remove from Cart

Checkout & Place Orders

Order History (My Orders)

Toast Notifications (Success & Error messages)

🛠 Admin (Backend-ready)

Create Products (Admin only)

Secure API routes

Order Management

🧱 Tech Stack
Frontend

React + Vite

Tailwind CSS

Axios

React Router

React Hot Toast

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

bcryptjs


🔐 Authentication Flow

User registers with email & password

Password is hashed using bcrypt

JWT token is generated on login

Token is stored in localStorage

Protected routes use Authorization: Bearer <token>

🧪 API Endpoints
User
POST   /api/users/register
POST   /api/users/login

Products
GET    /api/products
GET    /api/products/:id
POST   /api/products   (Admin)

Cart
POST   /api/cart
GET    /api/cart
PUT    /api/cart/:productId
DELETE /api/cart/:productId

Orders
POST   /api/orders
GET    /api/orders/myorders

⚙️ Environment Variables

Create a .env file inside backend/:

MONGO_URI=mongodb+srv://myusersneha:sneha123@cluster0.fdwkjtv.mongodb.net/ecommerce?appName=Cluster0
JWT_SECRET=Saisneha@123
PORT=5000

▶️ How to Run the Project
1️⃣ Backend
cd backend
npm install
npm run dev

2️⃣ Frontend
cd ecommerce-frontend
npm install
npm run dev


Frontend runs on:

https://e-commerce-website-frontend-one-vert.vercel.app/


Backend runs on:

https://e-commerce-website-backend-lilac.vercel.app/

📸 Screenshots

Home Page with Banner

Product Listing

Login & Register Pages

Cart Page

Checkout Page

🧠 Learning Outcomes

Full MERN stack development

JWT authentication & authorization

REST API design

MongoDB data modeling

State management using Context API

Error handling & debugging

📌 Future Improvements

Payment gateway integration (Stripe / Razorpay)

Admin dashboard

Product search & filters

Wishlist feature

Responsive mobile optimization

👩‍💻 Author

Sneha
MERN Stack Developer
E-commerce Project – Academic & Learning Purpose

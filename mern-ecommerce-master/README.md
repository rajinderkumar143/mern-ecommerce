# 🛒 SwiftCart - Full Stack MERN E-Commerce Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![Stripe](https://img.shields.io/badge/Stripe-Payments-blueviolet?logo=stripe)
![Redis](https://img.shields.io/badge/Redis-Session-red?logo=redis)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

</p>

A modern **full-stack MERN E-Commerce application** featuring secure JWT authentication, Redis-powered session management, Stripe payment integration, Cloudinary image uploads, role-based authorization, and an intuitive shopping experience.

Designed with scalable architecture, clean REST APIs, and production-ready deployment.

---

# ✨ Features

## Authentication

- JWT Authentication
- Access & Refresh Tokens
- Secure Cookie Authentication
- Refresh Token Rotation
- Password Hashing using bcrypt
- Protected Routes
- Automatic Login Persistence

---

## User Features

- User Registration
- User Login
- Browse Products
- Browse Categories
- Featured Products
- Product Details
- Add to Cart
- Update Cart Quantity
- Remove from Cart
- Apply Coupons
- Secure Checkout
- Order Confirmation

---

## Admin Features

- Admin Authentication
- Create Products
- Update Products
- Delete Products
- Upload Product Images
- Manage Categories
- View Orders

---

## Payment

- Stripe Checkout Integration
- Test & Live Mode Support
- Payment Verification
- Automatic Order Creation
- Purchase Success Page

---

## Security

- JWT Authentication
- Refresh Token Storage in Redis
- Password Hashing
- HTTP Only Cookies
- Role Based Authorization
- Environment Variables
- Protected Admin APIs

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Zustand
- Axios
- Tailwind CSS
- Framer Motion

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Authentication

- JWT
- bcrypt

---

## Storage & Cache

- Upstash Redis

---

## Media Storage

- Cloudinary

---

## Payments

- Stripe Checkout

---

# 🏗 Architecture

```
                React Frontend
                      │
                Axios API Calls
                      │
              Express REST API
                      │
        ┌─────────────┴─────────────┐
        │                           │
    MongoDB                    Upstash Redis
 (Users, Products,          Refresh Tokens
 Orders, Coupons)
        │
        │
    Cloudinary
(Product Images)

        │

      Stripe
  Payment Gateway
```

---

# 📂 Folder Structure

```
SwiftCart
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── lib
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── store
│   │   ├── hooks
│   │   ├── utils
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file inside **backend/**

```env
PORT=5000

MONGO_URI=your_mongodb_connection

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=sk_test_xxxxxxxxx

CLIENT_URL=http://localhost:5173

NODE_ENV=development
```

---

# 💻 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/swiftcart.git

cd swiftcart
```

---

## Install Backend

```bash
npm install
```

---

## Install Frontend

```bash
cd frontend

npm install
```

---

# ▶ Running Locally

## Start Backend

```bash
npm run dev
```

---

## Start Frontend

```bash
cd frontend

npm run dev
```

---

## URLs

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

# 💳 Stripe Test Card

| Field | Value |
|--------|------|
| Card Number | 4242 4242 4242 4242 |
| Expiry | Any Future Date |
| CVC | Any 3 Digits |
| ZIP | Any Valid ZIP |

---

# 📦 API Modules

### Authentication

- Register
- Login
- Logout
- Refresh Token

---

### Products

- Get Products
- Featured Products
- Categories
- Product Details
- Create Product
- Update Product
- Delete Product

---

### Cart

- Add Item
- Remove Item
- Update Quantity
- Clear Cart

---

### Coupons

- Validate Coupon
- Apply Coupon

---

### Payments

- Create Stripe Checkout Session
- Payment Success
- Create Order

---

# 📈 Performance & Scalability

- Modular REST API Architecture
- Centralized Error Handling
- Secure Authentication Flow
- Stateless Access Tokens
- Redis Session Management
- Cloud Image Storage
- Optimized React State using Zustand

---

# 🚀 Deployment

## Backend

Deploy using:

- Render
- Railway
- DigitalOcean
- AWS EC2

---

## Frontend

Deploy using:

- Vercel
- Netlify

---

Remember to update:

```
CLIENT_URL
```

and

```
VITE_API_URL
```

for production.

---

# ✅ Post Deployment Checklist

- User Registration
- Login
- Product Listing
- Featured Products
- Cart Functionality
- Coupon Validation
- Stripe Checkout
- Order Creation
- Admin CRUD Operations

---

# 🎯 Resume Highlights

- Built a production-ready full-stack MERN e-commerce platform with secure JWT authentication and Redis-based refresh token management.
- Integrated Stripe Checkout for secure online payments with automatic order creation after successful transactions.
- Developed scalable REST APIs using Express.js and MongoDB following modular architecture and best backend practices.
- Implemented role-based authorization for customers and administrators, enabling secure product and order management.
- Optimized frontend performance using React, Zustand, Axios, Tailwind CSS, and Framer Motion to deliver a responsive shopping experience.

---

# 📚 Future Improvements

- Wishlist
- Product Reviews
- Ratings
- Search & Filters
- Email Notifications
- Inventory Management
- Sales Analytics Dashboard
- Order Tracking
- Multiple Payment Methods
- PWA Support

---

# 👨‍💻 Author

**Rajinder Sharma**

GitHub: https://github.com/rajinderkumar143/mern-ecommerce.git

LinkedIn: www.linkedin.com/in/rajinder-sharma-0231a7277

---

## ⭐ If you like this project, consider giving it a Star!

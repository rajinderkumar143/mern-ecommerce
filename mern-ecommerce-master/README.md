# SwiftCart - MERN E-Commerce Platform

Full-stack e-commerce application built with MongoDB, Express, React, and Node.js.

## Features

- JWT authentication with access and refresh tokens
- Redis backed refresh token storage
- Role based access for admin and customer
- Product categories and featured products
- Cart management and quantity updates
- Stripe checkout integration
- Coupon support and order creation after payment

## Tech Stack

- Frontend: React, Vite, Zustand, Axios, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth and Cache: JWT, Upstash Redis
- Payments: Stripe Checkout
- Media: Cloudinary

## Project Structure

- backend: API, auth, business logic, database models
- frontend: React app and UI components

## Prerequisites

- Node.js 18+
- npm 9+
- MongoDB database
- Upstash Redis database
- Stripe account (test mode is fine)
- Cloudinary account

## Environment Variables

Create a file at backend/.env with:

PORT=5000
MONGO_URI=your_mongo_connection_string
UPSTASH_REDIS_URL=rediss://default:password@your-host:6379
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development

## Installation

Install backend and root dependencies:

npm install

Install frontend dependencies:

cd frontend
npm install

## Running Locally

Run backend from project root:

npm run dev

Run frontend in a second terminal:

cd frontend
npm run dev

App URLs:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Stripe Test Checkout

Use this test card in Stripe Checkout:

- Card Number: 4242 4242 4242 4242
- Expiry: any future date
- CVC: any 3 digits
- ZIP: any valid value

## Scripts

From project root:

- npm run dev: start backend with nodemon
- npm run start: start backend with node
- npm run build: install deps and build frontend

From frontend folder:

- npm run dev: start Vite frontend
- npm run build: production frontend build

## Deployment

### Option A: Render (Backend) + Vercel (Frontend)

Backend deployment (Render):

- Create a new Web Service from this repository.
- Root Directory: leave default (project root).
- Build Command: npm install
- Start Command: npm run start
- Add backend environment variables:
	- PORT=5000
	- MONGO_URI
	- UPSTASH_REDIS_URL
	- ACCESS_TOKEN_SECRET
	- REFRESH_TOKEN_SECRET
	- CLOUDINARY_CLOUD_NAME
	- CLOUDINARY_API_KEY
	- CLOUDINARY_API_SECRET
	- STRIPE_SECRET_KEY
	- CLIENT_URL (set this to your frontend deployed URL)
	- NODE_ENV=production

Frontend deployment (Vercel):

- Import the same repository into Vercel.
- Set Root Directory to frontend.
- Framework Preset: Vite.
- Build Command: npm run build
- Output Directory: dist
- Add frontend environment variable:
	- VITE_API_URL=https://your-backend-domain/api

After deploying frontend, update backend CLIENT_URL:

- CLIENT_URL must exactly match your frontend deployed URL.

### Important for this codebase

- Current frontend axios setup uses http://localhost:5000/api in development and /api in production.
- If backend and frontend are deployed on different domains, set frontend API base URL using a VITE_API_URL variable and update frontend axios config accordingly.
- Stripe keys must match mode:
	- Test mode: use pk_test and sk_test
	- Live mode: use pk_live and sk_live

### Post-deploy checklist

- Signup and login work.
- Category products are visible.
- Add to cart works.
- Stripe checkout opens and redirects back to purchase-success.
- Order is created in database after successful payment.

## Notes

- Start backend first, then frontend.
- In development, frontend proxies API requests to backend.
- Payment flow runs in Stripe test mode when using sk_test and pk_test keys.

## Resume Friendly Summary

Built a full-stack MERN e-commerce platform with JWT authentication, Redis backed refresh-token handling, Stripe checkout, category-based product discovery, cart workflows, and admin product management.

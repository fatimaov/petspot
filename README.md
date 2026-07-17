# PetSpot

## 1. Project Overview

PetSpot is a full-stack web application that helps pet owners discover pet-friendly places and helps businesses manage reservations and customer activity.

The project was developed as a collaborative project in the 4Geeks Full Stack Development program.

This repository is split into two application roots:

- `frontend/`: React + Vite client
- `backend/`: Flask API, database models, and migrations

PetSpot supports three main roles:

- Pet owners
- Place accounts
- Admin users

The frontend communicates with the backend through a Flask API under `/api/*`. Real-time chat uses Socket.IO.

## 2. Key Features

- Public landing page
- User, place, and admin login flows
- Browse pet-friendly places by city or proximity
- Map-based place discovery
- Favorites and pet profile management
- Reservations with optional pet selection
- Reviews after visits
- News publishing and browsing
- Chat between users and places
- Place schedule management
- Place floor layout and table management
- Optional PayPal reservation payments
- Optional AI-powered pet analysis helper

## 3. Main User Flows

### Pet owner flow

1. Sign up or log in
2. Browse places on the dashboard
3. Filter by city or nearby distance
4. Register pets and save favorite places
5. Create reservations and add a pet when needed
6. Leave reviews after visits
7. Chat with places

### Place account flow

1. Register or log in
2. Update place profile and pet rules
3. Review reservations and reviews
4. Manage opening hours
5. Manage tables and floor layouts
6. Reply to chats

### Admin flow

1. Log in through the admin route
2. View dashboard summaries
3. Manage users, places, cities, news, reservations, reviews, and pets

## 4. Tech Stack

### Frontend

- React
- Vite
- React Router
- Socket.IO Client
- Google Maps React bindings
- PayPal React SDK

### Backend

- Flask
- SQLAlchemy
- Flask-Migrate
- Flask-JWT-Extended
- Flask-SocketIO

### External integrations

- Google Maps / Places APIs
- Cloudinary
- PayPal
- Groq API

## 5. Architecture

### Frontend

The React app is organized into public pages, user pages, place pages, and admin pages.

### Backend

The Flask backend handles authentication, business logic, database access, and integrations such as maps, uploads, payments, and chat.

### Data model

The main entities are users, places, cities, pets, reservations, reviews, favorites, chats, news, and admin accounts. Places also include scheduling and table/layout management.

## 6. Repository Structure

```text
petspot/
|- frontend/   # React + Vite application
|- backend/    # Flask API, models, migrations, Pipfile
|- docs/       # course and helper assets
|- README.md
|- README.es.md
```

Key backend files:

- `backend/src/app.py`
- `backend/src/api/routes.py`
- `backend/src/api/models.py`

Key frontend files:

- `frontend/src/front/routes.jsx`
- `frontend/src/front/main.jsx`
- `frontend/src/front/pages/`
- `frontend/src/front/components/`

## 7. Local Setup

### Prerequisites

- Node.js 20+
- Python 3.13
- `pipenv`

### Frontend setup

```bash
cd frontend
npm install
cp .env.example .env
```

### Backend setup

```bash
cd backend
pipenv install
cp .env.example .env
```

Then update the copied `.env` files with your local values.

## 8. Environment Variables

Frontend variables are defined in `frontend/.env.example`. The main local setting is `VITE_BACKEND_URL`, which should point to the Flask server, usually `http://localhost:3001`.

Backend variables are defined in `backend/.env.example`. The main required values are the database connection, Flask/JWT configuration, and any third-party service credentials you want to enable locally.

Some features depend on optional integrations:

- Maps and address lookup need Google Maps credentials
- Pet image upload needs Cloudinary credentials
- Paid reservations need PayPal credentials
- The AI helper needs a Groq API key

## 9. Running the Application

### Start the backend

```bash
cd backend
pipenv run upgrade
pipenv run start
```

The backend runs on port `3001`.

### Start the frontend

```bash
cd frontend
npm run dev
```

The frontend runs on port `3000`.

### Other useful commands

Backend scripts include:

- `pipenv run init`
- `pipenv run migrate`
- `pipenv run upgrade`
- `pipenv run downgrade`
- `pipenv run insert-test-data`

Frontend scripts include:

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## 10. Project Background

PetSpot was built as a collaborative project in the 4Geeks Full Stack Development program. It is a learning project with a broad feature set, combining user flows, business management tools, maps, reservations, chat, and admin functionality in a single full-stack application.

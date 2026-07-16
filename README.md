# PetSpot

PetSpot is now organized for independent frontend and backend deployment.

## Structure

- `frontend/` - React + Vite application for Vercel.
- `backend/` - Flask API, migrations, and Python dependencies for Render.
- `docs/` - course/development reference assets and helper scripts.

## Frontend

```bash
cd frontend
npm install
npm run dev
npm run build
```

Set frontend variables in `frontend/.env` using `frontend/.env.example` as the template. `VITE_BACKEND_URL` must point to the Flask backend URL, for example `http://localhost:3001` locally or the Render web service URL after deployment.

## Backend

```bash
cd backend
pipenv install
pipenv run upgrade
pipenv run start
```

Set backend variables in `backend/.env` using `backend/.env.example` as the template. For Supabase PostgreSQL, set `DATABASE_URL` to the Supabase connection string. The backend normalizes `postgres://` URLs to `postgresql://` for SQLAlchemy compatibility.

Render can use `backend/` as the root directory with:

- Build command: `./render_build.sh`
- Start command: `gunicorn wsgi --chdir ./src/`

Vercel can use `frontend/` as the root directory with:

- Build command: `npm run build`
- Output directory: `dist`

## Notes

- Do not put backend secrets in `VITE_` variables. Vite variables are exposed to the browser.
- The root `.env` from the old combined layout is intentionally not used by either deployed app.

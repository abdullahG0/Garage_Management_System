Garage Management Web Application
==================================

This repository contains a production-grade garage management platform with a TypeScript/Express + Prisma backend and a Vite + React + Chakra UI frontend. The system covers customer, vehicle, work order, inventory, and workforce management with a dashboard summarising operational metrics.

Project Structure
-----------------

- `backend/` - REST API built with Express, Prisma (SQLite by default), and Zod validation.
- `frontend/` - React SPA powered by Vite, Chakra UI, and TanStack Query for data fetching/caching.

Backend
-------

1. Copy `backend/.env.example` to `backend/.env` and adjust values as needed. Default SQLite path works out of the box.
2. From the `backend` directory install dependencies:

   ```bash
   npm install
   ```

3. Synchronise the database schema and seed sample data (the script creates the SQLite file if needed):

   ```bash
   npm run db:setup
   ```

   > `db:setup` touches `prisma/dev.db`, runs `prisma db push --accept-data-loss`, and then seeds the database. Re-run it whenever you change the Prisma schema or need a clean dataset.

4. (Optional) Regenerate the Prisma client after schema updates:

   ```bash
   npm run prisma:generate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The API listens on `http://localhost:4000`. Key endpoints:

   - `GET /health`
   - `GET /api/customers`, `/api/vehicles`, `/api/work-orders`, `/api/inventory`, `/api/services`, `/api/workers`
   - `GET /api/dashboard/summary`

Frontend
--------

1. From the `frontend` directory install dependencies:

   ```bash
   npm install
   ```

2. Start the Vite development server:

   ```bash
   npm run dev
   ```

   Vite runs on `http://localhost:5173` and proxies API calls to `http://localhost:4000`.

Build & Quality
---------------

- Backend: `npm run build` emits compiled JS to `backend/dist`.
- Frontend: `npm run build` outputs static assets to `frontend/dist`.
- Backend smoke test: `npm run verify:workers` exercises the worker CRUD flow end-to-end.
- Both projects expose `npm run lint` and `npm run check` for basic static analysis.

Next Steps
----------

1. Add authentication/authorization (e.g. JWT with role-based access) if multi-user support is required.
2. Integrate automated reminders for upcoming delivery or pickup dates.
3. Containerise services with Docker and add CI/CD workflows for deployment.


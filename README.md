# TaskForge – MEAN Stack Task Manager (Angular Components)

TaskForge is a full-stack **MEAN** project (MongoDB, Express, Angular, Node.js) for practicing CRUD with a clean, component-based Angular frontend.

---

## Features
- **Backend:** Node.js + Express + Mongoose; RESTful CRUD for tasks.
- **Frontend:** Angular (v18.x) with components, routing, reactive forms, and an HttpClient service.
- **Dev-UX:** Proxy config to avoid CORS during development, environment file for API base URL.
- **Scripts:** `npm start` / `npm run dev` for backend; `ng serve` for frontend.

---

- **Node.js** v20+ (v22 OK) and **npm**.
- **MongoDB** (local install or Atlas connection string).
- **Angular CLI** (optional): `npm i -g @angular/cli`.

---

## Project Structure
```
TaskForge/
├─ backend/                 # Express API
│  ├─ models/task.model.js  # Mongoose schema
│  ├─ routes/task.routes.js # CRUD routes
│  ├─ server.js             # App entry
│  ├─ package.json
│  └─ README.md
└─ frontend/                # Angular (2+) client with components
   ├─ angular.json
   ├─ package.json
   ├─ proxy.conf.json
   ├─ tsconfig*.json
   └─ src/
      ├─ index.html
      ├─ main.ts
      ├─ styles.css
      ├─ environments/
      │  ├─ environment.ts
      │  └─ environment.prod.ts
      └─ app/
         ├─ app.module.ts
         ├─ app-routing.module.ts      # '' → TasksList, 'create', 'edit/:id'
         ├─ services/task.service.ts   # HttpClient wrapper
         ├─ tasks-list/*               # list + toggle + delete + navigate
         └─ task-form/*                # create/edit via reactive forms
```

---

## 1) Backend Setup

1. Open PowerShell in the backend folder:
   ```powershell
   cd TaskForge\backend
   npm install
   ```

2. Create **.env** (same folder as `server.js`):
   ```env
   MONGODB_URI=mongodb://localhost:27017/taskforge
   PORT=5000
   ```

3. Run the API:
   ```powershell
   # Auto-restart (if nodemon is installed)
   npm run dev
   # or
   npm start
   ```

4. The API should be available at:
   - `http://localhost:5000/api/tasks`

### REST Endpoints
- `GET    /api/tasks`            → list (newest first)
- `POST   /api/tasks`            → create `{ title, description }`
- `PUT    /api/tasks/:id`        → update `{ title?, description?, completed? }`
- `DELETE /api/tasks/:id`        → delete

---

## 2) Frontend Setup (Angular Components)

> Note: You renamed the client folder to **`frontend`** (correct).

1. Open PowerShell in the frontend folder:
   ```powershell
   cd TaskForge\frontend
   npm install
   ```

2. Ensure the proxy is present (`frontend\proxy.conf.json`):
   ```json
   {
     "/api": { "target": "http://localhost:5000", "secure": false, "changeOrigin": true }
   }
   ```

3. Set the API base URL (dev) in `src/environments/environment.ts`:
   ```ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:5000/api'
   };
   ```

4. **Run** (dev server + proxy):
   ```powershell
   npx ng serve --proxy-config proxy.conf.json
   # http://localhost:4200
   ```

5. **Build (production):**
   ```powershell
   npm run build
   # outputs to dist/taskforge-client
   ```

---

## Key Files (Frontend)

- `src/app/services/task.service.ts`  
  Update the import to the correct environments path (already fixed):
  ```ts
  import { environment } from '../../environments/environment';
  ```

- `angular.json` (important snippets):
  ```json
  {
    "version": 1,
    "projects": {
      "taskforge-client": {
        "architect": {
          "build": { "builder": "@angular-devkit/build-angular:browser" },
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "options": { "buildTarget": "taskforge-client:build", "proxyConfig": "proxy.conf.json" }
          }
        }
      }
    },
    "defaultProject": "taskforge-client"
  }
  ```

- `package.json` (frontend – essential dev deps):
  ```json
  {
    "devDependencies": {
      "@angular/cli": "^18.2.0",
      "@angular/compiler-cli": "^18.2.0",
      "@angular-devkit/build-angular": "^18.2.0",
      "typescript": "~5.5.0"
    }
  }
  ```

---

## Troubleshooting

- **Cannot find module 'dotenv'** (backend):  
  Run `npm install dotenv` (already in `package.json`). Ensure `.env` exists.

- **Angular builder not found / defaultProject warning**:  
  Make sure `@angular-devkit/build-angular` is installed and `angular.json` matches the snippet above.

- **Environment import error**:  
  From `src/app/services/` to `src/environments/` use:
  ```ts
  import { environment } from '../../environments/environment';
  ```

- **CORS**:  
  Use the provided `proxy.conf.json` and run `ng serve --proxy-config proxy.conf.json`.

---

## Scripts Reference

### Backend (`TaskForge\backend\package.json`)
- `start` → `node server.js`
- `dev`   → `nodemon server.js`

### Frontend (`TaskForge\frontend\package.json`)
- `start` → `ng serve --proxy-config proxy.conf.json`
- `build` → `ng build`

---

## Tech Stack Versions
- Angular 18.x, TypeScript 5.5.x, Zone.js 0.14.x
- Node.js 20+ (22 OK), MongoDB latest

---

## Next Steps (suggestions)
- Add JWT auth (Angular interceptor + protected Express routes).
- Pagination & search on list view (`GET /api/tasks?page=&q=` pattern).
- Dockerize API + Mongo; CI/CD for Angular build artifacts.
- Unit tests (Jest for backend, Karma/Jasmine or Vitest for Angular).

---

**License:** MIT

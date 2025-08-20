# TaskForge Angular (2+) Frontend

This directory contains a modern Angular frontend for **TaskForge**, manually crafted to mimic the structure produced by the Angular CLI. It features separate components for listing and editing tasks, routing, reactive forms and an HTTP service for communicating with the backend API.

## Prerequisites

* **Node.js** and **npm** installed on your system.
* The TaskForge backend running locally (see `../backend/README.md`).

## Setup

1. Navigate into this `frontend-ng` directory:

   ```bash
   cd frontend-ng
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   > **Note:** Installation cannot be performed in the current environment due to restricted access to the npm registry. You must run this step on your own machine.

3. Start the Angular development server with proxying to the backend:

   ```bash
   ng serve --proxy-config proxy.conf.json
   ```

   This serves the app at `http://localhost:4200` and proxies API calls (`/api`) to `http://localhost:5000`.

## Features

* **Tasks List** – Displays a list of tasks retrieved from the backend. You can toggle completion, edit or delete tasks.
* **Task Form** – Create a new task or edit an existing one. The form uses reactive forms with validation.
* **Routing** – Navigate between the task list (`/`), create task (`/create`), and edit task (`/edit/:id`).
* **Service Layer** – All HTTP communication is encapsulated in `TaskService` for easy reuse.

## Modifying the API URL

The API base URL is defined in `src/environments/environment.ts`. If your backend runs on a different host or port, update the `apiUrl` value accordingly.

## Building for Production

To generate an optimised build for production, run:

```bash
ng build --configuration production
```

The compiled files will be placed in `dist/taskforge-client`. You can then deploy this folder to a static web server.

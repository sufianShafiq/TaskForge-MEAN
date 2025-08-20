# TaskForge – MEAN Stack Task Manager

TaskForge is a simple yet complete **MEAN** (MongoDB, Express, Angular, Node.js) project that demonstrates how to build a full‑stack web application. The application lets users create, view, update and delete tasks. The backend uses **Node.js**, **Express** and **MongoDB** (via Mongoose), and the frontend is a modern Angular (2+) application with components, routing and reactive forms (located in `frontend-ng`).

This project is designed to run on **Windows 11**, but can also run on other platforms.

## Project Structure

```
TaskForge/
├─ backend/       # Express server and API routes
│  ├─ models/     # Mongoose models
│  ├─ routes/     # API route definitions
│  ├─ server.js   # Entry point for the backend
│  ├─ package.json
│  └─ README.md
├─ frontend-ng/   # Angular (2+) client with components and routing
│  ├─ angular.json
│  ├─ package.json
│  ├─ proxy.conf.json
│  ├─ tsconfig.json
│  ├─ tsconfig.app.json
│  └─ src/
│     ├─ index.html
│     ├─ main.ts
│     ├─ polyfills.ts
│     ├─ styles.css
│     ├─ environments/
│     │  ├─ environment.ts
│     │  └─ environment.prod.ts
│     └─ app/
│        ├─ app.module.ts
│        ├─ app-routing.module.ts
│        ├─ app.component.ts
│        ├─ app.component.html
│        ├─ services/
│        │  └─ task.service.ts
│        ├─ tasks-list/
│        │  ├─ tasks-list.component.ts
│        │  ├─ tasks-list.component.html
│        │  └─ tasks-list.component.css
│        └─ task-form/
│           ├─ task-form.component.ts
│           ├─ task-form.component.html
│           └─ task-form.component.css
└─ README.md      # This file
```

## Prerequisites

Before running TaskForge on a Windows 11 machine, ensure that you have the following software installed:

1. **Node.js** – Download and install the latest LTS version from [nodejs.org](https://nodejs.org/). The installer includes `npm` (Node Package Manager).
2. **MongoDB** – Install MongoDB Community Server from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community) or set up a cloud database using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. **A code editor** (optional but recommended), such as [Visual Studio Code](https://code.visualstudio.com/).

If you plan to serve the frontend with a local static server, you can also install the `http-server` package globally:

```bash
npm install -g http-server
```

## Setup Instructions

1. **Clone or extract this repository** on your Windows 11 machine.

2. **Backend Setup**:
   1. Open a terminal (PowerShell or Command Prompt) and navigate to the `backend` directory:

      ```powershell
      cd TaskForge\backend
      ```

   2. Install the backend dependencies (this reads `package.json` and installs Express, Mongoose, etc.):

      ```powershell
      npm install
      ```

   3. Ensure MongoDB is running locally on its default port (`mongodb://localhost:27017`). If using MongoDB Atlas or a different setup, create a `.env` file in the `backend` directory and specify your connection string:

      ```env
      MONGODB_URI=your-mongodb-connection-string
      PORT=5000
      ```

   4. Start the backend server:

      ```powershell
      npm start
      ```

      The API will be available at `http://localhost:5000/api/tasks`.

3. **Frontend Setup**:

   Navigate to the `frontend-ng` directory and install dependencies:

   ```powershell
   cd TaskForge\frontend-ng
   npm install
   ```

   Then start the Angular dev server (which proxies API requests to the backend) with:

   ```powershell
   ng serve --proxy-config proxy.conf.json
   ```

   This will launch the app at `http://localhost:4200`. You can navigate to `/create` to add a new task, `/edit/:id` to edit an existing task, and see a list of tasks on the home route.

## Customisation

* **API Endpoint:** If your backend server runs on a different host or port, edit the `apiUrl` value in `frontend-ng/src/environments/environment.ts`.
* **MongoDB Connection:** Modify the `MONGODB_URI` in `backend/server.js` or via a `.env` file to point to your MongoDB instance.
* **Styling:** Adjust colours, fonts and layout by editing `frontend-ng/src/styles.css` and component‑specific CSS files.

## Known Limitations

* Because this environment cannot access the npm registry, none of the Node or Angular packages are installed by default. You will need to run `npm install` on your own machine to fetch dependencies before running the backend or the Angular frontend.
* The Angular frontend included in `frontend-ng` was created manually following Angular CLI conventions. It may lack some advanced features provided out‑of‑the‑box by `ng new`. Feel free to extend it as needed.

## Contributing

Feel free to extend TaskForge by adding features such as user authentication, task categories, due dates, or other improvements. Pull requests and contributions are welcome.

## License

This project is licensed under the MIT License.

# TaskForge Backend

This directory contains the **TaskForge** API built with Express.js and MongoDB. The API provides CRUD endpoints for managing tasks. Each task has a title, optional description, and a completion flag.

## Prerequisites

* **Node.js** (version ≥ 14 recommended).
* **npm** (installed with Node.js).
* **MongoDB** server. You can install MongoDB locally or use a cloud‑hosted instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Setup

1. Navigate to this `backend` directory.

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   npm install express mongoose cors dotenv
   npm install -D nodemon
   ```

3. Create a `.env` file (optional) in the `backend` directory to override the default port (`5000`) and MongoDB connection URI. Example:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskforge
   ```

4. Start the server in development mode using **nodemon** (auto‑reloads on file changes):

   ```bash
   npm run dev
   ```

   Or start normally:

   ```bash
   npm start
   ```

The API will be running at `http://localhost:5000`. The base route responds with a welcome message, and the task API is available at `/api/tasks`.

## API Endpoints

| Method | Endpoint           | Description                         |
|-------:|:-------------------|:------------------------------------|
| **GET**| `/api/tasks`       | Retrieve all tasks.                 |
| **GET**| `/api/tasks/:id`   | Retrieve a single task by ID.       |
| **POST**| `/api/tasks`       | Create a new task.                  |
| **PUT**| `/api/tasks/:id`   | Update a task by ID.                |
| **DELETE**| `/api/tasks/:id` | Delete a task by ID.                |

## Data Model

```json
{
  "title": "string",        // Required
  "description": "string",  // Optional
  "completed": false         // Defaults to false
}
```

The API returns tasks with automatically managed `createdAt` and `updatedAt` timestamps.

## Testing the API

After starting the server, you can test the endpoints using tools like [Postman](https://www.postman.com/) or `curl`. For example, to create a task:

```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Write documentation","description":"Create project README","completed":false}'
```

## Notes

* The database connection URI defaults to `mongodb://localhost:27017/taskforge`. If you're using MongoDB Atlas or a different host, set the `MONGODB_URI` environment variable accordingly.
* This backend is designed to work seamlessly with the Angular frontend located in the `../frontend` directory.

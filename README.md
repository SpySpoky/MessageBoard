# MessageBoard

A full-stack message board application built with **React, Node.js, Express, and MySQL**.

Users can create, view, edit, and delete messages through a responsive interface built with Bootstrap. The application communicates with a REST API using the Fetch API and stores messages in a MySQL database.

## Tech Stack

**Frontend**
- React (Vite)
- JavaScript (ES6+)
- Bootstrap 5
- Fetch API

**Backend**
- Node.js
- Express 5
- MySQL (mysql2/promise)
- CORS
- dotenv

## Features

- Create and publish messages
- View messages stored in MySQL
- Edit existing messages
- Delete messages
- Partially update message text using PATCH
- RESTful API with Express Router
- Input validation and error handling
- Reusable React components

## Project Structure

```text
MessageBoard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── middleware/
│   │   ├── routes/
│   │   │   └── messageRouter.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MessageForm.jsx
│   │   │   ├── MessageList.jsx
│   │   │   └── MessageCard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/MessageBoard.git
cd MessageBoard
```

### 2. Set up MySQL

Create a database and table:

```sql
CREATE DATABASE message_board;

USE message_board;

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Configure Backend

Create a `.env` file inside the `backend` directory:

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=message_board
```

Install dependencies and start the server:

```bash
cd backend
npm install
npm run dev
```

Backend runs at `http://localhost:4200`.

### 4. Configure Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173` by default.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/messages` | Retrieve all messages |
| POST | `/messages` | Create a new message |
| PUT | `/messages/:id` | Update an entire message |
| PATCH | `/messages/:id` | Update message text |
| DELETE | `/messages/:id` | Delete a message |

### Example POST Request

```http
POST http://localhost:4200/messages
Content-Type: application/json
```

```json
{
    "name": "John",
    "text": "Hello from MessageBoard!"
}
```

### Example PATCH Request

```http
PATCH http://localhost:4200/messages/1
Content-Type: application/json
```

```json
{
    "text": "Updated message!"
}
```

## React Components

- **MessageForm** — handles message creation.
- **MessageList** — displays the collection of messages.
- **MessageCard** — displays an individual message and provides editing and deletion controls.
- **App** — manages application state and API requests.

## Future Improvements

- User authentication and authorization
- Pagination and search
- Improved form validation
- Loading states and user-friendly error messages
- Automated API tests

## Project Status

Educational full-stack CRUD application developed to practice React, Express Router, REST API design, and MySQL integration.
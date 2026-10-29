# MessageBoard

- `frontend/` — React + Vite (http://localhost:5173)
- `backend/` — Node.js + Express + CORS (http://localhost:5000)

## Run

Terminal 1:
```
cd backend
npm install
npm run dev
```

Terminal 2:
```
cd frontend
npm install
npm run dev
```

API: `GET /api/health`, `GET /api/messages`, `POST /api/messages` `{ "author": "...", "text": "..." }`

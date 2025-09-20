# Todo App - Backend

This folder contains the Express backend for the Todo app. The backend is prepared to run both locally and as a Vercel Serverless Function.

## Local development

1. Copy `.env` and set `MONGO_URI`:

```
MONGO_URI=your-mongodb-connection-string
```

2. Install dependencies and run development server:

```powershell
cd backend/todo-app/backend
npm install
npm run dev
```

Server will run on `http://localhost:5000`.

## Vercel deployment notes

- Vercel will use the `api/index.js` serverless handler.
- Make sure to add the `MONGO_URI` environment variable in Vercel project settings.
- The Express app is exported without immediately listening so Vercel can invoke it safely.

If you see `500: INTERNAL_SERVER_ERROR` on Vercel, check the function logs and ensure `MONGO_URI` is set and valid. Also check that your MongoDB Atlas network access permits Vercel IPs (or use `0.0.0.0/0` during testing).
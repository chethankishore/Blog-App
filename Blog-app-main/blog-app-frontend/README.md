# MyBlog — Frontend

A React-based frontend for the MyBlog platform. Supports three roles: **User**, **Author**, and **Admin** with protected routes and JWT-based authentication.

---

## 🚀 Live URL

```
https://blog-app-bice-three-91.vercel.app
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| React Router | Client-side routing |
| Zustand | State management |
| Axios | HTTP requests |
| React Hook Form | Form handling |
| React Hot Toast | Notifications |
| Tailwind CSS | Styling |

---

## 📁 Project Structure

```
BLOG-APP-FRONTEND/
├── src/
│   ├── components/
│   │   ├── ArticleByID.jsx     # Single article view + comments
│   │   ├── AuthorArticles.jsx  # Author's article list
│   │   ├── EditArticleForm.jsx # Edit article form
│   │   └── ...
│   ├── pages/
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Register page
│   │   ├── UserProfile.jsx     # User dashboard
│   │   └── ...
│   ├── store/
│   │   └── authStore.js        # Zustand auth store
│   ├── styles/
│   │   └── common.js           # Shared Tailwind classes
│   └── main.jsx                # Entry point
├── vercel.json                 # Vercel proxy config
├── .env                        # Environment variables
└── index.html
```

---

## ⚙️ Environment Variables

Create a `.env` file in the frontend root:

```env
VITE_API_URL=https://blog-app-1-li4z.onrender.com
```

---

## 📦 Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/chethankishore/Blog-App.git

# Go to frontend folder
cd BLOG-APP-FRONTEND

# Install dependencies
npm install

# Start dev server
npm run dev
```

App runs on `http://localhost:5173`

---

## 🔐 Authentication Flow

1. User logs in → backend returns JWT token
2. Token stored and sent in `Authorization: Bearer <token>` header
3. On page refresh → `checkAuth()` verifies token with backend
4. Protected routes redirect to `/login` if not authenticated

---

## 🗺️ Routes

| Path | Component | Access |
|---|---|---|
| `/` | Home | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/user-profile` | UserProfile | User |
| `/author-profile` | AuthorProfile | Author |
| `/admin-profile` | AdminProfile | Admin |
| `/article/:id` | ArticleByID | User / Author |
| `/edit-article` | EditArticleForm | Author |

---

## 👥 Role-Based Features

### 👤 User
- Register and login
- Browse and read all active articles
- Add comments to articles
- View personal profile

### ✍️ Author
- Register and login
- Create new articles with rich content
- Edit their own articles
- Delete (soft delete) or restore their own articles
- View their article dashboard

### 🔧 Admin
- Login (no registration — created manually in DB)
- View all registered users and authors
- Block or unblock users and authors

---

## 📡 API Integration

All API calls go through the backend at:
```
https://blog-app-1-li4z.onrender.com
```

Protected routes include the JWT token in headers:
```js
{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
```

---

## 🚀 Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 📝 License

MIT
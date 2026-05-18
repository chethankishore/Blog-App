# MyBlog — Backend

A RESTful API for the MyBlog platform built with Node.js, Express, and MongoDB. Supports three roles: **User**, **Author**, and **Admin**.

---

## 🚀 Live URL

```
https://blog-app-1-li4z.onrender.com
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Cloudinary | Image storage |
| Multer | File uploads |
| dotenv | Environment variables |
| CORS | Cross-origin requests |

---

## 📁 Project Structure

```
BLOG-APP-BACKEND/
├── APIs/
│   ├── UserAPI.js        # User routes
│   ├── AuthorAPI.js      # Author routes
│   ├── AdminAPI.js       # Admin routes
│   └── CommonAPI.js      # Auth routes (login, logout)
├── config/
│   ├── cloudinary.js     # Cloudinary config
│   ├── cloudinaryUpload.js
│   └── multer.js         # Multer config
├── middlewares/
│   └── verifyToken.js    # JWT middleware
├── models/
│   ├── UserModel.js      # User schema
│   └── ArticleModel.js   # Article schema
├── services/
│   └── authService.js    # register & authenticate
├── .env                  # Environment variables
└── server.js             # Entry point
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📦 Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/chethankishore/Blog-App.git

# Go to backend folder
cd BLOG-APP-BACKEND

# Install dependencies
npm install

# Start server
node server.js
```

Server runs on `http://localhost:5000`

---

## 🔐 Authentication

JWT token is used for authentication. After login, the token is returned in the response and must be sent in the `Authorization` header for protected routes:

```
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### Common (Public)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/common-api/login` | Login (User / Author / Admin) |
| GET | `/common-api/logout` | Logout |
| GET | `/common-api/check-auth` | Verify token on page refresh |
| PUT | `/common-api/change-password` | Change password |

---

### User Routes

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/user-api/users` | Public | Register new user |
| GET | `/user-api/articles` | User | Read all active articles |
| PUT | `/user-api/articles` | User | Add comment to article |

---

### Author Routes

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/author-api/users` | Public | Register new author |
| POST | `/author-api/articles` | Author | Create new article |
| GET | `/author-api/articles/:authorId` | Author | Get own articles |
| PUT | `/author-api/articles` | Author | Edit own article |
| PATCH | `/author-api/articles/:id/status` | Author | Delete / Restore article |

---

### Admin Routes

| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/admin-api/users` | Admin | Get all users |
| GET | `/admin-api/authors` | Admin | Get all authors |
| PATCH | `/admin-api/users/:id/status` | Admin | Block / Unblock user |
| PATCH | `/admin-api/authors/:id/status` | Admin | Block / Unblock author |

---

## 👥 Roles & Permissions

| Feature | User | Author | Admin |
|---|---|---|---|
| Register / Login | ✅ | ✅ | ✅ |
| Read articles | ✅ | ✅ | ✅ |
| Comment on articles | ✅ | ❌ | ❌ |
| Create articles | ❌ | ✅ | ❌ |
| Edit own articles | ❌ | ✅ | ❌ |
| Delete / Restore own articles | ❌ | ✅ | ❌ |
| Manage users & authors | ❌ | ❌ | ✅ |

---

## 🚀 Deployment

Deployed on **Render** (Free tier).

> Note: Free tier spins down after inactivity. First request may take 50+ seconds.

---

## 📝 License

MIT
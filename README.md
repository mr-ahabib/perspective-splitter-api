<h1 align="center">🧠 Perspective Splitter API 💬</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&center=true&width=435&lines=Split+your+perspective;Think+critically+%E2%9C%94%EF%B8%8F;Reflect+deeply+%F0%9F%A7%91%E2%80%8D%F0%9F%94%96" alt="Typing SVG" />
</p>

---
# installation Packages
npm init -y
npm install express mysql2 sequelize dotenv bcryptjs jsonwebtoken cors
npm install --save-dev nodemon
---
## 📜 Project Overview

**Perspective Splitter** is a unique backend API designed to power apps that foster critical thinking and self-reflection.

### 🧩 What it does:
- 🔐 Secure user authentication using JWT
- ✍️ Authenticated users can create *perspectives* (title + content)
- 🗂️ Users can view all their own perspectives
- ❌ Users can delete *only* their own entries
- 🔒 Protected routes with middleware authentication

💡 The idea:  
> Users express their opinion on a topic, then challenge themselves to write the **opposite viewpoint**.  
> This builds empathy, self-awareness, and mental flexibility.

---

## 🚀 Installation & Setup

Clone the project and install dependencies:

```bash
git clone https://github.com/mr-ahabib/perspective-splitter-api.git
cd perspective-splitter-api
npm install
node server.js
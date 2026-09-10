# 🚀 Node.js Backend & API Learning Hub

A practical repository documenting my journey learning backend development from scratch. This project covers core backend engineering concepts, server-side rendering, RESTful APIs, and request/response lifecycles built using modern JavaScript (ES Modules).

---

## 🛠️ Tech Stack

* **Runtime:** Node.js (v22+)
* **Framework:** Express.js
* **Templating Engine:** EJS (Embedded JavaScript)
* **Data Interchange:** JSON / REST APIs
* **Middleware:** Express Built-in Parsers (`express.urlencoded`, `express.json`)

---

## 📚 Key Concepts Covered

* **Express Web Server:** Routes (`GET`, `POST`), HTTP status codes, and server creation.
* **Dynamic Views with EJS:** Passing backend data to HTML, using partials, and conditional rendering.
* **REST API Integration:** Consuming third-party web APIs using native `fetch` / `axios` and serving API endpoints.
* **Middleware & Forms:** Parsing incoming body data from HTML forms and handling POST requests safely.
* **Directory Resolution:** Using `import.meta.url` with Node's `path` and `url` modules for static assets.

---

## 📂 Folder Structure

```text
├── public/              # Static assets (CSS, images, client JS)
├── views/               # EJS template files
│   ├── partials/        # Reusable view components (header, footer)
│   └── index.ejs        # Main homepage view
├── index.js             # Express server & main entry point
├── package.json         # Project metadata & dependencies
└── README.md            # Project documentation
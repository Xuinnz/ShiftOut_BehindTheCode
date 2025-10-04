# Welcome to the Shift Out: Behind the Code!

## Prerequisites

Before you begin, please make sure you have the following:

- **Node.js**: [Download Node.js](https://nodejs.org/)  
  Node.js lets you run JavaScript code on your computer.  
- **HTTPie**: [Download HTTPie](https://httpie.io/) _(optional but recommended)_  
  HTTPie makes it easy to test your APIs from the command line.
- **A Web Browser** (like Chrome, Firefox, or Edge)  
  You can also use your browser to test GET requests.

---

## Week 1: Introduction to Backend + APIs

This week, you'll learn how to get the code, install what's needed, run your server, and test it in a few different ways.

### 1. Get the Project Files

**Option 1: Download as ZIP**  
- Click the green “Code” button on the GitHub page:  
  [https://github.com/Xuinnz/ShiftOut_BehindTheCode](https://github.com/Xuinnz/ShiftOut_BehindTheCode)
- Choose **Download ZIP**
- Unzip the folder somewhere on your computer

**Option 2: Use Git (Advanced)**  
If you have Git installed, you can run:
```bash
git clone https://github.com/Xuinnz/ShiftOut_BehindTheCode.git
cd ShiftOut_BehindTheCode
```
_Both options will give you the same files!_

---

### 2. Install the Dependencies

Open a terminal (Command Prompt, PowerShell, or Terminal app), navigate to the project folder, and run:

```bash
npm install
```

This installs everything your project needs—most importantly, Express.

---

### 3. Run the Server

Still in your project folder, start the server with:

```bash
node server.js
```

You should see a message like:  
`Server is running on http://localhost:3000`

---

### 4. Try Out Your API

#### Option 1: Using Your Web Browser

Open your browser and go to:  
[http://localhost:3000/](http://localhost:3000/)  
You should see a welcome message from your server!

#### Option 2: Using HTTPie

First, install HTTPie if you haven't yet: [https://httpie.io/download](https://httpie.io/download)

**GET request:**
```bash
http GET http://localhost:3000/
```

**POST request:**  
If your server supports POST (check `server.js` for a POST route!), you can try:

```bash
http POST http://localhost:3000/ key1=value1 key2=value2
```
_This sends data to your server. Change `key1` and `key2` as needed based on your server code._

#### Option 3: Using cURL

**GET request:**
```bash
curl http://localhost:3000/
```

**POST request (sending JSON):**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"key1":"value1","key2":"value2"}' http://localhost:3000/
```
_Replace `key1`/`value1` as needed._

---
## More Weeks Coming Soon

Each week, check here for new instructions, code, and projects!

Happy coding!

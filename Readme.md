# [Bassir Jafarzadeh] Build Ecommerce Website Like Amazon [React & Node & MongoDB] [ENG, 2021]

<br/>

# Amazona ECommerce Website

![amazona](/img/amazona.jpg)

<br/>

**Original src:**  
https://github.com/basir/amazona

<br/>

### Demo Website

- 👉 Heroku : [https://newamazona-final.herokuapp.com](https://newamazona-final.herokuapp.com)
- 👉 AWS : [https://amazona.webacademy.pro](https://amazona.webacademy.pro)

<br/>

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/webmakaka/Build-Ecommerce-Website-Like-Amazon-React-Node-MongoDB
$ cd Build-Ecommerce-Website-Like-Amazon-React-Node-MongoDB
```

### 2. Setup MongoDB

```
$ cd app/api
$ docker-compose up
```

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
$ cd client
$ npm install
$ npm start
```

### 5. Seed Users and Products

```
// It returns admin email and password
$ curl http://localhost:5000/api/users/seed \
    | python -m json.tool

//It creates 6 sample products
$ curl http://localhost:5000/api/products/seed \
    | python -m json.tool
```

### 6. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin.

<br/>

```
admin@example.com 1234
user@example.com 1234
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>

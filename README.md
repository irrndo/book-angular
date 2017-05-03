(Resubido porque git no había añadido la carpeta /bookmanager con el codigo del frontend)

# Book Manager 1.0

LIVE DEMO: http://82.196.3.109

```
/bookmanager --> Angular Frontend
/books-backend --> Node.js Backend (and static files of frontend)

			  -version-a --> Without MongoDB
			  -version-b --> With MongoDB
```

## Instructions

### 1. Clone repository

```
git clone https://github.com/irrndo/book-angular.git
```

### 3. Choose project

```
cd bookmanager
```

```
cd books-backend-version-a
```

```
cd books-backend-version-b
```

### 2. Install dependencies

```
npm install
```

### 2.1 If running version with MongoDB

Start MongoDB and create database 'books'

```
mongod
use books
```

### 3. Run the application

```
npm start
```

### 4. Browse the app: 

Node.js project: http://localhost:3000


Angular project: http://localhost:4200




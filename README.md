
---

# Shopping Cart Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Redux Setup](#redux-setup)
- [Context API](#context-api)
- [Running Tests](#running-tests)

## Introduction
The Greatswords Shopping Cart Application is a React-based web application where users can browse, filter, and add greatswords to their shopping cart. The application supports user authentication, managing state with Redux, and leverages the Context API for sharing state between components.

## Features
- User authentication (login functionality)
- Display of greatswords with the ability to filter
- Adding greatswords to the shopping
- Adding greatswords to the favourites list using drag and drop
- Modal confirmation for deleting items from the shopping cart
- Redux for state management
- Context API for passing down greatswords data

## Tech Stack
- **Frontend**: React, TypeScript, Styled Components
- **State Management**: Redux, Redux-Saga, Context API
- **Backend**: Mock API (can be replaced with a real API)
- **Testing**: Jest, React Testing Library

## Installation
1. **Create a new folder:**
   ```
   mkdir myGreatswordStore
   cd ./myGreatswordStore
   ```
2. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/greatswords-shopping-cart.git
   ```

3. **Clone the API repository:**
   ```sh
   git clone https://github.com/sigmacontreras/flask-elden-ring-api.git
   ```

4. **Create a docker-compose.yml file with the following config:**
   ```text
    services:
        frontend:
            build:
                context: ./react-redux-saga
            ports:
                - "3000:3000"
            volumes:
                - ./react-redux-saga:/app
                - /app/node_modules
            environment:
                - CHOKIDAR_USEPOLLING=true
            depends_on:
                - backend
    
        backend:
            build:
                context: ./flask-elden-ring-api
            ports:
                - "5000:5000"
            volumes:
                - ./python/eldenRingApi:/app
            environment:
                - FLASK_ENV=development
     ```

5. **Run docker-compose file:**
   ```sh
   docker compose up --build
   ```

## Usage
- **Login:** "armando.paredes@gmail.com": "123",
  "aquiles.bailo@gmail.com": "123",
  "esteban.quito": "123"
- **Browse Greatswords**: View a list of greatswords on the home page.
- **Filter Greatswords**: Use the input filter to narrow down the list.
- **Add to Cart**: Click the "Add to Cart" button to add a greatsword to your shopping cart.
- **Manage Cart**: View items in your cart and delete items with a confirmation modal.
- **Login**: Use the login form to authenticate and view the main application.

## Project Structure
```
src/
├── components/
│   ├── HomeComponent.tsx
│   ├── ItemListComponent.tsx
│   ├── LoginComponent.tsx
│   ├── ModalComponent.tsx
│   ├── ShoppingCartComponent.tsx
│   └── styles/
│       ├── App.styled.tsx
│       ├── Catalog.styled.tsx
│       ├── items/
│       ├── favorites/
│       ├── ShoppingCart.styled.tsx
│       └── Modal.styled.tsx
├── context/
│   ├── GreatSwordsContext.tsx
│   └── hook.useGreatSwords.ts
├── store/
│   ├── greatSwordsSlice.ts
│   ├── sessionSlice.ts
│   ├── rootReducer.ts
│   ├── rootSaga.ts
│   └── sessionSaga.ts
├── App.tsx
├── index.tsx
└── ... (other files)
```

## Components
- **HomeComponent**: The main container for the app's home page, fetching greatswords and providing context.
- **ItemListComponent**: Displays a list of greatswords and allows adding them to the cart.
- **LoginComponent**: Handles user login.
- **ModalComponent**: A reusable modal for confirming actions.
- **ShoppingCartComponent**: Displays items in the shopping cart and handles deletion with confirmation.

## Redux Setup
### greatSwordsSlice.ts
Manages the state related to greatswords, including actions for fetching all greatswords.

### sessionSlice.ts
Manages the state related to user sessions, including actions for creating and updating sessions.

### rootReducer.ts
Combines all reducers into a single root reducer.

### rootSaga.ts
Combines all sagas and initializes them.

## Context API
### GreatSwordsContext.tsx
Provides greatswords data to child components using React's Context API.

### hook.useGreatSwords.ts
A custom hook for accessing the GreatSwordsContext.

## Running Tests
```sh
npm test
```
This will run the Jest test suite.


---
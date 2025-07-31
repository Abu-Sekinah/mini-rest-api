# Mini REST API with Express.js

## Description
A simple REST API built using Node.js and Express.js that supports basic CRUD operations.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. The API runs on `http://localhost:3000`.

## API Endpoints

### Root
- `GET /`  
  **Response**: `"Hello, World!"`

### Items

#### Get All Items
- `GET /items`

#### Get Single Item
- `GET /items/:id`

#### Create Item
- `POST /items`
- **Body**:
```json
{
  "name": "New Item",
  "description": "Description here"
}
```

#### Update Item
- `PUT /items/:id`
- **Body**:
```json
{
  "name": "Updated Item",
  "description": "Updated description"
}
```

#### Delete Item
- `DELETE /items/:id`

## Error Handling
- 400: Invalid input
- 404: Not Found
- 500: Server Error

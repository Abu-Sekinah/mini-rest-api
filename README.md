# Mini REST API

This is a simple REST API built with Node.js and Express.js to manage a list of items in-memory.

## Setup

```bash
npm install
npm start
```

## API Endpoints

### GET /items
- Returns a list of items

**Response:**
```json
[
  {
    "id": 1,
    "name": "Item One",
    "description": "First item"
  }
]
```

### GET /items/:id
- Returns an item by ID
- 404 if not found

### POST /items
- Adds a new item
- Requires: `name` (string), `description` (string)

**Body Example:**
```json
{
  "name": "New Item",
  "description": "Description here"
}
```

### PUT /items/:id
- Updates an existing item

### DELETE /items/:id
- Deletes an item

## Error Handling

- Invalid input: 400
- Not found: 404
- Server error: 500

## Testing

Use the included Postman collection: `mini-rest-api.postman_collection.json`

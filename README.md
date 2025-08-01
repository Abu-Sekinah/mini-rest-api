# Mini REST API

A simple RESTful API built with Node.js and Express.

## Setup

```bash
npm install
npm start
```

## API Endpoints

### GET /

Returns Hello World message.

### GET /items

Returns a list of all items.

### GET /items/:id

Returns a single item by ID.

### POST /items

Creates a new item.

**Body:**
```json
{
  "name": "Item name",
  "description": "Item description"
}
```

### PUT /items/:id

Updates an existing item by ID.

**Body:**
```json
{
  "name": "Updated name",
  "description": "Updated description"
}
```

### DELETE /items/:id

Deletes an item by ID.

## Error Handling

Returns appropriate 400, 404, and 500 error messages.

## Testing

Use the provided Postman collection: `mini-rest-api.postman_collection.json`
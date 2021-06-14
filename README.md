# Node.js RESTful API Example

An example about how to create a RESTful API using Express.js.
The four CRUD operations are provided: create, read, update and delete records.
This server keeps an array of JSON objects in memory and runs the CRUD operations on it.
If the server is restarted everything returns to the initial configuration (12 inventory objects).

## Installation

1.  Install Dependencies

    - [Node.js (version 6.x is recommended)](https://nodejs.org/en/)

2.  Go to the project's root directory **cd /my/path/to/directory**
3.  Run **npm install**
4.  Start using it! **npm start**

## Available end-points

### GET /inventories

Gets all the available inventories (12 sample inventories).

### GET /inventories/:id

Obtains an inventory given its id.

### POST /inventories

Creates an inventory (be sure you are sending the headers via your library).

**Headers**

Content-Type : application/json

**Request body (raw)**

```
    {
        "topics": "",
        "thumbnail": "/img/tr-3.jpeg",
        "url": "index.html",
        "overrideURL": "",
        "linkType": "",
        "title": "Created by Postman",
        "summary": "Lorem ipsum dolor sit amet"
    }
```

### PUT /inventories/:id

Updates an existing inventory. The JSON object must be passed in the request body as raw. It returns an error in case the inventory doesn't exist.

**Headers**

Content-Type : application/json

**Request body (raw)**

```
    {
        "id": "13",
        "topics": "",
        "thumbnail": "/img/tr-3.jpeg",
        "url": "index.html",
        "overrideURL": "",
        "linkType": "",
        "title": "Updated by Postman",
        "summary": "Lorem ipsum dolor sit amet"
    }
```

### DELETE /inventories/:id

Removes an inventory given its id.

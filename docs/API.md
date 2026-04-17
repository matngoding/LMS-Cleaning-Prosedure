# API Documentation

## Authentication Endpoint

### Request
```
POST /api/auth/login
Content-Type: application/json

{
  "username": "exampleUser",
  "password": "examplePassword"
}
```

### Response
```
{
  "token": "exampleToken",
  "expires_in": 3600,
  "user": {
    "id": 1,
    "username": "exampleUser"
  }
}
```

## SOP (Standard Operating Procedure) Endpoint

### Request
```
GET /api/sop
Authorization: Bearer {token}
```

### Response
```
{
  "sops": [
    {
      "id": 1,
      "title": "Cleaning Procedure",
      "steps": [
        "Step 1: Gather materials",
        "Step 2: Start cleaning from top to bottom"
      ]
    }
  ]
}
```

## Progress Endpoint

### Request
```
GET /api/progress
Authorization: Bearer {token}
```

### Response
```
{
  "progress": {
    "completed": 75,
    "status": "In Progress"
  }
}
```

# MongoDB Schema Documentation

## User Model
- `username`: String - Unique identifier for the user.
- `email`: String - Email address of the user, must be unique.
- `password`: String - Hashed password of the user.
- `createdAt`: Date - Date when the user account was created.
- `updatedAt`: Date - Date when the user account was last updated.

## SOP Model
- `title`: String - Title of the Standard Operating Procedure.
- `description`: String - Detailed description of the SOP.
- `createdBy`: ObjectId - Reference to the User who created the SOP.
- `createdAt`: Date - Date when the SOP was created.
- `updatedAt`: Date - Date when the SOP was last updated.

## UserProgress Model
- `userId`: ObjectId - Reference to the User associated with this progress.
- `sopId`: ObjectId - Reference to the associated SOP.
- `status`: String - Current status of the user's progress (e.g., "in progress", "completed").
- `createdAt`: Date - Date when the progress was first recorded.
- `updatedAt`: Date - Date when the progress was last updated.
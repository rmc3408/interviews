# Summary

1. Run database with docker compose
2. Run backend
3. Run frontend
4. Navigate to `http://localhost:3000` and login with email `a@d.com` and password `secret@123`
<hr/>
<br />
<br />
<br />

# FrontEnd

### 🔐 **Authentication**
- Firebase authentication with email/password
- Secure sign-up and sign-in flow
- Protected routes and session management

### 📋 **Task Management**
- **Kanban Board**: Three-column layout (To Do, In Progress, Done)
- **CRUD Operations**: Create, Read all, Read one, edit, and delete tasks
- **Task Properties**:
  - Title and description
  - Priority levels (Low, Medium, High, Critical)
  - Status tracking with timestamps
  - Completion status

### 🎨 **Modern UI/UX**
- **Tailwind CSS**: Beautiful, responsive design
- **Lucide React Icons**: Consistent iconography
- **Smooth Animations**: Loading states and transitions
- **Modal Dialogs**: Intuitive task creation/editing

### 🛠 **Technical Stack**
- **React 19** with TypeScript
- **Vite** for fast development and building
- **Firebase** for authentication
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Firebase project with Authentication enabled

## Installation

1. **Navigate to the project**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Backend First**:
   🔧 Setup Instructions
      Install .NET 8 SDK if not already installed
      Setup PostgreSQL: `docker-compose up -d` (requires Docker)
      Run the application: https://localhost:5000/api/tasks
      Access Swagger UI: Navigate to https://localhost:5000/swagger

4. **Configure API endpoint**:
   - Future need to update the `API_BASE_URL` in `src/services/taskService.ts` to point to your .NET API

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to `http://localhost:3000` and login with email `a@d.com` and password `secret@123`


### Authentication
1. Register a new account or sign in with existing credentials
2. The app automatically redirects to the task board upon successful authentication

### Managing Tasks
1. **Create Task**: Click "Add Task" button or the "+" icon in any column
2. **Edit Task**: Click the edit icon on any task card
3. **Delete Task**: Click the trash icon on any task card
4. **Move Tasks**: Drag and drop tasks between columns
5. **Priority Levels**: Set task priority (Low, Medium, High, Critical)

## Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication with Email/Password provider
3. Get your Firebase configuration and update `src/firebase.ts`

## API Integration

The frontend integrates with the .NET 8 Tasks API. Make sure to:

1. Update the API base URL in `src/services/taskService.ts`
2. Ensure the .NET API is running and accessible
3. Configure CORS in the .NET API to allow your frontend domain

<br /><br /><br /><hr />

# BACKEND API

A .NET 8 Web API project for managing tasks with PostgreSQL database integration.

## Features

- **CRUD Operations**: Create, Read, Update, Delete tasks
- **Task Properties**: 
  - Title (required)
  - Description (optional)
  - Completion status
  - Priority levels (Low, Medium, High, Critical)
  - Timestamps (Created, Updated, Completed)
- **Additional Endpoints**:
  - Filter tasks by completion status
  - Filter tasks by priority
  - Mark tasks as complete/incomplete
- **PostgreSQL Integration**: Using Entity Framework Core
- **API Documentation**: Swagger/OpenAPI integration
- **CORS Enabled**: For frontend integration

## Prerequisites

- .NET 8 SDK
- PostgreSQL database server
- VS Code

## Installation

1. **Database Configuration**:
   - Update the connection string in `appsettings.json` and `appsettings.Development.json`
   - Replace `yourpassword` with your PostgreSQL password
   - Ensure PostgreSQL is running on your machine

2. **Install Dependencies**:
   ```bash
   dotnet restore
   ```

3. **Run the Application**:
   ```bash
   dotnet run
   ```

4. **Access Swagger UI**:
   - Navigate to `https://localhost:5000/swagger` (port may vary)
   - Use the interactive API documentation to test endpoints

## API Endpoints

### Tasks CRUD
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{id}` - Get task by ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task

### Filtering
- `GET /api/tasks/status/{isCompleted}` - Get tasks by completion status
- `GET /api/tasks/priority/{priority}` - Get tasks by priority

### Actions
- `PATCH /api/tasks/{id}/complete` - Mark task as completed
- `PATCH /api/tasks/{id}/incomplete` - Mark task as incomplete

## Database Schema

The `TaskItem` entity includes:
- `Id` (Primary Key)
- `Title` (Required, Max 200 characters)
- `Description` (Optional, Max 1000 characters)
- `IsCompleted` (Boolean)
- `CreatedAt` (DateTime)
- `UpdatedAt` (DateTime, nullable)
- `CompletedAt` (DateTime, nullable)
- `Priority` (Enum: Low, Medium, High, Critical)

## Example Request Bodies

### Create Task
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive documentation for the API",
  "priority": 2
}
```

### Update Task
```json
{
  "title": "Updated task title",
  "description": "Updated description",
  "isCompleted": true,
  "priority": 3
}
```


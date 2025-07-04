# Tasks API Setup Guide

## Instalation

1. **Install Prerequisites**:
   - [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
   - [PostgreSQL](https://www.postgresql.org/download/) or use Docker

2. **Setup Database**:
   
   **Option A: Using Docker (Recommended)**
   ```powershell
   docker-compose up -d
   ```
   
   **Option B: Local PostgreSQL**
   - Create a database named `TasksDB`
   - Update connection strings in `appsettings.json` and `appsettings.Development.json`

3. **Run the Application**:
   ```powershell
   cd TasksAPI
   dotnet restore
   dotnet run
   ```

4. **Access the API**:
   - Swagger UI: https://localhost:5000/swagger
   - API Base URL: https://localhost:5000/api/tasks

## Available Commands

```powershell
# Restore packages
dotnet restore

# Build the solution
dotnet build

# Run the API
dotnet run --project TasksAPI

# Run tests
dotnet test

# Check for outdated packages
dotnet list package --outdated
```

## Environment Variables

You can override the database connection using environment variables:

```powershell
$env:ConnectionStrings__DefaultConnection = "Host=your-host;Database=TasksDB;Username=your-user;Password=your-password"
```

## Testing the API

Use the Swagger interface or tools like Postman/curl:

```bash
# Get all tasks
curl -X GET "https://localhost:5000/api/tasks"

# Create a new task
curl -X POST "https://localhost:5000/api/tasks" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Task",
    "description": "This is a test task",
    "priority": 2
  }'

# Update a task
curl -X PUT "https://localhost:5000/api/tasks/1" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Task",
    "isCompleted": true
  }'
```

## Project Structure

```
TasksAPI/
├── Controllers/         # API Controllers
├── Data/               # Database Context
├── DTOs/               # Data Transfer Objects
├── Models/             # Entity Models
├── Services/           # Business Logic
├── Properties/         # Launch Settings
├── appsettings.json    # Configuration
└── Program.cs          # Application Entry Point

TasksAPI.Tests/
└── TaskServiceTests.cs # Unit Tests
```

## Database Schema

The application will automatically create the database schema on first run. The main entity is:

- **TaskItem**: Id, Title, Description, IsCompleted, CreatedAt, UpdatedAt, CompletedAt, Priority

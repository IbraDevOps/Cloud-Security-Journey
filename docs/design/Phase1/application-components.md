# Application Components

The Employee Management System is divided into several logical components.

## Web Frontend

Provides the user interface for employees, HR, Finance, Security, Developers, and management.

The frontend communicates with the backend through authenticated API requests.

It does not directly access the database.

---

## Backend API

The Backend API acts as the main application interface.

Responsibilities include:

- Receiving client requests
- Validating requests
- Enforcing authorization
- Calling application modules
- Returning responses
- Generating relevant audit events

---

## Authentication & Authorization

Responsible for establishing user identity and determining what authenticated users are allowed to do.

Responsibilities:

- Login
- Logout
- Session/token management
- Role validation
- Access-control enforcement

Application roles include:

- CEO
- Human Resources
- Finance
- Developer
- Security
- Employee

---

## Employee Management

Handles employee information.

Examples:

- Create employee
- View employee
- Update employee
- Manage department information
- Manage employment status

---

## Payroll Management

Handles payroll-related information.

Examples:

- View salary information
- Update payroll records
- View payroll history

Access is restricted primarily to authorized Finance personnel.

---

## Document Management

Handles employee documents.

Examples:

- Employment contracts
- Identification documents
- HR documents
- Other employee records

Documents are stored separately from normal relational application data.

---

## Audit Logging

Records security-relevant and privileged activity.

Examples:

- Login attempts
- Employee creation
- Employee record changes
- Payroll changes
- Document access
- Role changes
- Administrative actions

Audit records should identify:

- Who performed the action
- What action occurred
- Which resource was affected
- When it occurred
- Whether the action succeeded

---

## Data Layer

The application uses two primary storage categories.

### Relational Data

Used for structured information such as:

- Employees
- Users
- Roles
- Departments
- Payroll
- Document metadata

### Document Storage

Used for files such as:

- Contracts
- Identification documents
- HR records

Application and security activity is also sent to an audit logging system.

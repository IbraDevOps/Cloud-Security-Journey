# API Design

## Objective

The backend exposes REST-style API endpoints used by the frontend.

Protected endpoints require authentication and authorization.

---

## Authentication

POST /auth/login

POST /auth/logout

GET /auth/me

---

## Employees

GET /employees

GET /employees/{employeeId}

POST /employees

PATCH /employees/{employeeId}

---

## Payroll

GET /payroll/{employeeId}

PATCH /payroll/{employeeId}

---

## Documents

GET /employees/{employeeId}/documents

POST /employees/{employeeId}/documents

GET /documents/{documentId}

---

## Audit

GET /audit/events

---

## Authorization

Authorization is enforced by the backend.

Examples:

Employee:

    GET /employees/{ownEmployeeId}

HR:

    POST /employees
    PATCH /employees/{employeeId}

Finance:

    GET /payroll/{employeeId}
    PATCH /payroll/{employeeId}

Security:

    GET /audit/events

A valid authenticated session does not automatically grant access to every resource.

Object ownership and role permissions must also be validated.

# Authentication & Authorization Flow

## Authentication

Authentication answers:

> Who is the user?

A user submits credentials to the authentication endpoint.

```mermaid
sequenceDiagram

    participant U as User
    participant F as Frontend
    participant A as Backend API
    participant DB as Database

    U->>F: Enter credentials
    F->>A: POST /auth/login
    A->>DB: Retrieve user
    DB-->>A: User record
    A->>A: Verify credentials

    alt Valid credentials
        A-->>F: Authenticated session/token
        F-->>U: Login successful
    else Invalid credentials
        A-->>F: Authentication failure
        F-->>U: Login rejected
    end
```

---

# Authorization

Authorization answers:

> What is the authenticated user allowed to do?

Authentication alone does not provide unrestricted application access.

Example:

```text
Authenticated Employee
        |
        v
GET /payroll/employee-200
        |
        v
Backend checks identity
        |
        v
Backend checks role + resource ownership
        |
        v
ALLOW or DENY
```

Authorization decisions are made by the backend and must not rely solely on frontend restrictions.

---

## Security Requirements

The authentication system should eventually support:

- Secure credential storage
- MFA for privileged accounts
- Session expiration
- Secure logout
- Failed-login monitoring
- Rate limiting
- Role-based access control
- Audit logging

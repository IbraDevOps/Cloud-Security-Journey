# Application Sequence Diagrams

Sequence diagrams document how application components interact during important business operations.

---

# HR Creates Employee

```mermaid
sequenceDiagram

    participant HR
    participant UI as Web Frontend
    participant API as Backend API
    participant AUTH as Authorization
    participant DB as Database
    participant LOG as Audit Logging

    HR->>UI: Create employee
    UI->>API: POST /employees

    API->>AUTH: Check HR permission
    AUTH-->>API: Allowed

    API->>DB: Create employee record
    DB-->>API: Employee created

    API->>LOG: Record employee creation

    API-->>UI: Success
    UI-->>HR: Employee created
```

---

# Employee Views Own Profile

```mermaid
sequenceDiagram

    participant EMP as Employee
    participant UI as Web Frontend
    participant API as Backend API
    participant AUTH as Authorization
    participant DB as Database

    EMP->>UI: View profile
    UI->>API: GET /employees/{employeeId}

    API->>AUTH: Validate identity and ownership
    AUTH-->>API: Allowed

    API->>DB: Retrieve employee
    DB-->>API: Employee record

    API-->>UI: Employee data
    UI-->>EMP: Display profile
```

---

```mermaid
sequenceDiagram
    participant EMP as Employee
    participant API as Backend API
    participant AUTH as Authorization

    EMP->>API: GET /payroll/employee-200
    API->>AUTH: Check role + ownership
    AUTH-->>API: Denied
    API-->>EMP: 403 Forbidden
```

# Finance Updates Payroll

```mermaid
sequenceDiagram

    participant FIN as Finance
    participant UI as Web Frontend
    participant API as Backend API
    participant AUTH as Authorization
    participant DB as Database
    participant LOG as Audit Logging

    FIN->>UI: Update payroll
    UI->>API: PATCH /payroll/{employeeId}

    API->>AUTH: Check Finance permission
    AUTH-->>API: Allowed

    API->>DB: Update payroll
    DB-->>API: Update successful

    API->>LOG: Record payroll modification

    API-->>UI: Success
```

---

# Employee Downloads Document

```mermaid
sequenceDiagram

    participant EMP as Employee
    participant UI as Web Frontend
    participant API as Backend API
    participant AUTH as Authorization
    participant STORE as Document Storage
    participant LOG as Audit Logging

    EMP->>UI: Request document
    UI->>API: GET /documents/{documentId}

    API->>AUTH: Validate identity and ownership
    AUTH-->>API: Allowed

    API->>STORE: Retrieve authorized document
    STORE-->>API: Document

    API->>LOG: Record document access
    API-->>UI: Return document
```

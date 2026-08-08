# Phase 0 — System Design

## 1. System Purpose

The Employee Management System allows CySentra to manage employee identities, employment records, documents, payroll information, organizational roles, and security activity.

The initial phase is technology-independent. AWS services will only be selected after the business and security requirements are understood.

---

## 2. System Users

| Role | Main Responsibility |
|---|---|
| CEO | Executive oversight and reporting |
| Human Resources | Employee onboarding and personnel management |
| Finance | Payroll and financial records |
| Developer | Application development and maintenance |
| Security Team | Monitoring, auditing, and incident response |
| Employee | Access to personal profile and documents |

---

## 3. Main Use Cases

```mermaid
flowchart TD
    HR[Human Resources] --> A[Create Employee]
    HR --> B[Update Employee Record]
    HR --> C[Upload Employment Documents]

    FIN[Finance] --> D[Manage Payroll]
    FIN --> E[View Salary Information]

    EMP[Employee] --> F[View Own Profile]
    EMP --> G[Update Limited Personal Details]
    EMP --> H[Download Own Documents]

    CEO[CEO] --> I[View Management Reports]

    SEC[Security Team] --> J[Review Audit Logs]
    SEC --> K[Investigate Suspicious Activity]

    DEV[Developer] --> L[Deploy and Maintain Application]


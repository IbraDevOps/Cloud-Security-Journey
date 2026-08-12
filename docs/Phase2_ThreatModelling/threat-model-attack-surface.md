# Attack Surface Diagram

## Data Flow Diagram

```mermaid
graph TD
    User[Attacker/User] --> F[Frontend]
    F --> API[Backend API]
    API --> Auth[Auth Service]
    API --> DB[(Database)]
    API --> S3[S3 Documents]
    API --> Audit[Audit Logging]
    API --> Secrets[Secrets Manager]

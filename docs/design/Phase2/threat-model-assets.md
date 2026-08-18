# Threat Model:Assets

## Data Assets

| Asset | Sensitivity | Why it matters |
|-------|-------------|----------------|
| Employee PII | High | GDPR/KDPA violation if exposed |
| Payroll data | High | Financial fraud risk |
| Identity documents | Critical | Identity theft risk |
| Authentication credentials | Critical | Account takeover risk |
| Application secrets | Critical | System compromise risk |
| Audit logs | Medium | Incident investigation |
| Session tokens | High | Session hijacking risk |

## System Assets

| Asset | Criticality | Why it matters |
|-------|-------------|----------------|
| Frontend (S3/CloudFront) | High | Public-facing entry point |
| Backend API | Critical | Core business logic |
| Database (RDS) | Critical | All data stored here |
| Document storage (S3) | High | Sensitive files |
| Auth service | Critical | Gatekeeper for everything |
| Audit logging system | Medium | Detect breaches |
| Secrets Manager | Critical | All secrets stored here |
| Monitoring/Alerting | Medium | Detect attacks |

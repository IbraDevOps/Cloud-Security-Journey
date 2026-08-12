# STRIDE Threat Model

## 1. Frontend (Web Application)

| Threat | Description | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Spoofing** | Attacker bypasses login | Unauthorized access | MFA, strong authentication |
| **Tampering** | Modify requests to backend | Bypass authorization | Validate all inputs server-side |
| **Repudiation** | User denies action | No accountability | Audit logs, signed requests |
| **Info Disclosure** | Session token in URL/logs | Session hijacking | Secure cookies, HTTPS only |
| **DoS** | Brute force login | Account lockouts | Rate limiting, CAPTCHA |
| **Elevation** | Client-side role change | Unauthorized access | Backend-enforced RBAC |

---

## 2. Backend API

| Threat | Description | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Spoofing** | Attacker assumes another user | IDOR/BOLA | JWT validation, ownership checks |
| **Tampering** | Modify API request payload | Data corruption | Input validation, parameterized queries |
| **Repudiation** | Admin denies changing payroll | No accountability | Audit logs (immutable) |
| **Info Disclosure** | Error messages reveal internals | Information leak | Generic error messages |
| **DoS** | Too many requests | System unavailable | Rate limiting, WAF, auto-scaling |
| **Elevation** | HR modifies payroll | Unauthorized financial change | Strict RBAC, additional approval |

---

## 3. Authentication Service

| Threat | Description | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Spoofing** | Attacker steals JWT | Session hijacking | Short-lived tokens, JWT revocation |
| **Tampering** | Attacker modifies JWT claims | Privilege escalation | Strong signing algorithm (HS256/RS256) |
| **Repudiation** | User denies login | No forensic trail | Log all auth attempts |
| **Info Disclosure** | Password exposed in logs | Credential compromise | Never log passwords, use bcrypt |
| **DoS** | Brute force login attempts | Account lockout | Rate limiting, progressive delays |
| **Elevation** | User changes own role | Unauthorized access | Role claims signed by server |

---

## 4. Database (RDS)

| Threat | Description | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Spoofing** | Attacker connects as admin | Full data breach | Strong DB credentials, IAM auth |
| **Tampering** | SQL injection | Data loss/corruption | Parameterized queries, ORM |
| **Repudiation** | Admin deletes logs | No audit trail | Immutable audit logs |
| **Info Disclosure** | Data breach via backup | PII exposure | Encryption at rest (KMS) |
| **DoS** | Resource exhaustion | System downtime | Connection pooling, RDS scaling |
| **Elevation** | User escalates to admin | Privilege escalation | Least privilege IAM roles |

---

## 5. Document Storage (S3)

| Threat | Description | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Spoofing** | Attacker assumes valid role | Unauthorized access | Pre-signed URLs, IAM policies |
| **Tampering** | Modify uploaded files | Upload malware | File type validation, virus scanning |
| **Repudiation** | User denies uploading | No audit trail | S3 server access logs |
| **Info Disclosure** | Public bucket | Data breach | Block public access, encryption |
| **DoS** | Fill bucket with large files | Cost/availability | S3 lifecycle, size limits |
| **Elevation** | User accesses other files | Data exposure | Strict bucket policies |

---

## 6. Audit Logging

| Threat | Description | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Spoofing** | Logs manipulated | Cover tracks | Immutable logs, CloudTrail |
| **Tampering** | Delete/modify logs | No forensic evidence | Logs stored in separate account |
| **Repudiation** | Attacker denies actions | No evidence | Comprehensive logging |
| **Info Disclosure** | Logs contain secrets | Credential leak | Sanitize logs before storage |
| **DoS** | Fill log storage | Logs overwritten | Log rotation, CloudWatch retention |
| **Elevation** | Attacker deletes logs | Cover tracks | Immutable storage |

---

## 7. Secrets Manager

| Threat | Description | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Spoofing** | Attacker assumes role | Secret theft | IAM roles, MFA |
| **Tampering** | Modify secrets | Application breakage | Versioning, audit logs |
| **Repudiation** | Admin denies accessing secrets | No trace | CloudTrail logs |
| **Info Disclosure** | Secret exposed in logs | Credential leak | Never log secrets |
| **DoS** | Delete all secrets | System downtime | Backup secrets, recovery plan |
| **Elevation** | User reads admin secrets | Privilege escalation | Strict IAM policies |

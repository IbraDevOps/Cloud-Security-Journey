# Security Controls Mapping

## Controls by Threat

| Threat | Control | Implementation |
|--------|---------|----------------|
| SQL Injection | Parameterized queries | Use Prisma/TypeORM |
| IDOR | Ownership checks | Middleware `checkOwnership()` |
| Session hijacking | Short-lived JWT + refresh tokens | 15 min access, 7 day refresh |
| Privilege escalation | RBAC + backend enforcement | IAM + custom middleware |
| Secrets exposure | Secrets Manager (not .env) | AWS Secrets Manager |
| Public S3 | Block public access + bucket policies | S3 Block Public Access |
| Weak JWT signing | Strong secret + RS256 | KMS or Secrets Manager |
| No audit logs | CloudTrail + custom logging | CloudWatch Logs |
| Rate limiting | WAF + API Gateway | AWS WAF |
| XSS | CSP + input sanitization | Helmet.js |
| CSRF | CSRF tokens | csurf middleware |
| Data encryption | Encryption at rest + in transit | KMS + TLS |
| Backup exposure | Encrypted backups | RDS encrypted snapshots |

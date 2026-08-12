# Risk Scoring (DREAD)

| Factor | Score | Description |
|--------|-------|-------------|
| **D**amage | 1–5 | How bad is the impact? |
| **R**eproducibility | 1–5 | How easy to reproduce? |
| **E**xploitability | 1–5 | How easy to exploit? |
| **A**ffected Users | 1–5 | How many users affected? |
| **D**iscoverability | 1–5 | How easy to find? |

## High-Risk Threats

| Threat | D | R | E | A | D | Total | Priority |
|--------|---|---|---|---|---|-------|----------|
| SQL Injection | 5 | 5 | 4 | 5 | 4 | 23 | Critical |
| IDOR (unauthorized data access) | 5 | 5 | 5 | 5 | 4 | 24 | Critical |
| Session hijacking | 5 | 4 | 4 | 5 | 3 | 21 | High |
| Privilege escalation | 5 | 4 | 4 | 5 | 3 | 21 | High |
| Secrets exposure | 5 | 3 | 3 | 5 | 2 | 18 | High |
| Public S3 bucket | 5 | 5 | 5 | 5 | 5 | 25 | Critical |
| Weak JWT signing | 5 | 5 | 4 | 5 | 3 | 22 | Critical |

## Risk Matrix

| Priority | Action |
|----------|--------|
| **Critical (20–25)** | Must fix before production |
| **High (15–19)** | Fix within 2 weeks |
| **Medium (10–14)** | Fix within 1 month |
| **Low (0–9)** | Fix if time permits |

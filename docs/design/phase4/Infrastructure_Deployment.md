# Phase 4:AWS Infrastructure Deployment

## Objective

Deploy the Employee Management System architecture designed during Phase 3 into a real AWS environment.

The deployment will be completed incrementally so that every AWS component can be understood, validated, secured, and documented before moving to the next component.

## Deployment Order

- [ ] Cost and account guardrails
- [ ] VPC
- [ ] Public subnets
- [ ] Private application subnets
- [ ] Private database subnets
- [ ] Internet Gateway
- [ ] Route tables
- [ ] Security groups
- [ ] S3 employee document bucket
- [ ] Secrets Manager
- [ ] RDS PostgreSQL
- [ ] EC2 backend
- [ ] Application Load Balancer
- [ ] CloudWatch logging
- [ ] CloudTrail auditing
- [ ] Connectivity validation
- [ ] Security validation

## Target Traffic Flow

Internet
→ Application Load Balancer
→ Backend Application
→ RDS / S3 / Secrets Manager

The database must never be directly reachable from the public internet.

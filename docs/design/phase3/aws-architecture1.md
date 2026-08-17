# AWS Architecture:Employee Management System

## High-Level Architecture

```mermaid
graph TB
    subgraph "User Layer"
        User[Employee/HR/Finance/CEO/Security/Dev]
    end

    subgraph "Edge Layer"
        Route53[Route 53]
        WAF[AWS WAF]
        CloudFront[CloudFront CDN]
    end

    subgraph "Frontend Layer"
        S3[S3 Bucket - Static Website]
    end

    subgraph "Application Layer"
        ALB[Application Load Balancer]
        ECS[ECS Fargate - API Containers]
        Cognito[Amazon Cognito - Auth]
    end

    subgraph "Data Layer"
        RDS[RDS PostgreSQL]
        S3Docs[S3 Bucket - Documents]
        Secrets[Secrets Manager]
        ElastiCache[ElastiCache - Redis]
    end

    subgraph "Security & Monitoring"
        CloudTrail[CloudTrail]
        CloudWatch[CloudWatch Logs + Alarms]
        GuardDuty[GuardDuty]
    end

    subgraph "Backup"
        S3Backup[S3 - Backup Storage]
        RDSBackup[RDS Snapshots]
    end

    User --> Route53
    Route53 --> WAF
    WAF --> CloudFront
    CloudFront --> S3
    CloudFront --> ALB

    ALB --> ECS
    ECS --> RDS
    ECS --> S3Docs
    ECS --> Secrets
    ECS --> ElastiCache
    ECS --> Cognito

    ECS --> CloudTrail
    ECS --> CloudWatch
    CloudTrail --> GuardDuty
    CloudWatch --> GuardDuty

    RDS --> RDSBackup
    S3Docs --> S3Backup

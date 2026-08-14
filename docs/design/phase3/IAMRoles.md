
---

### Step 4 — IAM Roles

```markdown
## IAM Roles

### API Execution Role (ECS Task Role)

| Permission | Why |
|------------|-----|
| `s3:GetObject` | Read documents from S3 |
| `s3:PutObject` | Upload documents to S3 |
| `rds-db:connect` | Connect to RDS |
| `secretsmanager:GetSecretValue` | Read secrets |
| `cloudwatch:PutMetricData` | Send metrics |
| `logs:CreateLogStream` | Write logs |
| `logs:PutLogEvents` | Write logs |

### Developer Deployment Role

| Permission | Why |
|------------|-----|
| `ecs:UpdateService` | Update API containers |
| `ecs:DescribeServices` | Check deployment status |
| `s3:PutObject` | Upload frontend |
| `cloudfront:CreateInvalidation` | Clear CDN cache |

### Security Audit Role

| Permission | Why |
|------------|-----|
| `cloudtrail:LookupEvents` | Read audit logs |
| `cloudwatch:GetMetricData` | View metrics |
| `guardduty:GetFindings` | Read security findings |
| `iam:GetRole` | Review IAM roles |
| `iam:GetPolicy` | Review IAM policies |

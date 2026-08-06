
---

# 4. Initial role model

#Put this inside `docs/design/roles-and-permissions.md`:

```markdown
# Roles and Permissions

## Initial Authorization Matrix

| Action | CEO | HR | Finance | Developer | Security | Employee |
|---|---:|---:|---:|---:|---:|---:|
| View own profile | Yes | Yes | Yes | Yes | Yes | Yes |
| Edit own profile | Limited | Limited | Limited | Limited | Limited | Limited |
| Create employee | No | Yes | No | No | No | No |
| Update employee record | No | Yes | No | No | No | No |
| View employee documents | Limited | Yes | No | No | Investigative | Own only |
| Upload employee documents | No | Yes | No | No | No | Limited |
| View payroll | Reports only | No | Yes | No | Investigative | Own only |
| Modify payroll | No | No | Yes | No | No | No |
| Assign business roles | Approval | Yes | No | No | Review | No |
| Deploy application | No | No | No | Yes | No | No |
| Read application secrets | No | No | No | Restricted | Restricted | No |
| View security logs | Summary | No | No | Limited | Yes | No |
| Investigate incidents | No | No | No | Support | Yes | No |
| Disable accounts | Approval | HR accounts | No | No | Emergency | No |

---

## Separation of Duties

The design separates sensitive responsibilities:

- HR manages employee records
- Finance manages payroll
- Developers manage application code
- Security monitors and investigates
- CEO receives reports and approvals
- Employees access only their own information

No single normal business role should control employee creation, payroll, application deployment, and security monitoring.

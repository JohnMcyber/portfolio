// Supporting evidence only (Section 6.5 / V2-R4). Every item listed here
// should also show up in use inside one of the three projects above —
// this is not a tool dump.
export const skillGroups = [
  {
    category: 'Cloud security (AWS & Azure)',
    items: [
      'AWS IAM',
      'Azure Entra ID / RBAC',
      'VPC & VNet network security',
      'Encryption & logging',
      'Checkov',
      'Prowler',
      'Microsoft Defender for Cloud',
    ],
  },
  {
    category: 'DevSecOps',
    items: ['GitHub Actions', 'Semgrep', 'Trivy', 'Secrets scanning'],
  },
  {
    category: 'AI / LLM security',
    items: [
      'OWASP LLM Top 10',
      'Prompt-injection testing',
      'Guardrails',
      'STRIDE',
    ],
  },
  {
    category: 'Foundations',
    items: ['Linux', 'Python', 'Docker', 'Terraform', 'Networking'],
  },
]

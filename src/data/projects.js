// Exactly three projects, per Section 6.4 / V2-R9 / V3-R4 (depth over
// breadth). Each entry carries the full case-study structure required by
// Section 7: summary -> goal -> tools -> steps -> findings ->
// recommendation -> learned -> demonstrates -> links.
//
// TODO(owner): replace every [BRACKETED] placeholder with real details.
// Do not invent real facts (repo URLs, numbers, dates) on the owner's behalf.
export const projects = [
  {
    slug: 'secure-by-default-cloud-deployment',
    title: 'Secure-by-default cloud deployment',
    summary:
      'I deployed a sample application to [AWS] and hardened it against the most common cloud misconfigurations — locked-down permissions, private networking, encryption, and full audit logging — then documented every decision.',
    goal: 'Prove I can take an insecure-by-default deployment to a hardened, auditable state using infrastructure-as-code.',
    tools: [
      { name: 'Terraform', why: '[why this tool was used]' },
      { name: 'AWS IAM', why: '[why this tool was used]' },
      { name: 'CloudTrail', why: '[why this tool was used]' },
      { name: 'Checkov', why: '[why this tool was used]' },
    ],
    steps: [
      'Provisioned baseline infrastructure',
      'Scanned for misconfigurations',
      'Prioritized findings',
      'Remediated least-privilege IAM, network exposure, encryption, and logging',
      'Re-scanned to confirm fixes',
    ],
    findings:
      'Started at [N] Checkov findings; the ones that mattered were [public bucket / wildcard IAM / no logging] because [impact]. I deprioritized [X] because [reason].',
    recommendation:
      '[e.g., enforce these controls as pipeline policy so drift is caught before deploy — see Project 2.]',
    learned: '[1–2 honest sentences on what the owner learned.]',
    demonstrates: [
      'Infrastructure-as-code',
      'Cloud hardening',
      'Risk prioritization',
      'Written documentation',
    ],
    links: {
      repo: '[repo url]',
      writeup: '[writeup url]',
      diagram: '[architecture diagram url]',
    },
  },
  {
    slug: 'cicd-pipeline-security-gates',
    title: 'CI/CD pipeline with security gates',
    summary:
      'I built a GitHub Actions pipeline that automatically blocks vulnerable code, dependencies, and misconfigured infrastructure before it can merge — then wrote up how I tuned it to avoid noise.',
    goal: 'Show I can automate security checks developers will actually keep.',
    tools: [
      { name: 'GitHub Actions', why: '[why this tool was used]' },
      { name: 'Semgrep', why: 'SAST — [why this tool was used]' },
      { name: 'Trivy', why: 'Dependency scanning — [why this tool was used]' },
      { name: 'Checkov', why: 'IaC scanning — [why this tool was used]' },
    ],
    steps: [
      'Built the pipeline',
      'Seeded known-vulnerable code',
      'Verified gates fail the build',
      'Tuned rules to reduce noise',
      'Documented the triage workflow',
    ],
    findings:
      'The pipeline caught [example vuln]; the noisiest rule was [X], which I [suppressed/tuned] because [reason].',
    recommendation:
      '[e.g., start with blocking on critical/high only and ratchet up, so teams don’t bypass the gate.]',
    learned: '[...]',
    demonstrates: [
      'DevSecOps automation',
      'SAST/SCA/IaC scanning',
      'Judgment about signal vs. noise',
      'Clear technical writing',
    ],
    links: {
      repo: '[repo url]',
      writeup: '[sample failed run url]',
      diagram: '[writeup url]',
    },
  },
  {
    slug: 'llm-threat-model-guardrails',
    title: 'LLM application threat model & guardrails',
    summary:
      'I threat-modeled a small LLM-powered app against the OWASP LLM Top 10, tested it with real prompt-injection payloads, and added input/output guardrails — documenting what they blocked and what risk remains.',
    goal: 'Show I can apply structured security thinking to AI systems, not just traditional infrastructure.',
    tools: [
      { name: 'Python', why: '[why this tool was used]' },
      { name: 'OWASP LLM Top 10', why: '[why this framework was used]' },
      { name: 'STRIDE', why: '[why this framework was used]' },
    ],
    steps: [
      'Built/chose the target app',
      'Mapped threats',
      'Wrote injection test cases',
      'Implemented filtering',
      'Re-tested',
      'Documented residual risk',
    ],
    findings:
      'Blocked [X of Y] injection attempts; the ones that got through worked because [reason], which matters because [impact].',
    recommendation:
      '[e.g., guardrails are a layer, not a fix — pair with least-privilege tool access and output monitoring.]',
    learned: '[...]',
    demonstrates: [
      'AI/LLM security',
      'Threat modeling',
      'Adversarial testing',
      'Risk communication',
    ],
    links: {
      repo: '[repo url]',
      writeup: '[threat model doc url]',
      diagram: '[test results url]',
    },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

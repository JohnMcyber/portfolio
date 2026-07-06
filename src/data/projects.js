// Exactly three projects, per Section 6.4 / V2-R9 / V3-R4 (depth over
// breadth). Each entry carries the full case-study structure required by
// Section 7: summary -> goal -> tools -> steps -> findings ->
// recommendation -> learned -> demonstrates -> links.
//
// Sourced from the owner's resume (McDonald_John_Resume). `recommendation`
// is a drafted judgment call reasoned from the stated findings, not a
// direct resume quote — check it reads like you. `learned` is a starting
// draft too — that one's inherently personal, so treat it as a first pass
// to rewrite in your own words, not a fact to verify.
//
// TODO(owner): add real repo/writeup/diagram links once you have them.
export const projects = [
  {
    slug: 'splunk-siem-detection-lab',
    title: 'Splunk SIEM detection & monitoring lab',
    summary:
      'I deployed a working SIEM by installing Splunk Enterprise on an Ubuntu VM and forwarding Windows and Linux telemetry through Universal Forwarder and Sysmon, then wrote detection rules that caught real attack activity in testing, not just logs sitting in an index.',
    goal: 'Prove I can stand up a functioning detection stack from scratch and tune it to actually catch attacks, not just collect logs.',
    tools: [
      { name: 'Splunk Enterprise', why: 'Core SIEM platform for centralizing and searching logs.' },
      { name: 'Sysmon', why: 'Rich Windows telemetry (process creation, network connections) to detect against.' },
      { name: 'Universal Forwarder', why: 'Getting Windows and Linux logs into Splunk.' },
      { name: 'SPL', why: 'Writing the actual detection rules.' },
    ],
    steps: [
      'Installed Splunk Enterprise on an Ubuntu VM',
      'Forwarded Windows and Linux telemetry via Universal Forwarder and Sysmon, centralizing 3+ log sources into one searchable index',
      'Engineered SPL detection rules for brute-force, port-scan, and reconnaissance activity',
      'Validated detections against simulated Kali Linux attacks',
      'Built 3 operational dashboards tracking failed logins, scan attempts, and alert volume',
      'Documented results in an incident report mapped to MITRE ATT&CK',
    ],
    findings:
      'The detection rules alerted on 100% of simulated Kali Linux attacks during validation testing: brute-force, port-scan, and reconnaissance activity were all caught and mapped to MITRE ATT&CK techniques in the incident report.',
    recommendation:
      'Alert volume matters as much as detection rate. The next step is tuning these rules against benign traffic to measure false-positive rate before calling any of them production-ready.',
    learned:
      '[TODO(owner): 1–2 honest sentences on what you took away from building this, e.g. what surprised you about tuning detections, or what was harder than expected.]',
    demonstrates: [
      'SIEM deployment',
      'Detection engineering (SPL)',
      'MITRE ATT&CK mapping',
      'Incident documentation',
    ],
    links: {
      repo: '[repo url]',
      writeup: '[writeup url]',
      diagram: '[architecture diagram url]',
    },
  },
  {
    slug: 'ot-ics-intrusion-detection-lab',
    title: 'OT/ICS network intrusion detection lab',
    summary:
      'I stood up an OT/ICS test environment with OpenPLC and SCADA components, replayed real industrial-protocol attack traffic, and tuned Suricata and Zeek IDS rules until they caught it, because industrial systems can’t run endpoint agents and can’t just be patched.',
    goal: 'Show I can secure environments where you can’t install a traditional agent: passive detection only.',
    tools: [
      { name: 'OpenPLC', why: 'Simulating a real PLC/SCADA target.' },
      { name: 'tcpreplay', why: 'Safely replaying industrial-protocol (Modbus, DNP3) attack traffic without touching live systems.' },
      { name: 'Suricata', why: 'Signature-based IDS for the OT network.' },
      { name: 'Zeek', why: 'Protocol-level anomaly detection.' },
    ],
    steps: [
      'Stood up an OT/ICS test environment using OpenPLC and SCADA components',
      'Replayed industrial-protocol traffic (Modbus, DNP3) with tcpreplay to generate realistic attack data',
      'Authored and tuned Suricata and Zeek IDS rules',
      'Measured alert fire rates against known-malicious ICS PCAPs',
      'Iteratively refined signatures to eliminate missed detections',
    ],
    findings:
      'Initial signatures missed some PLC scanning and protocol-anomaly activity; iterating against known-malicious ICS PCAPs closed those gaps and improved detection coverage.',
    recommendation:
      'Passive monitoring is the right default for OT. The next test worth running is measuring false-positive rate against a week of normal production-like traffic, since ICS environments punish noisy alerts even harder than IT ones.',
    learned:
      '[TODO(owner): 1–2 honest sentences on what you took away, e.g. what made OT detection different from the IT-focused SIEM work above.]',
    demonstrates: [
      'OT/ICS security',
      'Passive network intrusion detection',
      'IDS signature tuning',
      'Industrial protocol analysis',
    ],
    links: {
      repo: '[repo url]',
      writeup: '[writeup url]',
      diagram: '[architecture diagram url]',
    },
  },
  {
    slug: 'aws-devsecops-misconfiguration-detection',
    title: 'AWS DevSecOps misconfiguration detection',
    summary:
      'I scanned Terraform infrastructure-as-code for AWS with Checkov, then remediated the SSH, S3, versioning, and encryption misconfigurations it found, taking secure-scan results from 10 of 19 passing checks to 17 of 23.',
    goal: 'Prove I can take insecure-by-default infrastructure-as-code to a hardened, auditable state, and document why each fix mattered.',
    tools: [
      { name: 'Terraform', why: 'The infrastructure-as-code being scanned and fixed.' },
      { name: 'Checkov', why: 'Static analysis for AWS misconfigurations.' },
      { name: 'AWS', why: 'Target cloud platform (IAM, S3, and related services).' },
    ],
    steps: [
      'Scanned baseline Terraform IaC for AWS with Checkov',
      'Remediated SSH, S3, versioning, and encryption misconfigurations',
      'Documented each risk and fix',
      'Re-scanned to confirm improvement',
    ],
    findings:
      'Started at 10 of 19 passing checks; after remediation, 17 of 23 passed. The fixes that mattered most were SSH exposure, S3 bucket configuration, versioning, and encryption gaps, each documented with the risk it closed.',
    recommendation:
      'Enforce Checkov as a pipeline gate so these misconfigurations are caught before merge, not found by a one-off scan after the fact.',
    learned:
      '[TODO(owner): 1–2 honest sentences on what you took away, e.g. which misconfiguration surprised you most, or what you’d automate next.]',
    demonstrates: [
      'Infrastructure-as-code security',
      'Cloud misconfiguration remediation',
      'Checkov/IaC scanning',
      'Risk documentation',
    ],
    links: {
      repo: '[repo url]',
      writeup: '[writeup url]',
      diagram: '[architecture diagram url]',
    },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

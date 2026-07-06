// Supporting evidence only (Section 6.5 / V2-R4). Every item listed here
// should also show up in use inside one of the three projects above —
// this is not a tool dump. Kept strictly to what's demonstrated in real
// projects/resume — no Azure or AI/LLM-specific tooling listed yet,
// since neither is evidenced by finished work (the AFRL AI security role
// is brand new; see Learning Path). Don't add those back until there's a
// project to back them up.
export const skillGroups = [
  {
    category: 'SIEM & Detection Engineering',
    items: ['Splunk', 'Wazuh', 'Snort', 'Suricata', 'Zeek', 'Wireshark', 'Sysmon'],
  },
  {
    category: 'Cloud & DevSecOps',
    items: ['AWS', 'Terraform', 'Checkov', 'Python', 'SQL'],
  },
  {
    category: 'Networking, OT & ICS',
    items: ['Nmap', 'tcpdump', 'Cisco ASA', 'pfSense', 'OpenPLC', 'Modbus', 'DNP3'],
  },
  {
    category: 'Systems & Frameworks',
    items: [
      'Linux',
      'Kali Linux',
      'Windows Server',
      'Active Directory',
      'PowerShell',
      'MITRE ATT&CK',
    ],
  },
]

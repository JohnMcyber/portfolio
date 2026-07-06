// Decorative "tools I use" ticker (ToolTicker in Skills.jsx). Icon paths
// point at whatever the owner actually saved into public/icons/ — until
// a file exists at that exact path, ToolIcon (Skills.jsx) falls back to
// a blank placeholder tile rather than a broken-image icon. List kept
// strictly to tools the resume/projects actually evidence. Skipped:
// generic office apps (Excel, Teams, OneDrive), and protocols/frameworks
// without a product identity of their own (Modbus, DNP3, MITRE ATT&CK,
// Group Policy) — those already show up as text in Skills, just not
// here as a "logo" tile.
export const toolShowcase = [
  { name: 'Splunk', icon: '/icons/Splunk-Emblem.png' },
  { name: 'AWS', icon: '/icons/Amazon-Web-Services-AWS-Logo.png' },
  { name: 'Terraform', icon: '/icons/Terraform-image.png' },
  { name: 'Python', icon: '/icons/Python-Emblem.png' },
  { name: 'Kali Linux', icon: '/icons/Kali-dragon-icon.svg.webp' },
  { name: 'Wireshark', icon: '/icons/Wireshark_icon_new.png' },
  { name: 'Cisco ASA', icon: '/icons/Cisco_logo-1000px.png' },
  { name: 'Nmap', icon: '/icons/nmap.png' },
  { name: 'PowerShell', icon: '/icons/PowerShell_5.0_icon.png' },
  { name: 'Wazuh', icon: '/icons/WAZUH_logo.png' },
  { name: 'Snort', icon: '/icons/snort_image.png' },
  { name: 'Suricata', icon: '/icons/Logo-Suricata-vert-whitetype-R.png' },
  { name: 'Zeek', icon: null },
  { name: 'Sysmon', icon: null },
  { name: 'tcpdump', icon: null },
  { name: 'pfSense', icon: '/icons/pfsense-logo-square.png' },
  { name: 'Tailscale', icon: null },
  { name: 'Linux', icon: '/icons/Linux.png' },
  { name: 'Ubuntu', icon: '/icons/Ubuntu.png' },
  { name: 'Windows Server', icon: null },
  { name: 'Active Directory', icon: '/icons/Active_Directory.png' },
  { name: 'OpenPLC', icon: null },
  { name: 'Checkov', icon: null },
  { name: 'SQL', icon: null },
  { name: 'Windows 11', icon: null },
  { name: 'Windows Admin Center', icon: null },
  { name: 'UniFi OS', icon: null },
  { name: 'Burp Suite', icon: null },
  { name: 'John the Ripper', icon: null },
  { name: 'Kleopatra', icon: null },
  { name: 'YARA', icon: null },
  { name: 'FTK Imager', icon: null },
  { name: 'Autopsy', icon: '/icons/autopsy_logo.png' },
  { name: 'E3', icon: null },
  { name: 'MySQL', icon: '/icons/MySQL.png' },
  { name: 'XAMPP', icon: '/icons/xampp.svg' },
  { name: 'VirtualBox', icon: '/icons/VirtualBox_logo.webp' },
]

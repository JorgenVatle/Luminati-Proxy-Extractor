# Luminati-Proxy-Extractor

Quickly grab all available proxies through all ports on your local Luminati Proxy Manager API.

### Installation
```bash
npm install -g luminati-proxy-extractor
```

### Usage
```
Usage:
  lmp-extract [OPTIONS] [ARGS]

Options:
  -m, --manager [STRING] Luminati Proxy Manager hostname. (Default is 127.0.0.1)
  -p, --managerPort [NUMBER]Luminati Proxy Manager port (Default is 22999)
  -o, --output [STRING]  Proxy output path. (Default is ./luminati-proxies-1525828740706.txt)
  -r, --onlyRunning [BOOLEAN]Extract running proxies only? (Default is true)
  -v, --version          Display the current version
  -h, --help             Display help and usage details
```

### Links
- [Luminati Website](https://luminati.io)
- [Luminati Proxy Manager](https://github.com/luminati-io/luminati-proxy)

### License
MIT
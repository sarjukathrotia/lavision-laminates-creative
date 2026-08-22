import urllib.request
import re
import os

fonts_dir = 'public/fonts'
os.makedirs(fonts_dir, exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0'}

css_url = 'https://api.fontshare.com/v2/css?f[]=zodiak@300,400,401,500,501,700&display=swap'
req = urllib.request.Request(css_url, headers=headers)
with urllib.request.urlopen(req, timeout=10) as resp:
    css_content = resp.read().decode('utf-8')

blocks = re.findall(r'@font-face\s*\{([^}]+)\}', css_content)
print(f'Found {len(blocks)} font-face definitions in Fontshare CSS')

for b in blocks:
    weight_match = re.search(r'font-weight:\s*(\d+)', b)
    style_match = re.search(r'font-style:\s*(\w+)', b)
    url_match = re.search(r"url\('([^']+\.woff2)'\)", b)
    
    if weight_match and style_match and url_match:
        weight = weight_match.group(1)
        style = style_match.group(1)
        url = url_match.group(1)
        if url.startswith('//'):
            url = 'https:' + url
        filename = f'Zodiak-{weight}-{style}.woff2'
        path = os.path.join(fonts_dir, filename)
        try:
            r = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(r, timeout=10) as res, open(path, 'wb') as f:
                f.write(res.read())
            print(f'Successfully downloaded {filename} ({os.path.getsize(path)} bytes)')
        except Exception as e:
            print(f'Error downloading {filename}: {e}')

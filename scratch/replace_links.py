import os

replacements = {
    'href="code.html"': 'href="/"',
    'href="product.html"': 'href="/selective-math-pack"',
    'href="privacy.html"': 'href="/privacy"',
    'href="terms.html"': 'href="/terms"'
}

files = [
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/code.html',
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/product.html',
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/privacy.html',
    'f:/Antigravity/stitch_ch_tuition_resource_hub/ch_tuition_storefront_desktop/terms.html'
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old, new in replacements.items():
            content = content.replace(old, new)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

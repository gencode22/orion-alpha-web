import re

def convert():
    with open('/home/gntaprdna/Project/signalbot-idx/dashboard/templates/index_promo.html', 'r', encoding='utf-8') as f:
        html = f.read()

    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
    else:
        content = html

    content = re.sub(r'<script\b[^>]*>.*?</script>', '', content, flags=re.DOTALL)

    content = re.sub(r'\bclass=', 'className=', content)
    content = re.sub(r'\bfor=', 'htmlFor=', content)

    content = re.sub(r'stroke-width=', 'strokeWidth=', content)
    content = re.sub(r'stroke-linecap=', 'strokeLinecap=', content)
    content = re.sub(r'stroke-linejoin=', 'strokeLinejoin=', content)
    content = re.sub(r'stroke-dasharray=', 'strokeDasharray=', content)
    content = re.sub(r'preserveAspectRatio=', 'preserveAspectRatio=', content)
    content = re.sub(r'stop-color=', 'stopColor=', content)
    content = re.sub(r'stop-opacity=', 'stopOpacity=', content)

    def style_replacer(match):
        style_str = match.group(1)
        props = []
        for prop in style_str.split(';'):
            if ':' in prop:
                k, v = prop.split(':', 1)
                k = k.strip()
                k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                v = v.strip().replace("'", '"')
                props.append(f"{k}: '{v}'")
        return "style={{" + ", ".join(props) + "}}"

    content = re.sub(r'style="([^"]*)"', style_replacer, content)

    content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content)
    content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', content)
    content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', content)

    # remove onclick strings to avoid syntax errors, will just call dummy functions in component if needed
    content = re.sub(r'onclick="([^"]*)"', r'onClick={undefined}', content)
    # remove html comments as they break JSX
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)

    jsx = f"""\"\"\"use client\"\"\";

import React, {{ useEffect }} from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoPage() {{
  useEffect(() => {{
    const t = localStorage.getItem('orion-theme');
    if (!t) {{
      const defaultTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', defaultTheme);
    }} else {{
      document.documentElement.setAttribute('data-theme', t);
    }}
  }}, []);

  const toggleTheme = () => {{
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('orion-theme', next);
  }};

  const toggleMobileMenu = () => {{
    const d = document.getElementById('nav-dropdown');
    const b = document.getElementById('hamburger-btn');
    if (d && b) {{
      const isExpanded = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!isExpanded));
      if (isExpanded) {{
        d.classList.remove('is-open');
        setTimeout(() => d.setAttribute('aria-hidden', 'true'), 300);
      }} else {{
        d.setAttribute('aria-hidden', 'false');
        void d.offsetWidth;
        d.classList.add('is-open');
      }}
    }}
  }};

  return (
    <>
      {content}
    </>
  );
}}
"""

    with open('/home/gntaprdna/Project/orion-alpha-web/src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(jsx.replace('"""use client"""', '"use client"'))

if __name__ == '__main__':
    convert()

#!/bin/sh

set -eu

project_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
export_dir="$project_dir/static-site"

if ! find "$project_dir/dist/client/_next/static/css" -maxdepth 1 -name 'index.*.css' -print -quit | grep -q .; then
  echo "缺少生产构建，请先运行 npm run build。" >&2
  exit 1
fi

if ! curl -fsS http://localhost:3000/ >/dev/null; then
  echo "本地生产服务未运行，请先运行 npm start。" >&2
  exit 1
fi

rm -rf "$export_dir"
mkdir -p "$export_dir"
cp -R "$project_dir/dist/client/." "$export_dir/"
curl -fsS http://localhost:3000/ -o "$export_dir/index.html"

perl -0pi -e 's|<script\b[^>]*>.*?</script>||gs; s|="/|="./|g; s|url\(/|url(./|g; s|http://localhost:3000/og\.png|./og.png|g' "$export_dir/index.html"

touch "$export_dir/.nojekyll"

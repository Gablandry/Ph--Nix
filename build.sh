#!/usr/bin/env bash
# Prepare le dossier publie par Cloudflare Pages.
#
# Cloudflare publie tout ce qui se trouve dans son dossier de sortie, et il
# n'a pas d'equivalent a .vercelignore. Ce script copie donc dans dist/ les
# fichiers du site suivis par Git, sans les documents de travail internes ni
# les fichiers propres a Vercel.
#
# Reglage Cloudflare : commande de build « bash build.sh », dossier « dist ».
set -euo pipefail
rm -rf dist
mkdir dist
git ls-files -z \
  | grep -zvE '(\.md$|^\.impeccable/|^vercel\.json$|^\.vercelignore$|^build\.sh$|^\.gitignore$)' \
  | while IFS= read -r -d '' f; do
      mkdir -p "dist/$(dirname "$f")"
      cp "$f" "dist/$f"
    done
echo "Fichiers publies : $(find dist -type f | wc -l)"

#!/bin/bash

# Generate index.md files for categories and subcategories
echo "Generating index.md files for categories and subcategories..."
find content -type d -exec sh -c '
    for dir; do
        echo "Generating $dir/index.md..."
        if [ ! -f "$dir/index.md" ]; then
            category=$(basename "$dir")
            parent=$(dirname "$dir" | sed "s|content||")
            parentTitle=$(basename "$parent")
            if [ "$parent" = "." ]; then
                parent="/"
                parentTitle="Home"
            fi
            cat <<-EOF > "$dir/index.md"
---
title: "$category"
layout: index.njk
category: "$category"
parent: "$parent"
parentTitle: "$parentTitle"
---
EOF
        fi
    done
' sh {} +
# Halloween Coloring Pages – Blog & Guides Publishing System

This folder (`content/blog/`) houses all MDX-based articles, craft tutorials, coloring guides, and print advice for [Halloween Coloring Pages](https://halloweencoloringpages.store).

---

## 1. How to Create a New Article

1. Duplicate `_TEMPLATE.mdx` or create a new file with a `.mdx` extension, for example:
   ```
   content/blog/tips-for-coloring-halloween-pumpkins.mdx
   ```
2. The file name will become the URL slug if not explicitly overridden by `slug` in the frontmatter. We recommend keeping the filename and the `slug` identical and kebab-cased:
   - File: `content/blog/tips-for-coloring-halloween-pumpkins.mdx`
   - URL: `https://halloweencoloringpages.store/blog/tips-for-coloring-halloween-pumpkins`

---

## 2. Frontmatter Specifications

Every article begins with a YAML frontmatter block between triple hyphens (`---`):

```yaml
---
title: "Tips for Coloring Halloween Pumpkins with Markers and Pencils"
description: "Learn how to shade and blend vibrant oranges, spooky purples, and deep shadows on printable pumpkin coloring sheets."
slug: "tips-for-coloring-halloween-pumpkins"
date: "2026-10-01"
updated: "2026-10-05"
author: "Halloween Coloring Pages"
category: "Coloring Ideas"
tags:
  - pumpkin coloring pages
  - coloring techniques
  - blending markers
featuredImage: "/images/blog/pumpkin-coloring-guide.webp"
featuredImageAlt: "Colored jack-o'-lantern sheet showing blending techniques"
published: true
---
```

### Frontmatter Fields Reference:

| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | string | The H1 headline of the article and the SEO `<title>`. |
| `description` | string | Summary used for the listing card and meta description (120–160 chars). |
| `slug` | string | URL identifier (e.g. `tips-for-coloring-halloween-pumpkins`). |
| `date` | string (YYYY-MM-DD) | Initial publication date. |
| `updated` | string (optional) | Date of last update. Used for Schema `dateModified` and sitemap `lastModified`. |
| `author` | string (optional) | Defaults to `"Halloween Coloring Pages"`. |
| `category` | string | Primary category (e.g., `Coloring Ideas`, `Printing Guides`, `Halloween Crafts`). |
| `tags` | array of strings | Relevant tags used for matching related articles. |
| `featuredImage` | string (optional) | Path to featured banner image (e.g. `/images/blog/my-guide.webp`). |
| `featuredImageAlt` | string (optional) | Descriptive accessibility alt text for the featured banner image. |
| `published` | boolean | Set to `true` to publish publicly. Set to `false` for drafts. |

---

## 3. How to Add Images

1. Place image files (WebP, AVIF, PNG, or JPG) in the public blog directory:
   ```
   public/images/blog/
   ```
2. Reference them in frontmatter or within your markdown text:
   - In frontmatter:
     ```yaml
     featuredImage: "/images/blog/pumpkin-guide.webp"
     ```
   - In Markdown content:
     ```markdown
     ![Blending yellow and orange on pumpkin ribs](/images/blog/pumpkin-guide.webp)
     ```

---

## 4. How to Add Internal Links

To support natural internal navigation for readers and SEO, link directly to your coloring categories using root-relative paths:

```markdown
If you are looking for fresh outlines to practice on, check out our 
[Pumpkin Coloring Pages](/coloring-pages/pumpkin) or explore easy sheets for 
younger children in our [Kids Coloring Category](/coloring-pages/for-kids).
```

Supported Category Paths:
- `/coloring-pages`
- `/coloring-pages/for-kids`
- `/coloring-pages/for-adults`
- `/coloring-pages/cute`
- `/coloring-pages/easy`
- `/coloring-pages/pumpkin`
- `/coloring-pages/ghost`
- `/coloring-pages/witch`
- `/coloring-pages/black-cat`

---

## 5. Publishing Workflow

1. Write your draft with `published: false` while preparing content.
2. When ready to launch, change `published: true` and save the file.
3. On the next build/deploy:
   - The article appears automatically on `/blog`.
   - The article route `/blog/[slug]` goes live with dynamic SEO, OpenGraph, Twitter cards, and Schema.org structured data.
   - The article is automatically included in `/sitemap.xml`.
   - Related articles matching the category or tags will automatically link to it.

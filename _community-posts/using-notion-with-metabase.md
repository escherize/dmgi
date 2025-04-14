---
title:  "Using Notion with Metabase"
redirect_from:
  - /community_posts/using-notion-with-metabase
meta_description: A guide from Metabase user on how to embed Metabase in Notion using CodePen.
date:   2025-01-26 17:10:58
image: /images/community/using-notion-with-metabase.jpg
read_time: 3 minutes
category_filters: "Working with Metabase"
organization: Node
organization_url: https://twitter.com/bottle_of_soul
author: Ting-Shao Kuo
author_img: /images/community/Shao.jpeg
author_bio: Ting-Shao is a software engineer. Besides making software, he keeps improving the team by building up internal systems. You can reach Shao on X [@bottle_of_soul](https://twitter.com/bottle_of_soul){:target="_blank"}.
---

Want to add Metabase dashboards to Notion? If your team uses Notion to stay organized, [embedding Metabase](/docs/latest/embedding/introduction) can bring your data into your daily workflow. Here’s how to do it using CodePen.

## Why embed Metabase in Notion?

Working in a SaaS company, I know how important our data is—especially when it comes to understanding user behavior. We rely on data to improve our product, prioritize features, and refine our design.

To make our decision-making even more data-driven, I wanted to integrate Metabase dashboards into the project management tool we use daily. Since our team uses Notion for everything—from meeting notes to design drafts—I found a way to embed Metabase charts directly into Notion using CodePen.

If you’re new to Metabase, check out our [Getting Started](/learn/metabase-basics/getting-started/) guide to set up your first dashboard.

## 3 Steps to Embed Metabase in Notion Using CodePen

### Step 1. Copy the iframe code in Metabase

Go to the Metabase question that you want to embed in Notion and click the sharing icon at the bottom right corner.

![Screenshot of a chart build with Metabase](/images/community/metabase-notion-1.png)

Then [enable sharing](/learn/metabase-basics/embedding/charts-and-dashboards) for your question and copy the iframe code.

![Screenshot of enabling sharing option in Metabase](/images/community/metabase-notion-2.png)

#### Step 2. Paste your iframe code in a CodePen

The reason you need to use CodePen is that Notion doesn’t support native iframe code from Metabase, but it does support CodePen.

![Codepen](/images/community/metabase-notion-11.png)

![Codepen](/images/community/metabase-notion-4.png)

After you click “Debug Mode”, a new tab will open up in your browser. Copy the URL of that tab.

#### Step 3. Paste the CodePen URL in your Notion page

Open your Notion page and type **“/codepen”** to create a CodePen block.

![Codepen & Notion](/images/community/metabase-notion-5.png)

Paste the copied URL from the last step in the CodePen block and click “Embed link”.

![Embedding link in Notion](/images/community/metabase-notion-6.png)

Now you can see your interactive Metabase charts directly in Notion!

![Metabase embedded in Notion](/images/community/metabase-notion-7.png)

**Important notes**

***Please note this is not the official Metabase guide.*** <br/>
***Following these steps will make your dashboards public. Learn more about [Metabase Security settings](/learn/metabase-basics/embedding/securing-embeds).***

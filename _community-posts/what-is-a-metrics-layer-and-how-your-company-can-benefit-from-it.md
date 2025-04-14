---
title:  "What is a metrics layer and how your company can benefit from it"
redirect_from:
  - /community_posts/what-is-a-metrics-layer-and-how-your-company-can-benefit-from-it
meta_description: The metrics layer can be that central, single source of truth for how metrics are defined in your organization.
date:   2025-02-10 10:10:58
image: /images/community/what-is-a-metrics-layer-and-how-your-company-can-benefit-from-it.jpg
read_time: 4 minutes
category_filters: "Strategy,Data culture"
organization: Keller Williams Realty International
organization_url: https://www.kw.com/
author: Chris Nguyen
author_img: /images/community/chris-nguyen.png
author_bio: Chris is a Business Intelligence Analyst at Keller Williams Realty International, a real estate franchise and technology company headquartered in Austin, TX USA. In his spare time, you can find him cooking something fun, attempting to declutter his life, reading, or fulfilling his inner completionist in a video game. You can find Chris on [LinkedIn](https://www.linkedin.com/in/christopher-lee-nguyen/){:target="_blank"} and read more on his [blog](https://medium.com/@datadissectiondr){:target="_blank"}.
---

## Why your team needs a metrics layer

*“The number of users is different on dashboards A, B, and C. Can you explain what’s going on?”*

*“The definition of this count is outdated in this report. Can we get this fixed ASAP?”*

If you’ve worked in analytics, you’ve likely heard these questions over and over. Inconsistent metrics lead to confusion, wasted time, and lost trust in data. Business users struggle to make decisions when reports show different numbers for what should be the same metric. Meanwhile, data teams end up firefighting instead of focusing on strategic work.

The culprit? A lack of a centralized [metrics layer](/docs/latest/data-modeling/metrics), a way to define and store metrics in a single place, so that everyone in your organization uses the same logic.

## What is a metrics layer?

A metrics layer (also called a headless BI or metrics store) sits between your data warehouse and your business intelligence (BI) tools. It acts as the single source of truth for defining and managing metrics across different dashboards, reports, and applications.

Think of it like this:

- GitHub centralizes and version-controls your code.
- Your data warehouse serves as the central storage for raw and transformed data.
- A metrics layer ensures that business logic for key metrics is consistent across all BI tools.

![a schema showing how the metrics layer is placed between your data warehouse and a BI tool](/images/community/metrics-layer.png)

The metrics layer should lie between where your data is stored and how it is consumed for a unified definition.

Your organization has multiple dashboards. It may have multiple business intelligence (BI) tools too. Do you really want to define the business logic for your metrics every single time in each of those outlets? What if the logic changes as the business grows? That increases the chances of one instance being slightly off or out of date by the time someone looks at it and makes a decision. But a single, agreed upon definition that is used in multiple places solves that dilemma and is a great example of the DRY principle (Don’t Repeat Yourself).

## How to define and build a metrics layer

You don’t need a big engineering effort to start. Here’s a simple approach:

### Step 1: Define your metrics

Start by writing down how each key metric should be calculated.

Ask questions like:

- What time frame should I use? Daily? Weekly? Monthly?
- How do I handle duplicates when counting users?
- What makes a user “active” or “inactive”?
- What filters or flags should I apply?

A good first step is writing SQL queries and storing them in a shared document. But copying and pasting SQL across reports gets messy fast.

### Step 2: Centralize metric definitions

Move your metric definitions to a single location that multiple BI tools can access.

Some common ways:

- Creating views or tables in your data warehouse that store precomputed metrics.
- Using semantic layer to define reusable metrics.
- Storing metric definitions in YAML (if using an external headless BI tool).

### Step 3: Test and implement

Once your metrics are defined, test them across different reports to make sure they return consistent results. The goal is to ensure that no matter where the metric appears—dashboard, embedded report, or API call—it always shows the same number.

A well-structured metrics layer reduces inconsistencies, cuts down redundant work, and builds trust in your data.

Read more about [metrics](/docs/latest/data-modeling/metrics#creating-a-metric) in Metabase.

---
title: "Aula cuts support tickets by 87% with Metabase Embedded Analytics."
summary: "Aula is a digital learning platform designed to make online education more engaging for both educators and students. Over 200,000 students have used Aula so far."
company_name: "Aula"
industry: Education
employees: 50+
headquarters: Coventry, England
logo_image: /images/case-studies/aula-logo.png
key_usecases: Embedded Analytics:/product/embedded-analytics,Business Intelligence:/product/business-intelligence,Interactive dashboards:/product/interactive-dashboards
image: /images/case-studies/aula-og.jpg
featured_image: /images/case-studies/aula-cover.png
the_challenge: In 2020, before Aula embedded Metabase, getting data on student engagement was a complicated. If an educator wanted to check attendance or see which materials were getting the most interaction, they had to file a support ticket. That ticket then went to the Support team, who had to pass it along to the Data team. Not exactly quick or efficient. Aula needed a way to put data directly in the hands of educators without forcing them to go through a long back-and-forth with support.
the_solution: Instead of building their own data visualizations (which would have taken significant dev and design time), Aula embedded Metabase directly into their platform.
the_results: Embedding Metabase into Aula made data instantly accessible to educators. They no longer had to submit support requests or wait for reports—insights were available in real-time.
blockquote: We saw a 20% decrease in support tickets requesting engagement reports in the first six months after the embedded dashboard was made available. After a year of implementation, such requests had decreased by 87%.
speaker_name: Mariana Aguiar
speaker_title: Customer Success Consultant at Aula
speaker_photo: /images/case-studies/mariana-aguiar.jpeg
---

#### Why Metabase?

In 2020, before embedding Metabase, [Aula’s](https://www.aula.education/){:target="\_blank"} educators had no direct access to engagement data. Checking attendance or content usage required filing a support ticket, which then had to be routed to the Data team—a slow and inefficient process.

Aula needed a better way to help educators access and use data. They chose Metabase because it let them surface insights without heavy development work. Embedding dashboards inside Aula gave educators real-time data without making them dig through raw numbers. And because Metabase was easy to integrate, Aula’s team didn’t have to spend much engineering time getting it up and running.

Now, around 3,000 educators use Aula’s analytics, powered by [Metabase embedding](/product/embedded-analytics).

![how aula embeds metabase](/images/case-studies/aula-embedding-metabase.gif)

*"Instead of reinventing the wheel and building out our own data visualizations within Aula—which would take extensive development and design time—we can simply use Metabase's embedding to display dashboards for educators within Aula."*, - says Mariana Aguiar.

#### The data

Aula organizes its data into distinct layers. Application data is stored in [MongoDB](/data_sources/mongo-db), while interaction events are captured via tracking tools and archived as raw data in AWS S3. For data transformation and processing, they use dbt. Their analytics layer relies on [Snowflake](/data_sources/snowflake), which is connected to Metabase for fast querying and clear visualization of structured datasets.

Although they currently focus on first-party data, the setup is designed to easily integrate third-party data in the future using Snowflake’s ecosystem.

#### How Aula team uses Metabase

Aula uses Metabase to analyze educator and student interactions. Metrics include material views, engagement levels, and course performance. The main use case is embedding dashboards into the Engagement tab, which gives educators real-time insights into student behavior.

![how aula embeds metabase](/images/case-studies/aula-main-gif.gif)

Metabase acts as the visualization layer on top of Snowflake, making it easy for educators to track trends without needing technical skills. The Engagement tab is available only to educators at partner institutions, as it focuses on student interactions with course content.

**Aula’s internal team also uses Metabase for analytics:**

- For quick insights, they use Metabase’s Graphical Query Builder.
- For advanced analysis, they write custom SQL queries to take full advantage of Snowflake’s performance.

Everyone on the team has access to Metabase, so they can [explore data on their own](/learn/metabase-basics/overview/concepts)

#### The results

With Metabase embedded in Aula in 2021, educators got direct access to the data they needed. They no longer had to submit requests and wait for reports—they could check their own metrics anytime.

During peak periods for higher education, like September, Aula team has seen a 15% increase in engagement queries over the past few years. Metabase embedded insigths helped educators make faster content adjustments and quickly reach out to students who were falling behind.

- **More autonomy.** Educators could track engagement without waiting on support.
- **Faster decisions.** Real-time data helped them tweak course materials on the fly.
- **Fewer support tickets.** Requests dropped 20% in six months. After a year, they were down 87% since educators no longer needed support for data.

Embedding Metabase in Aula gives educators direct access to key insights, helping them improve content and support students—without adding extra steps to their workflow.

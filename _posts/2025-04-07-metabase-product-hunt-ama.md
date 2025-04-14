---
title: "Product Hunt AMA Recap: embedding, open source success, and more"
summary: "Before our launch, I hosted an AMA on ProductHunt and answered questions about Metabase, embeddings, building an open source company, and more."
date: 2025-04-07 00:05:05
last_updated_at: 2025-04-07 00:05:05
categories: "News"
author: Sameer Al-Sakran
featured_image: /images/product-hunt-blog-post-image.png
image: /images/product-hunt-blog-post-image.png
layout: post
canonical: https://www.producthunt.com/p/metabase/you-re-doing-analytics-wrong-ama-w-ceo-of-metabase-2
---

In preparation for tomorrow's [Product Hunt launch of our Embedding versions](https://www.producthunt.com/products/metabase), I stopped by p/ama to answer questions from the community.

## Why are we launching Metabase Embedding?

Over the last 10 years, we've focused on offering an easy and Open Source way for anyone in your company to run reports, make charts, and generally be able to explore and work with data on their own.

We've been used by over 70,000 companies and organizations of all sizes and shapes— from Fortune 100 companies to local volleyball clubs.

Analytics is a multi-player game, and while analysts, data scientists, and other practitioners of the data arts are important players, we've always believed that normal people with day jobs should be able to get what they need on their own time. Increasingly, we're finding that companies use us to deliver data and analytics to their customers, not just their employees. We've been working to make that easier and faster to do, and are calling the result "[Metabase Embedding](/product/embedded-analytics)".

Along the way, we've learned a lot by helping hundreds of companies embed analytics and reporting in their products. This often involves more than just a chart here or a dashboard there, it's rather the ability for your customers to run their own reports on the data they generated in your application.

So why Product Hunt? While many of you are already doing incredible things with embedded analytics—like creating premium experiences, unlocking new revenue streams, and differentiating your products—we know there are still tons of teams struggling with the challenges of building analytics from scratch. By launching on Product Hunt, we aim to spread the word about how Metabase Embedding can eliminate that pain and help more companies deliver seamless, self-service analytics to their users.

## The AMA Breakdown

### What metrics define the success of an open source project, according to you?

“I'd say the most important target to hit if you're looking for a large, growing open source project is to grow the core set of people who are using you in production (ideally happily). Walking that backwards, you'd also want to keep track of the number of installations, and the rough number of people trying you out (from the number of downloads or docker hub pulls). Github exposes some of these metrics, Dockerhub another set, and you'll probably want to host releases on your own servers so you get accurate counts there as well.

If you're an application, then some kind of (opt-in) FE client tracking is also ideal so you get a sense of what in the world people are doing inside the application.”

### What would you do differently if you were starting the product from scratch today?

“The most straight forward thing is that since NLP is basically a solved problem, we'd lean heavily on natural language for querying (note: we're doing this now with our "Metabot").

Bigger picture, I'd have build at least an "preview" paid version of Metabase much earlier and validated it. Making a successful open source project is hard, making a commerical software company is hard, doing both is significantly more annoying. I think understanding how you'll commercialize (read: testing out approaches and validating them) is something you really need to have sorted out really early in the process. We got lucky in that a couple of our early big bets there ended up working, but those could have easily not worked out.”

### When I think about open source analytics my mind goes to Plausible. Can you help me understand how you position yourself relative to them?”

“Metabase goes on top of a database and lets you run queries, make charts, dashboards, set up alerts, etc on the data inside the database. Plausible (and Google Analytics, Mixpanel, etc) are a combination of a front-end library to instrument your application, storage and much simpler querying tools to do what is called "event" or "usage" analytics. Think of it as a fairly specialized use case, while with Metabase you can slice and dice any data you have lying around.”

### Which role in this multiplayer game do you consider AI to play when it comes to analytics?

“Today, the extremely sloppy intern in the analytics department whose work needs to be triple checked.

In a few foundational model generations, I think it should end up replacing human analysts in the "I have a question" -> "here's the answer" loop, and probably in the "this thing is confusing, can you dig into what's happening?" problem as well.”

### What are the key differentiators of your embedding product and why should I pick it over other competitors?

“Fundamentally, I think we're a lazier option than all the alternatives. If you do a bit of front-loaded work on sorting out what the customer-facing schema should look like, you can get something in front of your customer in a week or two. Most people agonize over pixels and completely ignore the shape of their data, and we think (and nudge you in the product) to do the inverse.”

### What was the biggest "aha" moment you had while building Metabase Embedding?

“How often the thing that determines whether a given customer manages to ship, how long it takes them to ship, and then whether their customers use the in-app reporting hinges on the data schema and whether the average user of the application understands what they're looking at. Too often, analysts or data engineers design schemas for other data practitioners, and don't really understand the frame of mind of a normal user of their application.”

### How are you planning to support customer-driven custom analytics in a multi-tenant setup without overloading the shared database?

“Database (or data warehouse) load isn't a magical thing we're going to solve in Metabase itself. At some point, you need to figure out what data sets to expose, what specific forms of questions you expect your users to ask, the indexing patterns of the row-level per-customer data controls, etc.

At a very low scale, having customers hit the application database probably makes sense. But at any realistic customer volume, you *really* should provision a separate database dedicated strictly to serving customer-facing analytics. Caching will help you for a bit, but it's a long-term dead-end.

We strongly suggest treating in-app analytics as a customer-facing feature. For customer-facing features, performance is really important, and you should optimize the DB schema to support that. This almost certainly means moving away from your main application database and creating custom tables that map more closely to how your customers think about the objects in your application.”

### How do you think about building a business on open source code? Do you feel like you "lose" revenue to the self-hosted version? Or is the increased exposure "worth it"? Is that the right way to even frame it? What are the benefits and drawbacks?

“Fundamentally, you're giving away software that will cost you a lot to build in exchange for increased exposure, third parties that will be invested in your project and help (code or otherwise), and an increased amount of trust.

It's a difficult equation to balance, and historically, most people came up negative.

Being Open Source has given us a lot in terms of credibility, talented engineers excited to work on the project, and breadth of exposure. One thing that's made it all work is that there was a somewhat clear vision of what we would sell from early on. I do think you have to either be fully committed to being OSS or not at all. I haven't seen many people who've waffled between the two (especially in the early years) succeed. There are a lot of pivotal early decisions you should be making very differently if you're Open vs Closed source (eg, with regards to user feature requests, support, etc).”

### What are some particularly challenging or gnarly things if I build customer facing analytics in-house?

“I mentioned in another comment that going from "I'll just add this one chart" to realizing you need to hand generic queries is the biggest jump in complexity.

The two other main challenges are getting the schema you present to end users right and making the whole experience performant enough that it's not a punishment to your users.”

### What is the biggest headache when you try to build analytics

“The biggest headache is that typically, after putting in a single chart or two, you start getting requests from your customers about what data they need. It's extremely common for these requests to be highly different, and all "urgent". At some point, you need to accept that you need to build a generic querying interface, which tends to be a big jump in complexity and headaches.”

## Closing

That wraps up the AMA. I had an amazing time answering your questions and sharing more about Metabase Embedding. If you want to help more builders, makers, and product people discover embedding is the move, [support us on Product Hunt](https://www.producthunt.com/products/metabase).

## Extra resources

- [Introducing Metabase's new Embedded Analytics SDK for React](/blog/introducing-embedded-analytics-sdk-for-react)
- [Metabase Learn: Embedding](/learn/metabase-basics/embedding)
- [How Cal.com used Metabase Embedding to build a public dashboard showing their key metrics](/case-studies/calcom)

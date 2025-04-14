---
title:  "Using RFM, AUM, and K-means clustering for customer segmentation"
meta_description: Discover how Cowrywise, a Nigerian fintech platform, segments its customers using RFM, AUM, and __k-means clustering for tailored services and insights.
image: /images/community/og-customer-segmentation.jpg
date:   2025-02-01 12:10:58
read_time: 3 minutes
category_filters: "Working with Metabase"
organization: Cowrywise
organization_url: https://cowrywise.com/
author: Uchechukwu Emmanuel
author_img: /images/community/uchechukwu-emmanuel.png
author_bio: Uchechukwu is a software engineer and technical writer at Cowrywise, a financial technology company that is digitizing wealth management for Africans. He has a keen interest in data engineering and machine learning and enjoys sharing insights on these topics. You can connect with him on Twitter [@onlyoneuche](https://twitter.com/onlyoneuche){:target="_blank"} or [Linkedin](https://www.linkedin.com/in/uchechukwuemmanuel/){:target="_blank"}.
---

Customer segmentation helps companies gain insight into a customer’s behavior and tailor services to meet their needs. RFM clustering is a powerful method for segmenting customers based on their purchasing behavior. At Cowrywise, a Nigerian fintech platform, we use RFM customer segmentation and K-Means clustering for customer segmentation to analyze customer activity and provide personalized financial solutions. By using RFM metrics, we can categorize users based on their spending habits and enhance their experience with tailored offerings.

At Cowrywise, a Nigerian fintech platform, we’re using Metabase to visualize these insights and provide solutions through a combination of:

- RFM (Recency, Frequency, and Monetary Value),
- AUM (Assets Under Management) per day metrics, and
- K-Means clustering.

Below is more on each of them.

## Understanding RFM (Recency, Frequency, and Monetary)

RFM meaning refers to three key customer engagement metrics:

- Recency (time since the last transaction)
- Frequency (the number of transactions made)
- Monetary Value (the total amount spent on the platform)

To calculate RFM scores, we assign values to each metric. Higher scores indicate a more engaged customer. For example, a user who made a transaction yesterday, has frequent transactions, and has spent a significant amount of money receives a higher RFM score.

Below is the Python script we use to calculate RFM scores:

```python
import pandas as pd
import datetime as dt

# Load transaction data
df = pd.read_csv("transactions.csv")

# Convert transaction_date to datetime
df["transaction_date"] = pd.to_datetime(df["transaction_date"])

# Calculate Recency, Frequency, and Monetary Value
snapshot_date = df["transaction_date"].max() + dt.timedelta(days=1)
df_rfm = df.groupby("user_id").agg({
    "transaction_date": lambda x: (snapshot_date - x.max()).days,
    "transaction_id": "count",
    "amount": "sum"
}).reset_index()

# Rename columns
df_rfm.rename(columns={
    "transaction_date": "Recency",
    "transaction_id": "Frequency",
    "amount": "MonetaryValue"
}, inplace=True)

# Print the first five rows of the RFM dataframe
print(df_rfm.head())

```

## Improving RFM with AUM (Assets Under Management)

While RFM customer segmentation is effective, it ignores a customer's investment behavior. As a way to gain a more holistic view of customer investment habits and behaviors, we add AUM (Assets Under Management) per day to RFM scores.

AUM is the total value of assets that a customer has invested in, divided by the number of days since they started investing.
Below is the script we use to create this hybrid metric:

```python
# Load AUM data
df_aum = pd.read_csv("aum.csv")

# Convert start_date to datetime
df_aum["start_date"] = pd.to_datetime(df_aum["start_date"])

# Calculate the number of days since the customer started investing
df_aum["InvestmentDays"] = (snapshot_date - df_aum["start_date"]).dt.days

# Calculate AUM per day
df_aum["AUMperDay"] = df_aum["aum"] / df_aum["InvestmentDays"]

# Merge RFM and AUM dataframes
df_hybrid = pd.merge(df_rfm, df_aum[["user_id", "AUMperDay"]], on="user_id", how="inner")

# Print the first five rows of the hybrid dataframe
print(df_hybrid.head())
```

## Using K-Means Clustering for Customer Segmentation

After calculating RFM metrics and AUM scores, we run k-means clustering for customer segmentation to group similar customers. K-means clustering is a machine learning algorithm that organizes data into k clusters based on shared traits. To find the right number of clusters, we use the [elbow method](https://en.wikipedia.org/wiki/Elbow_method_(clustering)){:target="_blank"}, which identifies the point where adding more clusters no longer significantly improves the grouping.

```python
from sklearn.cluster import KMeans

# combine RFM and AUM data into a single dataframe
rfm_aum_data = pd.concat([rfm_scores, aum_scores], axis=1)

# determine optimal number of clusters using elbow method
wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(rfm_aum_data)
    wcss.append(kmeans.inertia_)
plt.plot(range(1, 11), wcss)
plt.title('Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()

# fit k-means clustering to data
kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, n_init=10, random_state=0)
kmeans.fit(rfm_aum_data)

# assign clusters to each customer
customer_clusters = kmeans.predict(rfm_aum_data)
```

## Visualizing Customer Segments in Metabase

Once each customer is assigned to a cluster, you can begin [visualizing customer segments](/docs/latest/data-modeling/segments) in Metabase! First, make sure that you have a Metabase account and have [connected Metabase to your data source](/docs/latest/databases/connecting). Once you're connected:

1. Select __+ New__ > __Question__.
2. Select your `customer_segmentation` table as the starting point (or whatever you called your table that contains your `rfm_score`, `aum_per_day`, and `segment` fields).
3. Once you have written your query, click __Visualize__ to create your visualization.
4. You can use the [query builder](/docs/latest/questions/query-builder/editor) to filter and summarize that data, then choose the type of visualization you want to use. For example, use a bar chart to show the distribution of customers across different segments, or a scatter plot to show the relationship between RFM score and AUM per day.
5. When you have some interesting results, click on the __Save__ button.
6. You can add the saved question to a Metabase dashboard and set up filters so that people can view the data by segment, date range, or other variable you choose.

---
title: "KiteGuard"
date: "2025-04-01"
description: "KiteGuard is a modern and responsive audit platform designed to handle large, distributed customer datasets with minimal operational overhead."
link: "https://kiteguard.dylanlhoward.com"
image:
  src: "/assets/img/project-Kiteguard.webp"
  alt: "KiteGuard: Automatic bank account monitoring designed for franchise operations."
tags: [ "Astro", "React", "Java", "SQL", "AWS" ]
---

KiteGuard is a SaaS platform designed to help franchise owners detect and prevent fraudulent deposit behavior,
specifically kiting schemes, by automatically auditing the deposits made by store managers across multiple locations. I
led the development of this system, which integrates directly with each franchisee's Point-of-Sale (POS) system and
financial institutions to perform near real-time revenue and deposit reconciliation.

Built with Java and AWS Lambda for scalable, serverless compute and Astro/React on the frontend, KiteGuard is a modern
and responsive audit platform designed to handle large, distributed customer datasets with minimal operational overhead.

## Challenge and Solution:

A significant challenge was ensuring the platform’s auditing logic accounted for edge cases in financial reporting, such
as shared bank accounts between franchise locations and time-delayed deposits. For example, weekend revenue for multiple
stores may be deposited as a single amount on Monday, skewing expected deposit totals. To address this, I designed a
custom algorithm using a HashMap to track counts of deposits by date, amount, and bank account. The algorithm
cross-references this with POS data to identify discrepancies or flag likely false positives—ensuring that no fraudulent
pattern escapes unnoticed, even under atypical conditions.

Another critical challenge was scaling the system to support growing customer bases without compromising performance. I
leveraged a microservices architecture to isolate the ingestion, processing, and alerting pipelines, allowing the system
to scale individual components independently. AWS Lambda functions enabled event-driven processing and cost efficiency.

## System Architecture Highlights:

* Serverless compute model with AWS Lambda and S3 for storage
* Microservices separating ingestion, audit logic, notification engine, and user management
* Real-time POS and bank data synchronization
* Efficient DSA-informed algorithms to support financial edge cases
* Incremental sync engine that polls third-party APIs and triggers updates only when changes are detected

## User Interface Strategy:

While the UI was not the most complex component of KiteGuard, it was critical that it supported efficient
decision-making. Our goal was to present audit data clearly, direct users to potentially fraudulent deposits, and allow
quick resolution actions (e.g., verification or dispute). To ensure performance and scalability, we built the frontend
with Astro and React. Astro allowed us to pre-render pages on the server, reducing client-side load and delivering a
fast, responsive experience even with large datasets.

## Data Synchronization and Efficiency:

To optimize data flow and reduce unnecessary API calls, we implemented a change-aware synchronization strategy.
Background workers periodically polled the POS and financial APIs to detect modifications since the last sync. If
changes were identified, targeted updates were triggered—ensuring system performance while maintaining up-to-date
accuracy.

## Security Measures:

Given the sensitivity of financial data, security was integrated into every layer of the platform:

* Data encryption in transit (TLS) and at rest (AWS KMS)
* Scoped API tokens and role-based access control (RBAC) for fine-grained permissions
* IAM policies designed with least privilege principles
* Detailed audit logging for all user and system activities

## Monitoring and Observability:

Operational transparency and reliability were ensured through robust monitoring:

* AWS CloudWatch for real-time logs and performance metrics
* Custom dashboards tracking sync success/failure rates, latency, and error frequency
* Alerting systems to detect unusual activity patterns or service degradation

## Soft Skills and Collaboration:

KiteGuard’s success depended heavily on my ability to work closely with non-technical franchise owners and financial
stakeholders. I translated complex audit concepts into intuitive UI components and dashboard metrics, ensuring users
could easily understand and act on audit findings. I also collaborated with compliance consultants to define the
system’s alert thresholds and audit heuristics.

This project showcases my ability to design high-performance, scalable backend systems while addressing nuanced
financial edge cases with clarity, rigor, and precision. It also highlights my strengths in client communication,
problem modeling, system efficiency, and cross-functional alignment to bring a product from vision to production.

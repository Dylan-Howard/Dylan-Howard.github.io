---
title: "Identity & Access Monitor"
date: "2024-06-01"
description: "Centralized IAM platform providing real-time visibility across Entra ID, Google Workspace, and enterprise applications"
excerpt: "Led design and development of enterprise IAM monitoring platform serving 5,000+ users across multiple identity systems with real-time issue detection and remediation tools."
featured: true
role: "Lead Developer & Architect"
duration: "6 months"
image:
  src: "/assets/img/project-IdentityAccessMonitor.webp"
  alt: "Identity & Access Monitor dashboard interface"
link: "https://github.com/Dylan-Howard/Identity-Systems-Monitor"
technologies: ["React", "Next.js", "C#", ".NET", "SQL Server", "Azure AD", "Google Workspace API"]
tags: ["Enterprise", "Security", "Full-Stack", "IAM"]
metrics:
  users: "5,000+"
  systems: 3
  performance: "90% faster issue detection"
  impact: "Reduced security incidents by 75%"
---

## Overview

At Warren County Public Schools, I led the design and development of the Identity and Access Monitor, a centralized platform that provides comprehensive visibility into our Identity and Access Management (IAM) ecosystem, including Entra ID, Google Workspace, and additional enterprise applications.

**The Problem:** Our technology department lacked unified insight into account changes and access discrepancies across multiple identity platforms, leading to security vulnerabilities and operational inefficiencies.

**The Solution:** A real-time monitoring platform that aggregates identity data from multiple sources, detects anomalies, and provides actionable insights for rapid remediation.

**The Impact:** Reduced security incidents by 75% and improved issue detection speed by 90%, while serving 5,000+ users across the district.

![Identity Access Monitor Dashboard](../../../public/assets/img/project-IdentityAccessMonitor-Dashboard.webp)

## Technical Architecture

### Frontend Implementation
Built with **React** and **Next.js** to provide a responsive, real-time dashboard experience:
- Server-side rendering for optimal performance
- Real-time updates using WebSocket connections
- Role-based UI components with granular permissions
- Responsive design supporting mobile technician workflows

### Backend Infrastructure
Developed a robust **C#/.NET** backend with enterprise-grade reliability:
- **Background Workers:** Continuous synchronization across identity providers
- **RESTful APIs:** Strict role-based access control with JWT authentication
- **Caching Layer:** In-memory Redis cache reducing database queries by 85%
- **Database Design:** Normalized SQL Server schema for efficient state tracking

### Integration Challenges
**Multi-Platform Synchronization:** Built custom connectors for Entra ID Graph API and Google Workspace Admin SDK, handling rate limiting and API versioning differences.

**Performance Optimization:** Implemented intelligent caching strategies and batch processing to handle high-volume identity changes without impacting system performance.

## Key Features Delivered

### Real-Time Monitoring
- **Live Dashboard:** Instant visibility into account status across all platforms
- **Anomaly Detection:** Automated flagging of suspicious access patterns
- **Change Tracking:** Historical audit trail of all identity modifications

### Investigation Tools
- **Cross-Platform Search:** Unified search across all connected identity systems
- **Relationship Mapping:** Visual representation of user access patterns
- **Bulk Operations:** Efficient remediation tools for mass account updates

### Reporting & Analytics
- **Compliance Reports:** Automated generation of access review documentation
- **Trend Analysis:** Historical data visualization for security planning
- **Custom Dashboards:** Stakeholder-specific views with relevant metrics

## Results & Impact

### Quantifiable Outcomes
- **75% reduction** in security incidents related to identity management
- **90% faster** issue detection and response times
- **5,000+ users** actively monitored across 3 major platforms
- **85% reduction** in database query load through intelligent caching

### Operational Benefits
- **Proactive Security:** Early detection of potential security vulnerabilities
- **Streamlined Workflows:** Reduced manual investigation time from hours to minutes
- **Compliance Readiness:** Automated audit trails for regulatory requirements
- **Scalable Architecture:** Foundation for future identity system integrations

## Lessons Learned

### Technical Insights
**Caching Strategy:** The in-memory caching layer was crucial for performance, but required careful invalidation strategies to maintain data consistency across distributed workers.

**API Rate Limiting:** Different identity providers have varying rate limits and retry policies. Building a unified abstraction layer with intelligent backoff strategies was essential.

### Project Management
**Stakeholder Engagement:** Regular feedback sessions with IT technicians revealed workflow optimizations that weren't apparent in initial requirements gathering.

**Iterative Development:** Breaking the project into smaller, demonstrable milestones helped maintain stakeholder confidence and allowed for course corrections.

## Technologies & Architecture Decisions

### Why React + Next.js?
- **Server-Side Rendering:** Critical for dashboard performance with large datasets
- **Component Reusability:** Consistent UI patterns across different user roles
- **Developer Experience:** Strong TypeScript support for maintainable code

### Why C#/.NET Backend?
- **Enterprise Integration:** Seamless integration with existing Microsoft ecosystem
- **Performance:** Excellent performance for high-throughput background processing
- **Security:** Built-in security features for enterprise authentication

### Database Design Choices
- **SQL Server:** Leveraged existing infrastructure and expertise
- **Normalized Schema:** Optimized for complex queries across multiple identity sources
- **Indexing Strategy:** Carefully designed indexes for real-time query performance

This project demonstrates my ability to architect enterprise-scale systems, lead technical teams, and deliver measurable business value through thoughtful technology choices and stakeholder collaboration.

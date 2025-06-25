---
title: "Ancient Greek Learning Platform"
date: "2023-11-01"
description: "Ancient Greek learning platform providing interactive tools to enhance comprehension and vocabulary acquisition."
link: "https://github.com/Dylan-Howard/Greek-Learning-App"
image:
  src: "/assets/img/project-GreekLearningApp.webp"
  alt: "Koine: Ancient Greek Learning Platform"
tags: [ "React", ".NET", "Go", "Azure Cloud", "SQL", "NoSQL" ]
---

This project is a full-stack learning platform tailored to students of Koine Greek. I designed and implemented the
system to deliver highly personalized learning experiences by dynamically adapting text content to each student’s
vocabulary and grammar proficiency. The frontend was built using React and TypeScript, delivering a responsive,
interactive interface that rendered customized Greek texts based on real-time data from the backend.

![koine-demo.gif](../../../public/assets/img/project-GreekLanguageLearningApplication-demo.gif)

## System Architecture and Technology Stack:

The platform was developed with a modern cloud-native approach using Microsoft Azure and a microservice architecture:

* **Backend Services:** Implemented in C#, .NET, and Go, hosted as Azure Functions for a scalable, serverless compute
  layer
* **API Management:** All services exposed through Azure API Management using REST APIs to orchestrate user
  authentication, progress tracking, and content generation
* **Frontend:** React and TypeScript for a dynamic, state-driven UI that consumes backend data to create individualized
  learning experiences

### Data Management Strategy:

To support flexible and scalable storage:

* **Azure Cosmos DB (NoSQL)** was used for unstructured and semi-structured user progress data, enabling fast,
  schema-less updates and storage of complex user learning profiles
* **Azure SQL Database** was used for managing structured Koine Greek texts and metadata, including lexical data,
  grammatical annotations, and reading levels

### Personalization Engine:

The core of the learning experience was a text generation engine that selected Koine Greek texts based on a student’s
demonstrated vocabulary knowledge and grammar mastery. Backend services processed user histories, evaluated learning
thresholds, and filtered or annotated passages accordingly. This empowered students to focus on achievable texts while
incrementally expanding their skills.

### Asynchronous Processing:

To maintain responsiveness and offload heavy computation from the UI, intensive tasks like text parsing and annotation
were handled asynchronously. These tasks were queued and processed in the background, allowing users to continue
interacting with the platform without delay.

### Fallbacks and Caching:

To improve resilience and performance, we implemented caching for frequently accessed learning materials and user
preferences. In the event of a backend failure or timeout, the system served cached content or fallback data (e.g.,
default texts or static annotations) to preserve continuity in the learning experience.

### Localization and Unicode Handling:

Given the linguistic complexity of Koine Greek, the system was designed with full support for Unicode normalization and
accurate accent rendering. These features ensured proper display and processing of texts across devices and browsers,
and laid the groundwork for future expansion into multilingual learning environments.

### Scalability and Extensibility:**

The serverless architecture allowed the system to scale dynamically as user demand increased, while keeping
infrastructure costs minimal. The modularity of services enabled easy enhancements, such as the planned integration of
spaced repetition algorithms and grammar quizzes.

### Soft Skills and Product Development:**

This project required translating domain expertise (Koine Greek pedagogy) into a robust engineering solution. I
collaborated with language educators to define the grammar and vocabulary scope for each proficiency level. I also
performed all technical planning, documentation, and release management independently, communicating effectively across
both technical and non-technical domains.

This project demonstrates my ability to build highly personalized, data-driven educational software with a scalable
backend and thoughtful system design, as well as my ability to lead full lifecycle software development from ideation to
deployment.

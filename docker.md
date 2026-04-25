# 🐳 Docker Complete Syllabus (Beginner → Advanced)

---

## 🟢 Module 1: Fundamentals

### Topics:
- What is Docker?
- Why Docker? (problem it solves)
- Virtualization vs Containerization
- Docker vs Virtual Machines
- Use cases of Docker

---

## 🟢 Module 2: Docker Architecture

### Components:
- Docker Client
- Docker Daemon
- Docker Engine
- Docker Registry (Docker Hub)

### Concepts:
- Images
- Containers
- Layers
- Union File System

---

## 🟢 Module 3: Docker Installation & Setup

### Topics:
- Install Docker (Windows / Linux / Mac)
- Verify installation
- Docker Desktop overview

### Commands:
- `docker --version`
- `docker info`

---

## 🟢 Module 4: Docker Images

### Topics:
- What is an Image?
- Image layers
- Pulling images from Docker Hub

### Commands:
- `docker pull image_name`
- `docker images`
- `docker rmi image_name`

---

## 🟢 Module 5: Docker Containers

### Topics:
- What is a Container?
- Container lifecycle

### Commands:
- `docker run`
- `docker start`
- `docker stop`
- `docker restart`
- `docker ps`
- `docker rm`

---

## 🟡 Module 6: Dockerfile (IMPORTANT)

### Topics:
- What is Dockerfile?
- Writing Dockerfile

### Instructions:
- `FROM`
- `WORKDIR`
- `COPY`
- `RUN`
- `CMD`
- `EXPOSE`
- `ENV`

### Commands:
- `docker build -t image_name .`

---

## 🟡 Module 7: Docker Volumes

### Topics:
- What is Volume?
- Data persistence

### Types:
- Named Volumes
- Bind Mounts

### Commands:
- `docker volume create`
- `docker volume ls`
- `docker volume rm`

---

## 🟡 Module 8: Docker Networking

### Topics:
- What is Docker Network?
- Container communication

### Types:
- Bridge (default)
- Host
- None
- User-defined bridge
- Overlay (Docker Swarm)
- Macvlan

### Commands:
- `docker network ls`
- `docker network create`
- `docker network inspect`

---

## 🟡 Module 9: Docker Compose

### Topics:
- What is Docker Compose?
- Multi-container applications

### File:
- `docker-compose.yml`

### Commands:
- `docker compose up`
- `docker compose down`
- `docker compose build`

---

## 🔵 Module 10: Environment Variables & Secrets

### Topics:
- Passing environment variables
- `.env` files
- Managing secrets

---

## 🔵 Module 11: Debugging & Logs

### Commands:
- `docker logs container_id`
- `docker exec -it container bash`
- `docker inspect`

---

## 🔵 Module 12: Docker Registry

### Topics:
- Docker Hub
- Private registry

### Commands:
- `docker login`
- `docker tag`
- `docker push`
- `docker pull`

---

## 🔵 Module 13: Optimization & Best Practices

### Topics:
- Multi-stage builds
- Reducing image size
- `.dockerignore`
- Caching layers

---

## 🔵 Module 14: Docker Security Basics

### Topics:
- Image vulnerabilities
- Secure containers
- Least privilege principle

---

## 🔴 Module 15: Docker Swarm (Optional Advanced)

### Topics:
- What is Docker Swarm?
- Cluster setup
- Services & scaling

---

## 🔴 Module 16: Real-World Projects

### Projects:
- Dockerize Node.js app
- Dockerize MERN app
- Multi-container app (Frontend + Backend + DB)
- Nginx + Node setup

---

## 🧪 Module 17: Hands-on Labs

### Practice:
- Run nginx container
- Build custom image
- Connect containers via network
- Use Docker Compose
- Debug container errors

---

## 🎯 Module 18: Interview Preparation

### Important Questions:
- Docker vs Virtual Machine
- Image vs Container
- CMD vs RUN
- COPY vs ADD
- Volume vs Bind Mount
- Bridge vs Host network

---

## ⏱️ Suggested Timeline

| Level | Time |
|------|------|
| Beginner | 5–7 days |
| Intermediate | 7–10 days |
| Advanced + Projects | 10–15 days |

**Total: ~25–30 days (Job Ready)**

---

## 💡 Best Learning Path (MERN Developer)

1. Learn Docker basics
2. Dockerize Node.js backend
3. Dockerize React frontend
4. Use Docker Compose (MERN setup)
5. Connect MongoDB container
6. Optimize Dockerfile

---
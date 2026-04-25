# 📚 Kubernetes Complete Syllabus (Beginner → Advanced)

---

## 🟢 Module 1: Fundamentals & Prerequisites

### Topics:
- What is Kubernetes?
- Why Kubernetes (problems it solves)
- Containerization vs Virtualization
- Container Orchestration
- History (Google Borg → Kubernetes)

### Prerequisites:
- Docker basics (images, containers)
- Linux commands
- YAML basics

---

## 🟢 Module 2: Kubernetes Architecture

### Control Plane:
- API Server
- Scheduler
- Controller Manager
- etcd

### Worker Node:
- Kubelet
- Kube Proxy
- Container Runtime

### Concepts:
- Cluster
- Node
- Pod lifecycle

---

## 🟢 Module 3: Core Kubernetes Objects

### Topics:
- Pods (single & multi-container)
- Labels & Selectors
- Annotations
- Namespaces

### Practice:
- Create Pod YAML
- Run pod using kubectl

---

## 🟡 Module 4: Workloads

### Topics:
- ReplicaSet
- Deployment
  - Rolling Updates
  - Rollbacks
- StatefulSet
- DaemonSet
- Jobs
- CronJobs

---

## 🟡 Module 5: Services & Networking

### Topics:
- Service Types:
  - ClusterIP
  - NodePort
  - LoadBalancer
- DNS in Kubernetes
- Pod-to-Pod communication
- Ingress & Ingress Controller

---

## 🟡 Module 6: Storage & Volumes

### Topics:
- Volumes
- Persistent Volume (PV)
- Persistent Volume Claim (PVC)
- Storage Classes
- Stateful vs Stateless apps

---

## 🟡 Module 7: Configuration Management

### Topics:
- ConfigMaps
- Secrets
- Environment variables
- Injecting configs into Pods

---

## 🔵 Module 8: Security

### Topics:
- RBAC (Role-Based Access Control)
- Service Accounts
- Network Policies
- Pod Security Standards
- TLS & Certificates basics

---

## 🔵 Module 9: Resource Management & Scaling

### Topics:
- Requests & Limits
- Resource quotas
- Horizontal Pod Autoscaler (HPA)
- Vertical Pod Autoscaler (VPA)
- Cluster Autoscaler

---

## 🔵 Module 10: Kubernetes CLI & Debugging

### Topics:
- kubectl commands:
  - get, describe, apply, delete
  - logs, exec, port-forward
- Debugging pods
- Troubleshooting common errors

---

## 🔵 Module 11: Package Management (Helm)

### Topics:
- What is Helm?
- Helm charts
- Installing applications using Helm
- Creating custom Helm charts

---

## 🔵 Module 12: Monitoring & Logging

### Topics:
- Prometheus (metrics)
- Grafana (visualization)
- Logging:
  - ELK Stack (Elasticsearch, Logstash, Kibana)
- Alerts setup

---

## 🔵 Module 13: CI/CD with Kubernetes

### Topics:
- CI/CD concepts
- Kubernetes deployment pipelines
- Tools:
  - GitHub Actions
  - Jenkins
- Rolling deployments in CI/CD

---

## 🔴 Module 14: Kubernetes on Cloud

### Topics:
- Managed Kubernetes:
  - AWS EKS
  - GCP GKE
  - Azure AKS
- Cluster setup on cloud
- Load balancers & storage in cloud

---

## 🔴 Module 15: Advanced Kubernetes

### Topics:
- Custom Resource Definitions (CRDs)
- Operators
- Service Mesh (Istio basics)
- Multi-cluster architecture
- API extensions

---

## 🔴 Module 16: Real-World Projects

### Projects:
- Deploy Node.js app on Kubernetes
- Deploy MERN stack app
- Microservices architecture
- Auto-scaling application
- CI/CD pipeline with Kubernetes

---

## 🧪 Module 17: Hands-on Labs

### Practice:
- Setup cluster using Minikube
- Deploy sample apps
- Expose app using service
- Setup Ingress
- Scale applications
- Debug failed pods

---

## 🎯 Module 18: Interview Preparation

### Important Questions:
- Pod vs Container
- Deployment vs ReplicaSet
- Service vs Ingress
- etcd role
- Scheduler working
- Rolling update vs recreate

---

## ⏱️ Suggested Timeline

| Level | Time |
|------|------|
| Beginner | 1–2 weeks |
| Intermediate | 2–3 weeks |
| Advanced + Projects | 3–4 weeks |

**Total: 5–7 weeks (Job Ready)**

---

## 💡 Best Learning Path (MERN Developer)

1. Learn Docker properly
2. Setup Kubernetes (Minikube)
3. Deploy Node.js backend
4. Add Service + Ingress
5. Add MongoDB with PVC
6. Deploy full MERN application

---
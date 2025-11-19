# **Jummah Cast**

Jummah Cast is a cross-cloud, active-active application designed to store, manage, and play Islamic lectures at your convenience. The platform provides a simple and intuitive way for users to upload their lectures and listen in their own time.

---

## 🚀 **Project Overview**

Jummah Cast runs across **AWS** and **Azure** in an active-active architecture to ensure high availability, resilience, and fast global access.

Users can securely upload audio lectures, manage them through a clean React interface, and listen whenever they want.

---

## 🏗️ **Architecture Summary**

### **Frontend**
- Built using **React**
- User-friendly interface for uploading and listening to lectures

### **Backend**
- **Node.js + Express.js**
- REST APIs for authentication, metadata handling, and lecture retrieval

### **Databases & Storage**
- **MongoDB**
  - Stores user accounts, authentication data, and metadata
- **Supabase Storage**
  - Stores and delivers lecture audio files

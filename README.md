This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# Blona Challenge

This is my solution to the Blona coding challenge. Yuuup :D

## Description

This project is a web application built with Next.js that addresses the Blona Challenge. It consists of three main features:

1. **User-Login Page**: Users can log in with the provided credentials:
   - Username: Blona
   - Password: ToTheSky

2. **PDF Uploader**: Authenticated users can:
   - Upload new PDF files
   - View the list of previously uploaded PDFs
   - Delete previously uploaded PDFs

3. **Text Parser**: For each uploaded PDF, the content (text) is parsed out of the PDF. Parsing is triggered once a new PDF is uploaded, and the plain text belonging to each PDF is made available to the user.

## Tech Stack

The project utilizes the following technologies:
- TypeScript
- React
- Next.js
- Node.js

Libraries and Tools:
- React Dropzone for file uploads
- pdfjs-dist for PDF parsing
- Chakra UI for styling

## Getting Started

To run this project locally, follow these steps:

 run the development server:

```bash
npm run dev

```

Open [http://localhost:3000/login](http://localhost:3000/login) with your browser to see the result.


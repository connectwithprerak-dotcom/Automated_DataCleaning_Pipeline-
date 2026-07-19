# Automated_DataCleaning_Pipeline-

# n8n Data Cleaning Pipeline

## Overview

An ETL workflow built using n8n to clean, validate, and route customer data from PostgreSQL.

## Features

- Extract data from PostgreSQL
- Normalize names
- Normalize emails
- Normalize phone numbers
- Validate customer records
- Separate valid and invalid data
- Store valid data
- Export invalid data for review

## Tech Stack

- n8n
- PostgreSQL
- JavaScript
- Google Sheets

## Workflow

<img width="460" height="196" alt="Screenshot 2026-07-19 at 9 15 39 PM" src="https://github.com/user-attachments/assets/e8e94052-48c5-4d7b-a816-9921df64cf9f" />

## Validation Rules

- Name cannot be empty
- Email must match regex
- Phone contains digits only

## Setup

1. Install n8n
2. Create PostgreSQL tables
3. Import workflow
4. Configure credentials
5. Execute workflow

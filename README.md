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

## Architecture

(Add architecture diagram)

## Workflow

(Add n8n workflow screenshot)

## Validation Rules

- Name cannot be empty
- Email must match regex
- Phone contains digits only

## Project Structure

...

## Setup

1. Install n8n
2. Create PostgreSQL tables
3. Import workflow
4. Configure credentials
5. Execute workflow

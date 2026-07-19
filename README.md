# Automated_DataCleaning_Pipeline-

Automated Customer Data Cleaning and Validation Pipeline using n8n

This project implements an automated ETL (Extract, Transform, Load) data quality pipeline using n8n, JavaScript validation logic, PostgreSQL, and Google Sheets.

The workflow extracts customer records from a PostgreSQL database, performs data normalization and validation, separates valid and invalid records, and stores the results into different Google Sheets for review and further processing.

PostgreSQL
(NewData Table)
        |
        |
        ↓
n8n Workflow Trigger
        |
        |
        ↓
Data Cleaning Layer
(JavaScript Code Node)
        |
        |
        ↓
Validation Engine
(JavaScript Rules)
        |
        |
        ↓
Decision Layer
(IF Condition)
        |
        ┌───────────────┐
        ↓               ↓
 Valid Records     Invalid Records
        |               |
        ↓               ↓
 Google Sheet      Google Sheet
   (Pass)            (Failed)
        |
        |
        ↓
PostgreSQL
(Customers Table)

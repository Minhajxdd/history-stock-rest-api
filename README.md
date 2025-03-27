# Stock Price API

This application is designed to fetch closed stock data from a Google Sheet and serve it through a RESTful API. The data in the Google Sheet includes pre-loaded stock information, such as symbols and their corresponding closed prices for specific dates. The API extracts this data and returns it based on client queries.

For example, you can retrieve stock price data by making a request like:

https://stock.mohammedminhaj.blog/api/stock-price?symbol=NSE:%20TCS&date=2024-08-21


Here:
- **symbol** represents the stock identifier.
- **date** specifies the trading day for which the data is required.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Google Sheets API Setup](#google-sheets-api-setup)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The Stock Price API is built using:
- **Node.js** and **NestJS** for a robust and scalable server-side framework.
- **Docker** and **Docker Compose** to containerize the application, ensuring consistency across environments.

The application’s primary function is to read stock data from a Google Sheet that contains information about closed stocks. It then exposes endpoints to allow users to query this data based on specific symbols and dates.

---

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:
- [Node.js (>= 14.x)](https://nodejs.org/)
- [NestJS CLI](https://docs.nestjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Google Sheets API Setup

To integrate the Google Sheets API, follow these steps:

1. **Create a Google Cloud Project:**
   - Visit the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.

2. **Enable the Google Sheets API:**
   - In your project dashboard, navigate to **APIs & Services > Library**.
   - Search for **Google Sheets API** and enable it.

3. **Create a Service Account:**
   - Go to **APIs & Services > Credentials**.
   - Click on **Create Credentials** and select **Service Account**.
   - Follow the prompts to create your service account.
   - Once created, generate a new key in JSON format.
   - Download the `credentials.json` file and place it in the project directory as referenced by the Docker Compose configuration.

4. **Share Your Google Sheet:**
   - Open your Google Sheet that contains the stock data.
   - Share the sheet with the service account email (found in your `credentials.json` file) granting Editor permissions.
   - You can refer to the following Google Sheet as an example dataset:  
     [Sample Stock Data](https://docs.google.com/spreadsheets/d/1QHrstRCc1epOSRqi1lew8pJXwQUFMTYAHyXtAD2kC_I/edit?gid=0#gid=0)

5. **Configure Environment Variables:**
   - Rename the provided `env.template` file to `.env`.
   - Add the following variables (and any additional ones you need) in the `.env` file:
     ```env
      GOOGLE_SHEETS_ID=<googlesheetid>
      CREDENTIALS_PATH=./credentials.json
      GOOGLE_SHEETS_SCOPES=https://www.googleapis.com/auth/spreadsheets
     ```
   - Ensure that the `credentials.json` file is in the correct directory as expected by the Docker Compose setup.

---

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Minhajxdd/history-stock-rest-api.git
   cd history-stock-rest-api

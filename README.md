Checklist System
A Node.js-based system that evaluates specific checklist conditions on input data fetched from an API and displays the results on a simple dashboard.

Features
Fetches input data from an API endpoint.
Dynamically evaluates checklist rules.
Displays the results (Passed/Failed) on a web-based dashboard.
Modular and clean codebase for easy scalability and maintenance.
Technologies Used
Node.js: Backend runtime.
Express.js: To serve the dashboard.
Axios: For API requests.
HTML/CSS/JS: For the simple dashboard interface.
Installation
Prerequisites
Node.js installed on your machine.
Steps
Clone this repository:
bash
Copy code
git clone <repository-url>
cd checklist-system
Install dependencies:
bash
Copy code
npm install
Set up environment variables:
Create a .env file in the project root and add the following (if required):
bash
Copy code
API_URL=http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639
PORT=3000
Usage
Start the application:
bash
Copy code
node src/index.js
Open your browser and navigate to:
arduino
Copy code
http://localhost:3000
The dashboard will display the evaluation results of the checklist conditions.
Project Structure
bash
Copy code
checklist-system/
├── src/
│   ├── index.js        # Main entry point
│   ├── api.js          # API data fetching logic
│   ├── rules.js        # Configuration of checklist rules
│   ├── evaluator.js    # Checklist evaluation logic
│   ├── dashboard.js    # Dashboard setup
├── public/
│   ├── index.html      # Dashboard HTML
│   ├── styles.css      # Dashboard styling
├── .env                # Environment variables
├── package.json        # Project dependencies
└── README.md           # Documentation
How It Works
Fetch Input Data:

Data is fetched from the API using the endpoint specified in the .env file.
Evaluate Rules:

Rules are defined in rules.js and evaluated dynamically.
Each rule has an id, description, and a check function.
Render Dashboard:

Results of the rule evaluations are displayed in a browser-based dashboard.
Example Checklist Rules
The following conditions are evaluated:

Valuation Fee Paid: Checks if isValuationFeePaid is true.
UK Resident: Checks if isUkResident is true.
Risk Rating Medium: Checks if riskRating is "Medium".
LTV Below 60%: Ensures Loan-to-Value ratio (calculated as (Loan Required / Purchase Price) * 100) is below 60%.
Rules can be easily modified or extended in rules.js.

Future Improvements
Add detailed error handling for API failures or invalid responses.
Implement a more sophisticated UI for the dashboard.
Introduce unit tests for the rule evaluation logic.
License
This project is open-source and available under the MIT Licens

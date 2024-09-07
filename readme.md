# Stock Management Web Application

This is a simple full-stack web application that allows users to manage a list of stocks. The application includes both backend and frontend features. The backend is built using Flask and PostgreSQL, and the frontend is built using HTML, CSS, and JavaScript.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete stocks.
- **Frontend**: Basic but functional frontend using HTML, CSS, and JavaScript.
- **Backend**: RESTful API built with Flask and Flask-SQLAlchemy.
- **Database**: PostgreSQL for persistent data storage.
- **Pagination**: Optional pagination feature for displaying the list of stocks.

## Project Structure

stocks-app/ ├── app.py ├── requirements.txt ├── static/ │ ├── main.js │ └── styles.css ├── templates/ │ └── index.html └── README.md


## Installation

### Prerequisites

- Python 3.x
- PostgreSQL

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/never-code/stocks-app.git
   cd stocks_p

2. python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3. pip install -r requirements.txt

4. CREATE DATABASE stocks_db;

5. Update the config file :  SQLALCHEMY_DATABASE_URI ='postgresql://username:password@localhost/stocks_db' [change username:password]

Make sure that PostgreSQL is connected and before running the command `python app.py` ensure that stocks_db is created in PostgresSQL through pgadmin/psql




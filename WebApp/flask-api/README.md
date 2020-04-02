To run flask app
1. Change directory to flask-api
2. Create a python virtual environment
	python3 -m venv venv
3. Activate the virtual environment
	source venv/bin/activate (For Linux)
    venv\Scripts\activate (For Windows)
4. Install all dependencies from the requirements.txt file
    pip install -r requirements.txt
5. Run the app
    FLASK_APP=api.py flask run

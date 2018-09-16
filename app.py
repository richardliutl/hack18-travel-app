from flask import Flask, request, jsonify, render_template
from time import sleep
from datetime import datetime

app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
    return render_template("home.html")

@app.route('/api/places', methods=['GET'])
def api_id():
    # Check if place data was provided as part of the URL.
    # If place data is provided, assign it to a variable.
    # If no place data is provided, display an error in the browser.
    if 'from_place' in request.args:
        from_place = request.args['from_place']
        if from_place == '':
            return "Error: No [from place] field provided. Please specify a [from place]."
    else:
        return "Error: No [from place] field provided. Please specify a [from place]."
    
    if 'to_place' in request.args:
        to_place = request.args['to_place']
        if to_place == '':
            return "Error: No [to place] field provided. Please specify a [to place]."
    else:
        return "Error: No [to place] field provided. Please specify a [to place]."

    # return "{} {}".format(from_place, to_place)

    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    # for book in books:
    #     if book['id'] == id:
    #         results.append(book)

    # Use the jsonify function from Flask to convert our list of
    # Python dictionaries to the JSON format.
    # return jsonify(results)

    price_data = [[datetime(2018, 9, 15, 17, 14, 41, 814154), datetime(2018, 9, 16, 17, 14, 41, 814154), datetime(2018, 9, 17, 17, 14, 41, 814154), datetime(2018, 9, 18, 17, 14, 41, 814154), datetime(2018, 9, 19, 17, 14, 41, 814154), datetime(2018, 9, 20, 17, 14, 41, 814154), datetime(2018, 9, 21, 17, 14, 41, 814154), datetime(2018, 9, 22, 17, 14, 41, 814154)], [165.2, 165.2, 165.2, 81.2, 81.2, 81.2, 81.2, 65.2]]
    
    sleep(1)

    return jsonify(price_data)

if __name__ == '__main__':
    app.run(debug=True)
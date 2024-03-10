from flask import Flask, request, jsonify
from PyMovieDb import IMDB


imdb = IMDB()
# print(res)


app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    SearchID = data.get('SearchID', "")
    # value2 = data.get('value2', "")
    # res = imdb.get_by_name(value1, tv=False)
    res = imdb.get_by_id(SearchID)
    # value2 = data.get('value2', 0)

    # Perform calculations (e.g., addition)
    

    return jsonify({'IMBD$DATA': res})

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask server
  
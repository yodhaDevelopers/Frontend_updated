from flask import Flask , render_template, request, jsonify

#from chat import get_response

app = Flask(__name__)

@app.route("/", methods=["GET"])
#app.get("/")
def index_get():
    return render_template('base.html')

#@app.post("/predict")
@app.route("/predict", methods=["POST"])
def predict():
    text = request.get_json().get("message")
    #TODO: check if check is valid
    #response = get_response(text)
    response = "Hello!"
    message= {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)

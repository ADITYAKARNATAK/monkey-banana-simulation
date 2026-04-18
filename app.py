from flask import Flask, render_template, jsonify

app = Flask(__name__)

def solve_problem():
    return [
        "Monkey goes to box",
        "Monkey pushes box to banana",
        "Monkey climbs box",
        "Monkey grabs banana 🍌"
    ]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/run')
def run():
    return jsonify(solve_problem())

if __name__ == '__main__':
    app.run(debug=True)
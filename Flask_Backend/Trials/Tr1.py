import json

data = ["hello", "world"]
x = json.dumps(data)
y = json.loads(x)
print(x, y[1] , type(y))
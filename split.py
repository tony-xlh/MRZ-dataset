import json
import os

with open("data.json",'r') as f:
    data = f.read()
    result_dict = json.loads(data)

print(result_dict)

images = result_dict["images"]

for image in images:
    name, ext = os.path.splitext(image["filename"])
    with open(name+".json",'w') as f:
        f.write(json.dumps(image))
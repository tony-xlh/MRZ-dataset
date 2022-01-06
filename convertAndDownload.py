import json

import requests
import openpyxl



def download():
    wb = openpyxl.load_workbook("mrz.xlsx")
    sh = wb.get_sheet_by_name("Sheet1")
    for row in sh.rows:
        if row[0].value == "Synthetic":
            filename = row[1].value
            url = row[4].value
            r = requests.get(url) 
            with open(filename,'wb') as f:
                f.write(r.content)
            

def convert():
    result_dict = {}
    images = []
    result_dict["images"] = images
    wb = openpyxl.load_workbook("mrz.xlsx")
    sh = wb.get_sheet_by_name("Sheet1")
    head = True
    for row in sh.rows:
        if head:
            head = False
            continue
        image = {}
        image["type"] = row[0].value.lower()
        image["filename"] = row[1].value
        boxes = []
        box = {}
        box["text"] = row[2].value
        boxes.append(box)
        image["boxes"] = boxes
        image["source"] = row[3].value
        image["url"] = row[4].value
        images.append(image)
    with open("data.json",'w') as f:
        f.write(json.dumps(result_dict,indent=4))


convert()

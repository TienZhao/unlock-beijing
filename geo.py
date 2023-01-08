import json, requests, time
# -*- coding: utf-8 -*-

geoUrl = 'https://restapi.amap.com/v3/geocode/geo'
placeUrl = 'https://restapi.amap.com/v3/place/text'
key = '99fc260f6aa265a70066a1a377fa5fbc'
cityCode = '010'


def getPlace(add):
    data = {
        'key': key,
        'keywords': add,
        'city': cityCode,
        'citylimit': True,
        'output': 'json',
    }
    res = requests.get(placeUrl, data).json()
    return res

pois_all = []
pois_selected = []

with open('pois.txt', 'r+', encoding='utf-8') as f:
    lines = []
    for line in f.readlines():
        res = getPlace(line)
        print(res['pois'][0])
        print(',')
        pois_selected.append(res['pois'][0])
        for poi in res['pois']:
            if poi not in pois_all:
                pois_all.append(poi)
        time.sleep(0.5)


with open('pois_selected.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(pois_selected, ensure_ascii=False))



with open('pois_all.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(pois_all, ensure_ascii=False))
        


import json

with open ('pois_selected.json', 'r', encoding='utf-8') as f:
    pois_selected = json.load(f)
    print('var positives = [')
    for poi in pois_selected:
        poi_view = {}
        poi_view["lnglat"] = poi["location"].split(',')
        poi_view["name"] = poi["name"]
        poi_view["style"] = 0
        print(str(poi_view)+',')
    print(']')

# var positives = [
# {'lnglat': [121.479278, 31.211195], 'name': '【中风险】黄浦区顺昌路612弄12号', 'style': 0},
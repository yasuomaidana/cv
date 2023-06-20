
from collections import namedtuple
from enum import Enum
from typing import List
from bs4 import BeautifulSoup
import re
import json
from collections import namedtuple
import os

class PortfolioTag(Enum):
    Coding = 1
    Robotics = 2
    Electronics = 3
    Control = 4
    Other = 5

class EnumEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, PortfolioTag):
            return str("PortfolioTag." + obj.name.format())
        return super().default(obj)
def read_info(directory_root,filename):
    info = []
    with open(os.path.join(directory_root,f"{filename}.txt")) as file:
        for line in file.readlines():
            info.append(line.replace("\n",""))
    file.close()
    return(info)

def get_tags(directory_root):
    return read_info(directory_root,"category")



def format_tag(tags: List[str]):
    allowed_tags = ["Coding", "Robotics", "Electronics", "Control"]
    tag_format = PortfolioTag
    if tags[0] not in allowed_tags:
        return [tag_format.Other]
    else:
        return [tag_format[tag] for tag in tags]
        return [tag_format.format(tag) for tag in tags]

PortFolioItem = namedtuple("PortFolioItem","tags thumbnail portFolioMedia title description links")
for root, directories, files in os.walk("src/assets/portfolio"):
    if os.path.basename(root) == "portfolio": continue
    print("--"*15)
    title = os.path.basename(root)
    tags = get_tags(root) 

    print(f"title: {title}")
    print(f"tags:{tags}")
    print("----Object----")
    item = PortFolioItem(format_tag(tags),"portFolioMedia","media",title,"descr","links")
    item_dict = item._asdict()
    json_data = json.dumps(item_dict, cls=EnumEncoder)
    print(json_data)
    print("--"*15)
    print('\n')

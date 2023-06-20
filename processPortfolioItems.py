
from collections import namedtuple
from enum import Enum
from typing import Any, List
from bs4 import BeautifulSoup
import re
import json
from collections import namedtuple
import os

PortFolioItem = namedtuple("PortFolioItem","tags thumbnail portFolioMedia title description links")
YoutubeMedia = namedtuple("YoutubeMedia", "youtube_id description thumbnail")
ImageMedia = namedtuple("ImageMedia", "image_link image_description")
Link = namedtuple("Link", "link icon")

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
        if isinstance(obj,List[Link]):
            return {"link":obj.link, "icon":obj.icon}
        return super().default(obj)
    
def read_info(directory_root,filename):
    info = []
    path = os.path.join(directory_root,f"{filename}.txt")
    if not os.path.exists(path): 
        return None
    
    with open(path) as file:
        for line in file.readlines():
            info.append(line.replace("\n",""))
    file.close()
    return(info)

def get_tags(directory_root):
    return read_info(directory_root,"category")


def get_links(directory_root):
    return read_info(directory_root,"links")

def format_tag(tags: List[str]):
    allowed_tags = ["Coding", "Robotics", "Electronics", "Control"]
    tag_format = PortfolioTag
    if tags[0] not in allowed_tags:
        return [tag_format.Other]
    else:
        return [tag_format[tag] for tag in tags]
    
def is_youtube_link(link):
  regex_youtube = r'(https?://)?(www\.)?youtube\.(com|nl)/(watch\?v=|shorts/)?([\w-]+)'
  regex_youtube_short = r'(https?://)?(www\.)?youtu\.be/(s\d+)'

  match_youtube = re.match(regex_youtube, link)
  match_youtube_short = re.match(regex_youtube_short, link)

  return bool(match_youtube or match_youtube_short)

def extract_domain(link):
  regex = r'https?://(?:www\.)?([^./]+)'
  match = re.match(regex, link)

  if match:
    return match.group(1)
  else:
    return None

def format_link(link):
    link_type =  "youtube_icon" if is_youtube_link(link) else extract_domain(link)+"_icon"
    return Link(link, link_type)._asdict()
links_collections = []
for root, directories, files in os.walk("src/assets/portfolio"):
    if os.path.basename(root) == "portfolio": continue
    print("--"*15)
    title = os.path.basename(root)
    tags = get_tags(root) 
    links = get_links(root)
    print(f"title: {title}")
    print(f"tags:{tags}")
    print(f"links:{links}")
    formated_links = None
    if links: formated_links = [format_link(link) for link in links]
    if links is not None: links_collections.append(links)
    print("----Object----")
    
    item = PortFolioItem(format_tag(tags),"portFolioMedia","media",title,"descr", formated_links)
    item_dict = item._asdict()
    json_data = json.dumps(item_dict, cls=EnumEncoder)
    print(json_data)
    print("--"*15)
    print('\n')


for i in links_collections:
    for j in i:
        if (is_youtube_link(j)):
            print(j)
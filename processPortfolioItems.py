
from collections import namedtuple
from enum import Enum
from typing import Any, List
from bs4 import BeautifulSoup
import re
import json
from collections import namedtuple
import os

import requests

PortFolioItem = namedtuple("PortFolioItem","tags thumbnail portFolioMedia title description links")
YoutubeMedia = namedtuple("YoutubeMedia", "youtube_id description thumbnail")
ImageMedia = namedtuple("ImageMedia", "image_link image_description")
Link = namedtuple("Link", "link icon")

images_paths = []

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

def is_image_file(filename):
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
    _, ext = os.path.splitext(filename)
    return ext.lower() in image_extensions

def get_images(root, files, project_name):
    
    files = list(filter(lambda x: is_image_file(x), files))
    if len(files) ==0: return []
    image_descriptions = list(map(lambda fn: os.path.splitext(fn)[0], files))
    filenames = map(lambda fn: fn.replace(" ", "_").lower(),image_descriptions)
    filenames = list(map(lambda fn : fn+"_img" if fn != "thumb" else project_name+"_thumb", filenames))
    image_paths_ = list(map(lambda file: os.path.join(root,file).replace("src","..").replace("\\","/"), files))
    images_paths.extend((fn,ip) for fn,ip in zip(filenames,image_paths_))
    return [ImageMedia(fn,ds)._asdict() for fn,ds in zip(filenames,image_descriptions)]

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
  
def get_youtube_video_title(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    title_element = soup.select_one('meta[name="title"]')
    if title_element:
        return title_element['content']
    else:
        return None

def process_youtube_link(link):
    pattern_shorts = r"shorts/([-_\w]+)"
    pattern_watch = r"watch\?v=([-_\w]+)"
    thumbnail = ""
    if re.search(pattern_shorts,link):
        identifier = re.search(pattern_shorts, link).group(1)
        thumbnail = f"https://i.ytimg.com/vi/{identifier}/maxresdefault.jpg"
    else: 
        identifier = re.search(pattern_watch, link).group(1)
        thumbnail = f"https://img.youtube.com/vi/{identifier}/maxresdefault.jpg"
    return YoutubeMedia(link,get_youtube_video_title(link),thumbnail)._asdict()

def process_youtube_links(links):
    to_convert = filter(is_youtube_link,links)
    return list(map(process_youtube_link,to_convert))

def format_link(link):
    link_type =  "youtube_icon" if is_youtube_link(link) else extract_domain(link)+"_icon"
    return Link(link, link_type)._asdict()

def print_import(images):
    f = "import {} from \"{}\""
    for i in images:
        print(f.format(*i))

links_collections = []

for root, directories, files in os.walk("src/assets/portfolio"):
    if os.path.basename(root) == "portfolio": continue
    print("--"*15)
    title = os.path.basename(root)
    tags = get_tags(root) 
    links = get_links(root)
    
    images = get_images(root,files,title)

    media = []
    print(f"title: {title}")
    print(f"tags:{tags}")
    print(f"links:{links}")

    formated_links = None
    youtube_links = []

    if links: formated_links = [format_link(link) for link in links]
    if links is not None: youtube_links = process_youtube_links(links)

    media += youtube_links
    media += get_images(root,files,title) 
    print("----Object----")
    
    item = PortFolioItem(format_tag(tags), "thumbnail-value",media,title,"descr", formated_links)
    item_dict = item._asdict()
    json_data = json.dumps(item_dict, cls=EnumEncoder)
    print(json_data)
    print("--"*15)
    print('\n')
    break

print_import(images_paths)
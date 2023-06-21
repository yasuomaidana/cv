from collections import namedtuple
from bs4 import BeautifulSoup
import re
import json
from collections import namedtuple

file_path = './prof.html'  # Replace 'path/to/file.html' with the actual path to your HTML file

with open(file_path, 'r', encoding='utf-8') as file:
    html = file.read()
# print(html)
soup = BeautifulSoup(html, 'html.parser')

list_items = soup.find_all('li', class_='pvs-list__paged-list-item')
# print(soup.find_all('a'))
logos = set()
Course = namedtuple("Course","icon title date url")
courses = []
for item in list_items:
    
    image_link:str = item.find('img')["alt"]
    
    image_link = image_link.lower().replace(" logo","").replace(r'[^a-zA-Z]+',"_")
    logo = re.sub(r'[^a-zA-Z]+',"_",image_link)
    logos.add(logo)
     
    course_name = item.find('span', class_='visually-hidden').get_text(strip=True)
    raw_course_name = course_name
    issue_date = item.find('span', class_='t-14 t-normal t-black--light').get_text(strip=True)
    issue_date = " ".join(issue_date.split()[-2:])
    credential_link = soup.find('a', attrs={'aria-label': f'Show credential for {raw_course_name}'})["href"]
    courses.append(Course(logo, course_name, issue_date, credential_link))

print(len(logos), logos)
print(len(courses))

for course in courses:
    course_dict = course._asdict()
    # Serialize the dictionary to JSON format
    json_data = json.dumps(course_dict)
    # Print the JSON data
    print(json_data,",")

for logo in logos:
    print(f"const {logo} = fox;")

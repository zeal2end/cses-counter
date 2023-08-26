import re
f = open('input', 'r')

j = 0
for i,line in enumerate(f):
    line = line.strip()
    if line.startswith("<li"):
        line = line.lstrip('<li class="task"><a href="https://cses.fi/problemset/task')
        line = line.split('<')[0]
        line = line.split('">')
        id,problem = line
        j+= 1
        print(f'{{"problem":"{problem}","pid":{id}}},')
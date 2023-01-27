import json
import numpy as np
from PIL import Image
data = json.loads((open("data.json", "r")).read())
totalClicks = np.sum(data)
height = len(data)
width = len(data[0])
subsize = int(width/20)
heatmap  = Image.new(mode = "RGB", size = (width, height), color = (255, 255, 255))
img = heatmap.load()
for x in range(width):
    for y in range(height):
        temp = int(255*(data[y][x]/totalClicks))
        if(temp>0):
            for i in range(-subsize, subsize+1):
                if(x+i<0):
                    continue
                elif(x+i>=width):
                    break
                for j in range(-subsize, subsize+1):
                    if(y-j<0):
                        continue
                    elif(y+j>=height):
                        break
                    img[x+i,y+j]=(int(img[x+i,y+j][0]+temp*(subsize/(abs(i)+abs(j)+1))), 
                    int(img[x+i,y+j][1]-temp*(subsize/(abs(i)+abs(j)+1))), 
                    int(img[x+i,y+j][2]-temp*(subsize/(abs(i)+abs(j)+1))))
heatmap.show()
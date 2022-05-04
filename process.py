import sys 
import json

import bt
import matplotlib.pyplot as plt
result = {
    'Jan': sys.argv[1],
    'Feb': sys.argv[2],
    'Mar': sys.argv[3],
    'Apr': sys.argv[4]
  }

json = json.dumps(result)

print(str(json))
sys.stdout.flush()

# http://localhost:3000/call/python?name=Archer&from=Taipei
# http://localhost:3000/call/python?Jan=12&Feb=60&Mar=32&Apr=10
# http://localhost:3000/chart?Jan=12&Feb=60&Mar=32&Apr=10


import random
import requests


def random_combination():
  numbers = [str(i) for i in range(10)]
  letters = [chr(i) for i in range(ord('a'), ord('z') + 1)]

  combination = ""
  for i in range(4):
    combination += random.choice(numbers)
  for i in range(8):
    combination += random.choice(letters)
  for i in range(4):
    combination += random.choice(numbers)
  return combination


characters = [
  'Theodore Twombly', 'Samantha', 'Amy', 'Catherine', 'Paul', 'Charles',
  'Isabella', 'Alan Watts', 'Paula', 'Ava'
]
actors = [
  'Joaquin Phoenix', 'Scarlett Johansson', 'Amy Adams', 'Rooney Mara',
  'Chris Pratt', 'Matt Letscher', 'Portia Doubleday', 'Brian Cox',
  'Laura Kai Chen', 'Luka Jones'
]
themes = [
  'Artificial intelligence', 'Loneliness', 'Human connection', 'Technology',
  'Love', 'Intimacy', 'Emotional connection', 'Existentialism',
  'Virtual relationships', 'Communication'
]
places = [
  'Los Angeles', 'Theodore\'s apartment', 'Office buildings', 'Beach',
  'Nightclub', 'Mall', 'Rooftop', 'Subway', 'Library', 'Park'
]


def post_json(url, data):
  response = requests.post(url, json=data)
  return response


# API endpoint
url = "https://kwpqrqfgiqpkhqj.form.io/control4her/submission/"

for i in range(100000):
  # JSON data
  json_data = {
    "data": {
      "material": random_combination(),
      "character": random.choice(characters),
      "place": random.choice(places),
      "theme": random.choice(themes),
      "actor": random.choice(actors)
    }
  }

  # POST request
  response = post_json(url, json_data)
  if (i % 10) == 0:
    print(i)

# Check the response status code
if response.status_code == 201:
  print("Post successful!")
else:
  print("Post failed!")

print('Hello this is simple Backend example using python :)')

while True:
  try:
    num1 =int(input('please insert the first number: '))
    break
  except ValueError:
    print("Error: Please enter a valid number!")

while True:
  try:
    num2 =int(input('please insert the second number: '))
    break
  except ValueError:
    print("Error: Please enter a valid number!")

operations = ['add', 'subtract', 'multiply', 'divide']
while True:
  op =input('Please choose one operation from this list [add, subtract, multiply, divide]: ').strip().lower()
  if op in operations:
    break
  else:
    print("Error: Invalid operation! Please choose from [add, subtract, multiply, divide].")

if op == "add":
  result = num1 + num2
elif op == "subtract":
  result = num1 - num2
elif op == "multiply":
  result = num1 * num2
elif op == "divide":
  if num2 ==0:
    result = "Error: Division by zero"
  else:
    result = num1 / num2


print("Result : ", result)


def counter():
    for i in range(100, 0, -1):
        current_number = 'Testing' if i % 5 == 0 and i % 3 == 0 else \
                         'Agile' if i % 5 == 0 else \
                         'Software' if i % 3 == 0 else i
        print(current_number)

counter()
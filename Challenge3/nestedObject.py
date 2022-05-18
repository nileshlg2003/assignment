# initializing dictionary
test_dict = {"a":{"b":{"c":"d"}}}
 
# printing original dictionary
print("The original dictionary is : " + str(test_dict))


def get_vals(test_dict, key):
   for i, j in test_dict.items():
       if i == key:
            yield (i, j)
            yield from [] if not isinstance(j, dict) else get_vals(j, key)

# initializing keys list
key = input("Enter the key: ")

res = dict(get_vals(test_dict, key))
 
# printing result
print("The extracted values : " + str(res))
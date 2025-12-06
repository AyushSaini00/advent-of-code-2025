from part_1 import part_1
from part_2 import part_2

def read_input():
    try:
        with open("../input.txt", 'r') as f:
            return f.read().split("\n")
    except Exception as e:
        print(f"Error occurred: {e}")       

if __name__ == "__main__":
    lines = read_input()

    print("Part 1: ", part_1(lines))
    print("Part 2: ", part_2(lines))  
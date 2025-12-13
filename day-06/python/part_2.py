def part_2(lines):
    grid = []
    for line in lines:
        grid.append(list(line))

    columns = len(grid[0])
    str = ""
    for col_idx in range(columns - 1, -1, -1):
        for row in grid:
            str += row[col_idx]


    curr_num = ""
    curr_nums = []
    curr_operator = None
    groups = []
    for ch in str:
        if ch.isdigit():
            curr_num += ch
        else:
            if curr_num:
                curr_nums.append(int(curr_num))
                curr_num = ""
            if ch in ["+", "*"]:
                curr_operator = ch
                groups.append((curr_operator, curr_nums))
                curr_nums = []

    grand_total = 0
    for operator, nums in groups:
         if operator == "+":
            val = 0
            for n in nums:
                val += n
         elif operator == "*":
            val = 1
            for n in nums:
                val *= n

         grand_total += val                              
            
    return grand_total
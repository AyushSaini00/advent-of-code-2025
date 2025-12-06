def part_1(lines):
    grid = []
    for line in lines:
        grid.append(list(filter(None, line.strip().split(" "))))

    grand_total = 0
    operators = grid.pop()

    max_cols = max(len(row) for row in grid)
    for col_idx in range(max_cols):
        operation = operators[col_idx]

        col_result = 1
        if operation == "*":
            col_result = 1
        elif operation == "+":
            col_result = 0  

        for row in grid:
            if operation == "*":
                col_result = col_result * int(row[col_idx])
            elif operation == "+":
                col_result = col_result + int(row[col_idx])

        grand_total += col_result

    return grand_total
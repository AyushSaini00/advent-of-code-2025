package main

func solvePart2(grid [][]string) int {
	count := 0

	for {
		removals := make([][2]int, 0)

		for r := 0; r < len(grid); r++ {
			for c := 0; c < len(grid[r]); c++ {
				if grid[r][c] != "@" {
					continue
				}

				adjacentItems := 0
				for _, pos := range adjacentItemPositions {
					if checkItem(grid, r+pos[0], c+pos[1]) {
						adjacentItems += 1
					}
				}
				if adjacentItems < 4 {
					removals = append(removals, [2]int{r, c})
				}
			}
		}

		if len(removals) == 0 {
			break
		}
		count += len(removals)
		for _, p := range removals {
			grid[p[0]][p[1]] = "."
		}
	}

	return count
}

package main

func solvePart1(grid [][]string) int {
	count := 0

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
				count += 1
			}
		}
	}
	return count
}

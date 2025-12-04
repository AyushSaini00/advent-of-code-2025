package main

var adjacentItemPositions = [8][2]int{
	{-1, -1},
	{-1, 0},
	{-1, 1},
	{0, -1},
	{0, 1},
	{1, -1},
	{1, 0},
	{1, 1},
}

func checkItem(grid [][]string, r int, c int) bool {
	rowInbounds := 0 <= r && r < len(grid)
	colInbounds := 0 <= c && c < len(grid[0])

	if !rowInbounds || !colInbounds {
		return false
	}
	return grid[r][c] == "@"
}

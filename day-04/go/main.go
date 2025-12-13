package main

import (
	"fmt"
	"os"
	"strings"
)

func readInput() [][]string {
	data, err := os.ReadFile("../input.txt")
	if err != nil {
		panic(err)
	}

	lines := strings.Split(strings.TrimSpace(string(data)), "\n")

	grid := [][]string{}

	for _, line := range lines {
		grid = append(grid, strings.Split(line, ""))
	}

	return grid
}

func main() {
	grid := readInput()

	fmt.Println("Part 1: ", solvePart1(grid))
	fmt.Println("Part 2: ", solvePart2(grid))
}

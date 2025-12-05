package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

type IngredientRange struct {
	Min int64
	Max int64
}

func readInput() ([]IngredientRange, []int64) {
	data, err := os.ReadFile("../input.txt")
	if err != nil {
		panic(err)
	}
	lines := strings.Split(string(data), "\n")

	ranges := []IngredientRange{}
	ids := []int64{}

	for _, lineInput := range lines {
		line := strings.TrimSpace(lineInput)
		if line == "" {
			continue
		}

		if strings.Contains(line, "-") {
			parts := strings.Split(line, "-")

			min, err1 := strconv.ParseInt(parts[0], 10, 64)
			max, err2 := strconv.ParseInt(parts[1], 10, 64)
			if err1 != nil && err2 != nil {
				fmt.Println("error parsing range", err1, err2)
				break
			}
			ranges = append(ranges, IngredientRange{Min: min, Max: max})
		} else {
			val, err := strconv.ParseInt(line, 10, 64)
			if err != nil {
				fmt.Println("error parsing value")
				break
			}

			ids = append(ids, val)

		}
	}

	return ranges, ids
}

func main() {
	ingredientRangeSlice, ingredientIdSlice := readInput()

	fmt.Println("Part 1: ", part1(ingredientRangeSlice, ingredientIdSlice))
	fmt.Println("Part 1: ", part2(ingredientRangeSlice))
}

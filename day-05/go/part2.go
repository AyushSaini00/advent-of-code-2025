package main

import (
	"sort"
)

func part2(ranges []IngredientRange) int64 {
	fresh := int64(0)

	sort.Slice(ranges, func(i, j int) bool {
		return ranges[i].Min < ranges[j].Min
	})

	currMin := ranges[0].Min
	currMax := ranges[0].Max

	for i := 1; i < len(ranges); i++ {
		min := ranges[i].Min
		max := ranges[i].Max

		// if this range and the previous range are disjoints
		if min > currMax+1 {
			fresh += currMax - currMin + 1
			currMin = min
			currMax = max
		} else {
			// for overlapping ranges
			if max > currMax {
				currMax = max
			}
		}
	}

	fresh += currMax - currMin + 1
	return fresh
}

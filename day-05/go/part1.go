package main

func part1(ranges []IngredientRange, ids []int64) int {
	fresh := 0
	frequencyOfId := make(map[int64]int)

	for _, id := range ids {
		for _, r := range ranges {
			_, ok := frequencyOfId[id]
			if !ok && r.Min <= id && r.Max >= id {
				fresh += 1
				frequencyOfId[id] = 1
			}
		}
	}

	return fresh
}

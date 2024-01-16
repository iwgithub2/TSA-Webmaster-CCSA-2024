export default function FuzzySearch(a : string, b : string) {
    //This code uses the Levenshtein Distance Formula to generate fuzzy search results
    const aLen = a.length;
    const bLen = b.length;

    const matrix: number[][] = [];

    for (let i = 0; i < aLen + 1; i++) {
        matrix[i] = [];
        for (let j = 0; j < bLen + 1; j++) {
            if (i === 0) {
                matrix[i][j] = j;
            } else if (j ===0) {
                matrix[i][j] = i;
            } else {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,      // Deletion
                    matrix[i][j - 1] + 1,      // Insertion
                    matrix[i - 1][j - 1] + cost) // Substitution
            }
        }
    }

    return matrix[aLen][bLen];
}
var cats1_20 = [
    "Addition, subtraction, multiplication, & division of Integers, Mixed Numbers, Fractions, and Decimals",
    "Order of Operations", "Use of the Distributive Property", "Comparison of Fractions and Decimals",
    "Multiplication Shortcuts", "Squaring Numbers", "Conversion Problems", "GCD & LCM", "Percent Problems",
    "Mean, Median, and Mode", "Sums of Integers", "Remainder Problems", "Consumer Type Problems",
    "Number Theory Problems - Prime Numbers, Divisors, Sum of Divisors, etc."
]

var cats21_40 = [
    "Powers of Numbers", "Substitution", "Word Problems", "Inverses", "Absolute Value",
    "Ratio/Proportion", "Square Roots/Cube Roots", "Sets", "Base System Conversion Problems", 
    "Solving Simple Equations", "Systems of Equations", "Repeating Decimals to Fractions", 
    "More Remainder Type Problems", "Perimeter and Area of Polygons and Circles", 
    "Sequences", "Quadratic and Cubic Equation Problems"
]

var cats41_60 = [
    "Laws of Exponents", "Right Triangle Problems", "Coordinate Geometry Problems",
    "Regular Polygon Problems", "Inequalities", "Applications of Theorems from Geometry",
    "Direct and Inverse Variation", "Sequences and Series (finite and infinite)", "Complex Numbers",
    "Logarithms and Logarithmic Equations", "Factorials, Permutations, and Combinations", 
    "Probability/Odds", "Conics", "Binomial Theorem (expansion)", "Base System Problems using Operations",
    "Roots of Equations", "Polygonal Numbers"
]

var cats61_70 = [
    "Volume and Surface Area", "Greatest Integer", "Application of Remainder Theorem",
    "Trigonometry", "Determinants", "Matrices", "Vectors", "Composite Functions",
    "Bases Involving Decimals or Fractions", "Polar/Rectangular Coordinates"
]

var cats71_80 = [
    "Function Domain and Ranges", "Modular Arithmetic", "Limits", "Derivatives",
    "Slopes of Tangent Lines", "Horizontal and Vertical Asymptotes", 
    "Determining Critical Values", "Maximum and Minimum Problems", "Definite Integration",
    "Inverse Functions"
]
// there are five main categories: 1-20, 21-40, 41-60, 61-70, and 71-80.
// each category has subcategories that are types of problems that could come up
// in it. But also, problems from previous categories could come up in later ones.
// I would like to make the database reflect this structure. 

var categories = {
    "1-20": cats1_20,
    "21-40": cats21_40,
    "41-60": cats41_60,
    "61-70": cats61_70,
    "71-80": cats71_80
}

var categories_list = [...cats1_20, ...cats21_40, ...cats41_60, ...cats61_70, ...cats71_80]
export default categories;
export {categories_list};
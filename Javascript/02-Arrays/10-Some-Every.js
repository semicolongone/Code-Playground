// ============================================================
//  10 - some() and every()
// ============================================================
//  Both test items in the array against a condition.
//  Both return true or false.
//
//  every() → true only if ALL items pass
//  some()  → true if AT LEAST ONE item passes
// ============================================================
 
// ============================================================
//  every()
// ============================================================
 
// Purpose:
//   Returns true only if EVERY item in the array passes the test.
//   If even one item fails, it immediately returns false.
 
// Syntax:
//   array.every((item, index, array) => condition)
 
// Parameters:
//   item  → current value
//   index → current position (optional)
 
// Returns:
//   true  → all items pass
//   false → at least one item fails
 
// Mutates original array? NO
// Code your solution here
function findMatching(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.toLowerCase() === stringInput.toLowerCase()
  })
}
function function fuzzyMatch(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.substring(0, stringInput.length - 1) === stringInput.toLowerCase()
  })
}

// Code your solution here
function findMatching(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.toLowerCase() === stringInput.toLowerCase()
  })
}
function fuzzyMatch(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.substring(0, stringInput.length - 1)toLowerCase() === stringInput.toLowerCase()
  })
}

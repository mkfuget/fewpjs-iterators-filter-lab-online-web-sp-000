// Code your solution here
function findMatching(drivers, stringInput)
{
  return drivers.filter(n => {
    return n.toLowerCase() === stringInput.toLowerCase()
  })
}

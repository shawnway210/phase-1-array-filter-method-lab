 function findMatching(drivers, inputName){
    const result = drivers.filter((driver) => driver.toLowerCase() === inputName.toLowerCase())
   console.log('Input Name:', inputName)
   console.log('Filtered Drivers:', result)
   return result
}   
   findMatching("Bobby")
   findMatching("Sammy")
   const drivers = [ 
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
    {
        name: 'Sammy',
        hometown: 'New York'},
    {
        name: 'Sally',
        hometown: 'Cleveland'},
    {
        name: 'Annette',
        hometown: 'Los Angeles'},
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'}
  ]
function fuzzyMatch(drivers, inputName){ 
    const result = drivers.filter((driver)=> driver.toLowerCase().startsWith(inputName.toLowerCase()))
    return result 
}
  fuzzyMatch( drivers, "S")
  

  function matchName(drivers, homeTown){
    const result = drivers.filter((driver) => driver.name === homeTown)
    return result
}
  matchName(drivers, "Bobby")
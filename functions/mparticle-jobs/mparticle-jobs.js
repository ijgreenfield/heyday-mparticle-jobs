exports.handler = async function(event, context) {
  const person = JSON.parse(event.person)
  
  console.log(person)
}
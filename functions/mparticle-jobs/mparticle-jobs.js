exports.handler = async function(event, context) {
  const body = JSON.parse(event.body)
  
  console.log(body)
}
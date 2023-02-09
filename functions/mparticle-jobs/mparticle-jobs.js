exports.handler = async function(event, context) {
  const body = JSON.parse(event)
  
  console.log(body)
}
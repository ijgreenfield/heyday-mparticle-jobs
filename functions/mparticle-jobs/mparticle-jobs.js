exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  try {
    console.log(body.person.name)
  } catch(error) {
    console.log(error)
  }
}
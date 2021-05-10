// defines a lambda function
exports.handler = async function(event) {

  // an Array of to-dos
  let todos = [`buy milk`,`walk the dog`]
  // write the Array of to-dos to the *back-end* console
  console.log(todos)
  // turn the Array into a String
  let dataAsString = json.stringify(todos)
  // write the "stringified" Array to the *back-end* console
  console.log(dataAsString)
  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    body: dataAsString // `Hello from the back-end!` // a string of data
  }
}
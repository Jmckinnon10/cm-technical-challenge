// write your lambda here


module.exports.reverser = async (event) => {
  const result = event.body.split('').reverse().join('')

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:"Thank you for using the reverser!",
        payload: result
      },
      null,
      2
    )
  }
}

module.exports.reverser("hello")

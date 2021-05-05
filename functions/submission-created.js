exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    console.log(body.payload.data);

    const {email, fullName} = body.payload.data;

    console.log(email, fullName);

    return {
        statusCode: 302,
        headers: {
          Location: 'success.html',
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({})
      }

};
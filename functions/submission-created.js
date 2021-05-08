const fetch = require("node-fetch");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const data = body.payload.data;
  console.log({data});
  const { email, fullName, frequency } = data;

  console.log({email, fullName, frequency});

  const response = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_API_SECRET}`,
    },
    body: JSON.stringify({
      query: `
        mutation($fullName: String!, $email: String!, $frequency: String!) {
            createEntry(data: { fullName: $fullName, email: $email, frequency: $frequency }) {
            _id
            fullName
            email
            frequency
          }
        }      
      `,
      variables: {
        fullName,
        frequency,
        email,
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log({response});

  return {
    statusCode: 302,
    headers: {
      Location: "success.html",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({}),
  };
};

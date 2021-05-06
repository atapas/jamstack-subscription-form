const fetch = require("node-fetch");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { email, fullName, interests } = body.payload.data;

  console.log(email, fullName, interests);

  const response = await fetch("https://graphql.fauna.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_API_SECRET}`,
    },
    body: JSON.stringify({
      query: `
        mutation($fullName: String!, $email: String!, $interests: [String!]!) {
            createEntry(data: { fullName: $fullName, email: $email, interests: $interests }) {
            _id
            fullName
            email
            interests
          }
        }      
      `,
      variables: {
        fullName,
        interests,
        email,
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log(response);

  return {
    statusCode: 302,
    headers: {
      Location: "success.html",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({}),
  };
};

// Define the port number for the development server
const port = 3000;
// Development configuration setting
const dev = {
  port,
  api_host: `http://localhost:${port}`,
  google_client_id: "583586195557-he3bnhr51lmj6leqh31p16itneghf4bp.apps.googleusercontent.com",
};
// Production configuration setting
const prod = {
  client_host: "https://runtogether.utccf.com",
  api_host: "https://runtogetherccf-8qe6.onrender.com",
  google_client_id: "583586195557-he3bnhr51lmj6leqh31p16itneghf4bp.apps.googleusercontent.com",
};

module.exports = prod;

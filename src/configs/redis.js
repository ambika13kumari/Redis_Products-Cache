const {createClient} = require("redis")

 const client = createClient();

  client.on("error", function(error) {
      console.error(error);
    });
    

module.exports = client
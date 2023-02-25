const schemes = require('../../models/InsuranceClaims');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cs3219:ineedapassword@cluster0.d5qufy7.mongodb.net/?retryWrites=true&w=majority";
    
// module.exports.insert = async(res, params) => {
//     const newClaim = new Claim({

//     })

//     try {
//         return res.success(201).json({message: "Claim created successfully"});
//     } catch (error) {
//         return res.status(400).json({
//             status: 400,
//             message: error
//         })
//     }
// }

module.exports.retrieveClaimsLimited = async(req, res) => {
    const { eId } = req.query;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
      const collection = client.db("cs3219").collection("user");
      // perform actions on the collection object
      console.log(collection)
      client.close();
    });

    return res.status(200).json({
        status: true,
        testString: "teststring",
        echoEId: eId
    })
}

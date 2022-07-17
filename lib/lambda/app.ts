const { DynamoDB } = require('aws-cdk');

const dynamo = new DynamoDB.DocumentClient();
const MY_TABLE = process.env.MY_TABLE;

const handler = async (event: any) => {
    console.log('start function', event);
    const item = { id: Date.now().toString() }

    const savedItem = await saveItem(item);

    // return respond(200, 'Testing Lambda Success!!')

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "testing",
            greeting: "HELLO CRUEL WORLD!",
            saved: savedItem
        })
    }

};

// const respond = async (status: any, body: any) => ({
//     statusCode: status,
//     headers: { "Content-Type": "text/html" },
//     body: body
// })

const saveItem = async (item: any) => {
    const params = { TableName: MY_TABLE, Item: item }
    console.log(params);

    return dynamo
        .put(params)
        .promise()
        .then(() => item)
}


module.exports = { handler };
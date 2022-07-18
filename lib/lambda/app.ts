import { DynamoDB } from 'aws-sdk';

const dynamo = new DynamoDB.DocumentClient();
const MY_TABLE = process.env.MY_TABLE;

// Sample respond for testing
// const respond = async (status: any, body: any) => ({
//     statusCode: status,
//     headers: { "Content-Type": "text/html" },
//     body: body
// })

exports.handler = async function (event: any) {
    console.log('start function', event);
    // return respond(200, 'Testing Lambda Success!!')

    const item = { id: Date.now().toString() }

    const savedItem = await saveItem(item);


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

const saveItem = async (item:Object) => {
    const table = MY_TABLE?.toString() || 'test-table';
    const params = {
        TableName: table,
        Item: {
            'id': Date.now().toString(),
            'username': 'John Doe'
        }
      };

    return dynamo
        .put(params)
        .promise()
        .then(() => item)
}
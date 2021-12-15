Feature('account');

Scenario('All Transactions', async ({ I }) => {
    var response = await I.sendGetRequest('https://6151ff8e4a5f22001701d590.mockapi.io/transactions/');
    var transaction = response.data
    console.log(transaction)
});
Scenario('Transactions by ID', async({ I }) => {
    var response = await I.sendGetRequest('https://6151ff8e4a5f22001701d590.mockapi.io/transactions/150');
    var transaction = response.data
    console.log(transaction)
});
Scenario('Post a transaction', async ({ I }) => {
    userData = {
        "createdAt": "2021-12-14T07:00:34.736Z",
        "description": "invoice transaction at Japan - Hegmann using card ending with ***0221 for NAD 1200.00 in account ***04689975",
        "amount": "1200",
        "type": "type 10"
    }
   var response = await I.sendPostRequest('https://6151ff8e4a5f22001701d590.mockapi.io/transactions', userData )
   var users = response.data;
   console.log(users)
});
Scenario('Update a transaction', async ({ I }) => {
    userData = {
        "createdAt": "2021-12-14T07:00:34.736Z",
        "description": "invoice transaction at China - Hegmann using card ending with ***0221 for NAD 1200.00 in account ***04689975",
        "amount": "600",
        "type": "type 5"
    }
   var response = await I.sendPutRequest('https://6151ff8e4a5f22001701d590.mockapi.io/transactions/60', userData )
   var users = response.data;
   console.log(users)
});
Scenario('Delete a transaction', async ({ I }) => {
        
       var response = await I.sendDeleteRequest('https://6151ff8e4a5f22001701d590.mockapi.io/transactions/61')
       var users = response.data;
       console.log(users)
    });
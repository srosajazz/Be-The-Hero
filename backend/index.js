const express = require('express');

const app = express();
//important add this for json work
app.use(express.json());
/**
 * Route / Recurse
 */

/**
 * Method HTTP
 *  GET: Search/list for information on back-end
    POST: create information on back-end
    PUT: Alter information on back-end
    DELETE
 */

/**
 * Parametros
 * Query Params: Parameters nomeados sent to th route after "?"(filter, pagination)
 * Route Params: Parameters use idetification  recursos
 * Request Body: Requisition Body, used for crud
 */

/**
 * SQL: MSQL,SQLITE, PostgresSQL, Oracle,Microsoft SQL Server
 * NoSQL: MongpDB, CouchDb, etc..
 */
app.post('/users', (req, resp) => {
    // const params = req.params;
    const body = req.body;
    console.log(body);
    return resp.json({
        event: 'Nodejs Practice',
        student: 'Sergio Rosa',
        instrument: 'Bass'
    });
});

app.listen(3334);
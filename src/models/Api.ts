import * as mongoose from 'mongoose';
export const Schema = mongoose.Schema;

export const ApiSchema = new Schema({
    apiId: {
        type: String,
        required: true
    },
    projectId: {
        type: String,
        required: true
    },
    apiUrl: {
        type: String,
        required: true
    },
    baseUrl: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    requestHeaders: {
        type: Object,
        required: false
    },
    requestBody: {
        type: Object,
        required: false
    },
    responseType: {
        type: String,
        required: false
    },
    responseHeaders: {
        type: Object,
        required: false
    },
    responseBody: {
        type: Object,
        required: true
    }
})

const conn = mongoose.createConnection('mongodb://localhost/potato');

export default conn.model('Api', ApiSchema);
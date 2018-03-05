import * as mongoose from 'mongoose';
export const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
    projectId: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    baseUrl: {
        type: String,
        required: true
    }
})
    .pre('save', function (next) {
        next();
    });

const conn = mongoose.createConnection('mongodb://localhost/potato');

export default conn.model('Project', ProjectSchema);
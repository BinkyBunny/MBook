// Defining the Hospital Schema

const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({

    hospital: {

        hospname: String,
        dept: [{
                
                deptname: String,
                doctor: [{
                    
                    docname: String,
                    doctime: String,
                    doctokens: Number,
                    docdate: [{

                        date: Date,
                        token: Number

                    }]

                }]

        }]
                
    }

});

module.exports = mongoose.model('Hosp', hospitalSchema);
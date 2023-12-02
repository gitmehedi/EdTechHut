var mongoose = require('mongoose');
var herosSchema = require('./heros.model');

herosSchema.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: async function(query, res) {
        const tours = await this.find();
        res.status(200).json({
            status: 'sucess',
            results: tours.length,
            data: {
                tours,
            },
        });
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var herosModel = mongoose.model('Heros', herosSchema);
module.exports = herosModel;

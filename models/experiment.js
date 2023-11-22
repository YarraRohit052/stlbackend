const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experimentSchema = new Schema(
    {
        kotipallivoltage1:{ type: Schema.Types.Mixed, required: true },
        kotipallivoltage2:{ type: Schema.Types.Mixed, required: true },
        kotipallivoltage3:{ type: Schema.Types.Mixed, required: true },
        narayanapuramvoltage1:{ type: Schema.Types.Mixed, required: true },
        narayanapuramvoltage2:{ type: Schema.Types.Mixed, required: true },
        narayanapuramvoltage3:{ type: Schema.Types.Mixed, required: true },
        godavarivoltage1:{ type: Schema.Types.Mixed, required: true },
        godavarivoltage2:{ type: Schema.Types.Mixed, required: true },
        godavarivoltage3:{ type: Schema.Types.Mixed, required: true },
        residentialvoltage1:{ type: Schema.Types.Mixed, required: true },
        residentialvoltage2:{ type: Schema.Types.Mixed, required: true },
        residentialvoltage3:{ type: Schema.Types.Mixed, required: true },
        dommetivariveedhivoltage1:{ type: Schema.Types.Mixed, required: true },
        dommetivariveedhivoltage2:{ type: Schema.Types.Mixed, required: true },
        dommetivariveedhivoltage3:{ type: Schema.Types.Mixed, required: true },
        busdepoamalapuramvoltage1:{ type: Schema.Types.Mixed, required: true },
        busdepoamalapuramvoltage2:{ type: Schema.Types.Mixed, required: true },
        busdepoamalapuramvoltage3:{ type: Schema.Types.Mixed, required: true },
        marketroadvoltage1:{ type: Schema.Types.Mixed, required: true },
        marketroadvoltage2:{ type: Schema.Types.Mixed, required: true },
        marketroadvoltage3:{ type: Schema.Types.Mixed, required: true },
        busdeporajolevoltage1:{ type: Schema.Types.Mixed, required: true },
        busdeporajolevoltage2:{ type: Schema.Types.Mixed, required: true },
        busdeporajolevoltage3:{ type: Schema.Types.Mixed, required: true },
        templeroadvoltage1:{ type: Schema.Types.Mixed, required: true },
        templeroadvoltage2:{ type: Schema.Types.Mixed, required: true },
        templeroadvoltage3:{ type: Schema.Types.Mixed, required: true },
        beachroadvoltage1:{ type: Schema.Types.Mixed, required: true },
        beachroadvoltage2:{ type: Schema.Types.Mixed, required: true },
        beachroadvoltage3:{ type: Schema.Types.Mixed, required: true },
        lighthouseroadvoltage1:{ type: Schema.Types.Mixed, required: true },
        lighthouseroadvoltage2:{ type: Schema.Types.Mixed, required: true },
        lighthouseroadvoltage3:{ type: Schema.Types.Mixed, required: true },
    },
    { timestamps: true }
);
module.exports = mongoose.model("experimentSchema", experimentSchema);
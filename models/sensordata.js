const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensordataSchema = new Schema(
    { kotipallivoltage1: { type: Schema.Types.Mixed, required: true },
    kotipallivoltage2: { type: Schema.Types.Mixed, required: true },
    kotipallivoltage3: { type: Schema.Types.Mixed, required: true },
    kotipallicurrent: { type: Schema.Types.Mixed, required: true },
    kotipallipower: { type: Schema.Types.Mixed, required: true },
    kotipalliactivepower: { type: Schema.Types.Mixed, required: true },
    kotipallireactivepower: { type: Schema.Types.Mixed, required: true },
    kotipallipowerfactor: { type: Schema.Types.Mixed, required: true },
    kotipallifrequency: { type: Schema.Types.Mixed, required: true },
    latitudekotipalli1: { type: Schema.Types.Mixed, required: true },
    latitudekotipalli2: { type: Schema.Types.Mixed, required: true },
    latitudekotipalli3: { type: Schema.Types.Mixed, required: true },
    longitudekotipalli1: { type: Schema.Types.Mixed, required: true },
    longitudekotipalli2: { type: Schema.Types.Mixed, required: true },
    longitudekotipalli3: { type: Schema.Types.Mixed, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("sensordata", sensordataSchema);
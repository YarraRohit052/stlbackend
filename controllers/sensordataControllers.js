const sensorData = require("../models/sensordata");
const experimentData = require("../models/experiment");
const hello = (req, res, next) => {
    console.log(req);
    res.status(200).json({
        message: "Hello from Server!!"
    });
}

const posttest = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
        message: "Post Request Received Successfully"
    })
}
const allsenosrdataHandler = async (req, res, next) => {
    let expdata;
    try {
        expdata = await experimentData.find();
        //console.log(sensordata);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Updating Data Failed!",
        });
    }
    console.log(expdata);
}
const sensordataHandler = async (req, res, next) => {
    const { kotipallivoltage1, kotipallivoltage2, kotipallivoltage3, kotipallicurrent, kotipallipower, kotipalliactivepower, kotipallireactivepower,
        kotipallipowerfactor, kotipallifrequency, latitudekotipalli1,
        latitudekotipalli2, latitudekotipalli3, longitudekotipalli1, longitudekotipalli2, longitudekotipalli3,  } = req.body;
    let exists = false, sensordata;
    try {
        sensordata = await sensorData.find();
        if (sensordata.length == 1) {
            exists = true;
        }
        //console.log(sensordata);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Updating Data Failed!",
        });
    }
    if (exists) {
        const result = await sensorData.findOneAndUpdate(
            { _id: sensordata[0]._id },
            {
                kotipallivoltage1: kotipallivoltage1,
                kotipallivoltage2: kotipallivoltage2,
                kotipallivoltage3: kotipallivoltage3,
                kotipallicurrent: kotipallicurrent,
                kotipallipower: kotipallipower,
                kotipalliactivepower: kotipalliactivepower,
                kotipallireactivepower: kotipallireactivepower,
                kotipallipowerfactor: kotipallipowerfactor,
                kotipallifrequency: kotipallifrequency,
                latitudekotipalli1: latitudekotipalli1,
                latitudekotipalli2: latitudekotipalli2,
                latitudekotipalli3: latitudekotipalli3,
                longitudekotipalli1: longitudekotipalli1,
                longitudekotipalli2: longitudekotipalli2,
                longitudekotipalli3: longitudekotipalli3
            }
        );
        try {
            const newexpdata = new experimentData({
                kotipallivoltage1: kotipallivoltage1,
                kotipallivoltage2: kotipallivoltage2,
                kotipallivoltage3: kotipallivoltage3,
                kotipallicurrent: kotipallicurrent,
                kotipallipower: kotipallipower,
                kotipalliactivepower: kotipalliactivepower,
                kotipallireactivepower: kotipallireactivepower,
                kotipallipowerfactor: kotipallipowerfactor,
                kotipallifrequency: kotipallifrequency,
                latitudekotipalli1: latitudekotipalli1,
                latitudekotipalli2: latitudekotipalli2,
                latitudekotipalli3: latitudekotipalli3,
                longitudekotipalli1: longitudekotipalli1,
                longitudekotipalli2: longitudekotipalli2,
                longitudekotipalli3: longitudekotipalli3
            });
            await newexpdata.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Updating Data Failed!",
            });
        }
    }
    else {
        try {
            const newSensorData = new sensorData({
                kotipallivoltage1: kotipallivoltage1,
                kotipallivoltage2: kotipallivoltage2,
                kotipallivoltage3: kotipallivoltage3,
                kotipallicurrent: kotipallicurrent,
                kotipallipower: kotipallipower,
                kotipalliactivepower: kotipalliactivepower,
                kotipallireactivepower: kotipallireactivepower,
                kotipallipowerfactor: kotipallipowerfactor,
                kotipallifrequency: kotipallifrequency,
                latitudekotipalli1: latitudekotipalli1,
                latitudekotipalli2: latitudekotipalli2,
                latitudekotipalli3: latitudekotipalli3,
                longitudekotipalli1: longitudekotipalli1,
                longitudekotipalli2: longitudekotipalli2,
                longitudekotipalli3: longitudekotipalli3
            });
            await newSensorData.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Updating Data Failed!",
            });
        }
        try {
            const newexpdata = new experimentData({
                kotipallivoltage1: kotipallivoltage1,
                kotipallivoltage2: kotipallivoltage2,
                kotipallivoltage3: kotipallivoltage3,
                kotipallicurrent: kotipallicurrent,
                kotipallipower: kotipallipower,
                kotipalliactivepower: kotipalliactivepower,
                kotipallireactivepower: kotipallireactivepower,
                kotipallipowerfactor: kotipallipowerfactor,
                kotipallifrequency: kotipallifrequency,
                latitudekotipalli1: latitudekotipalli1,
                latitudekotipalli2: latitudekotipalli2,
                latitudekotipalli3: latitudekotipalli3,
                longitudekotipalli1: longitudekotipalli1,
                longitudekotipalli2: longitudekotipalli2,
                longitudekotipalli3: longitudekotipalli3
            });
            await newexpdata.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Updating Data Failed!",
            });
        }
    }
    res.status(200).json({
        message: "Data Updated Successfully!!",
    });
}

const addHours = (numofHours, date = new Date().now()) => {
    date.setTime(date.getTime() + numofHours * 60 * 60 * 1000)
    return date;
}

const getdataHandler = async (req, res, next) => {
    let sensordata, updatedAtnew;
    try {
        sensordata = await sensorData.find();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Updating Data Failed!",
        });
    }
    if (sensordata.length == 1) {
        const { kotipallivoltage1, kotipallivoltage2, kotipallivoltage3, kotipallicurrent, kotipallipower, kotipalliactivepower, kotipallireactivepower,
            kotipallipowerfactor, kotipallifrequency,latitudekotipalli1,
            latitudekotipalli2, latitudekotipalli3, longitudekotipalli1, longitudekotipalli2, longitudekotipalli3,updatedAt } = sensordata[0];
        const updatedAtold = new Date(updatedAt);
        updatedAtnew = addHours(5.52, updatedAtold);
        res.status(200).json({
            kotipallivoltage1: kotipallivoltage1,
                kotipallivoltage2: kotipallivoltage2,
                kotipallivoltage3: kotipallivoltage3,
                kotipallicurrent: kotipallicurrent,
                kotipallipower: kotipallipower,
                kotipalliactivepower: kotipalliactivepower,
                kotipallireactivepower: kotipallireactivepower,
                kotipallipowerfactor: kotipallipowerfactor,
                kotipallifrequency: kotipallifrequency,
                latitudekotipalli1: latitudekotipalli1,
                latitudekotipalli2: latitudekotipalli2,
                latitudekotipalli3: latitudekotipalli3,
                longitudekotipalli1: longitudekotipalli1,
                longitudekotipalli2: longitudekotipalli2,
                longitudekotipalli3: longitudekotipalli3,
            timestamp: updatedAtnew,
        });
    } else {
        res.status(400).json({ message: "no data found" });
    }
}
exports.hello = hello;
exports.posttest = posttest;
exports.sensordataHandler = sensordataHandler;
exports.getdataHandler = getdataHandler;
exports.allsenosrdataHandler = allsenosrdataHandler;
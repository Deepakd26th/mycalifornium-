function currentDate(){
    let day = (new Date().getDate)
    console.log("my date",day)
}

    const BatchInfo = function getBatchInfo(name,week,day,topic){
         console.log(`Batch Name ${name},Week Name ${week},Day Name ${day},Topic Name ${topic}`)
    }

module.exports.currentDate = currentDate
module.exports.BatchInfo1 =BatchInfo
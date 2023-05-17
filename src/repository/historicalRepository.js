import dataset from '../dataset/historical_data.json'

exports.getHistoricalDataFromDataset = () => {
    return dataset
}

exports.getHistoricalDataFromEra = (era) => {
    let dataset_filter = []
    if (era == 'ac') {
        // Queremos guardar data cuya la fecha empeza con un "-"
        dataset_filter = dataset.result.events.filter((data) => data.date[0] === "-")
    }
    else if (era == 'dc') {
        // Queremos guardar data cuya la fecha no empeza con un "-"
        dataset_filter = dataset.result.events.filter((data) => data.date[0] !== "-")
    }
    else {
        return -1
    }
    return dataset_filter
}

exports.getHistoricalDataFromDescription = (input) => {
    const dataset_filter = dataset.result.events.filter((data) => data.description.includes(input))
    return dataset_filter
}

exports.getDataInOrderWithLimit = (order, limit) => {
    let results = []
    let data = dataset.result.events
    if (order === "asc") {
        data = data.reverse()
    }
    for (let i = 0 ; i < limit ; i++) {
        results.push(data[i])
    }
    return results
}

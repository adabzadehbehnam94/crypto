const priceColor = (price) => {

    if (price < 0) {
        return "#f52c39"
    }
    if (price > 0) {
        return "#38a650"
    } else {
        return "black"
    }
}

const fearAndGreed = (value) => {

    if (value === "Fear") {
        return "text-[#f52c39]"
    }
    if (value === "Greed") {
        return "text-[#38a650]"
    } else {
        return "text-white"
    }
}

const summaryPrice=(number)=>{
    if(number >= 1_000_000_000_000){
        return `$${(number / 1_000_000_000_000).toFixed(2)} T`
    }

    if(number >= 1_000_000_000){
        return `$${(number / 1_000_000_000).toFixed(2)} B`
    }

    if(number >= 1_000_000){
        return `$${(number / 1_000_000).toFixed(2)} M`
    }

    if(number >= 1_000){
        return `$${(number / 1_000).toFixed(2)} K`
    }

    return `$${number}`
}


export { priceColor , fearAndGreed ,summaryPrice }
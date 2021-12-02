const padX = (number, length) => {
    return parseInt(number).toString(16).padStart("0", length).slice(0, length)
}

const mid = padX(Math.random() * 16777215, 6)
const pid = padX(process.pid, 4)

export const mongoid = () => {
    const now = padX(Date.now() / 1000, 8)
    const sid = padX(Math.random() * 16777215, 6)
    return `${now}${mid}${pid}${sid}`
}

export default mongoid

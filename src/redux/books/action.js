import { ADD, DELETEBOOK } from "./actionType"

export const added = (destination, destinationTo, date, guest, classes) => {
    return {
        type: ADD,
        destination,
        destinationTo,
        date,
        guest,
        classes
    }
}
export const deleted = (id) => {
    return {
        type: DELETEBOOK,
        id: id,
    }
}
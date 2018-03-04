export function addCardData(data) {
    return {
        type: 'ADD_CARD_DATA',
        payLoad: data
    };
}

export function deleteCardData(id) {
    return {
        type: "DELETE_CARD_DATA",
        payLoad: id
    }
}

export function editCardData(id) {
    return {
        type: "EDIT_CARD_DATA",
        payLoad: id
    }
}

export function updateCardData(data) {
    return {
        type: "UPDATE_CARD_DATA",
        payLoad: data
    }
}

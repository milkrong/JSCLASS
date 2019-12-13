export const addTag = (name) => ({
    type: 'ADD_TAG',
    payload: {
        id: new Date().valueOf(),
        name: name
    }
});

export const deleteTag = id => ({
    type: 'DELETE_TAG',
    tagToDeleteID: id
})
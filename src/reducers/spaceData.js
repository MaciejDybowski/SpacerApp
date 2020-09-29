const initState = [];

export const spaceData = (state = initState, action) => {
    switch (action.type) {
        case 'setData':
            state = action.data;
            return state;
        default:
            return state;
    }
}
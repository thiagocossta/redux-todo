const TEMPLATE_NAME = 'TODO';

export default function todos (state = [], action) {
    switch (action.type){
        case `${TEMPLATE_NAME}_ADD`:
            return [...state, {id: Math.random(), text: action.payload,}]
        case `${TEMPLATE_NAME}_REMOVE`:
            return [...state.filter(i => i.id !== action.payload),]
        default:
            return state;
    }
}
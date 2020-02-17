export const NEXT_PAGE = 'NEXT_PAGE'
export const COUNTING_TO_NEXT_PAGE = 'COUNTING_TO_NEXT_PAGE'

export const pageChangeHandler = (props, page) => {
    props.history.push(page);
    return { type: NEXT_PAGE };
}

export const countingHandler = () => {
    return { type: COUNTING_TO_NEXT_PAGE}
}
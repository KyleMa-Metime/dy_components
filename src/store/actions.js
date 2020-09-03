//根actions
export default {
    addA({
        commit: a
    }) {
        setTimeout(() => {
            a('addM', 5)
        })
    }
}
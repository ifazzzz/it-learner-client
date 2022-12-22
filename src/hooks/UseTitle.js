const { useEffect } = require("react")

const UseTitle = (title) => {
     useEffect(() => {
        document.title = `${title} -it-learner`
     },[title])
}

export default UseTitle;
import { generateUser } from '../static-data'

const user = (state = generateUser(), action) => {
    return state
}

export default user
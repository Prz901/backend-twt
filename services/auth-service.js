const User = require('../models/User')
const sign = require('../utils/sign-jwt')

const auth = async (username, password) => {

  try {
    const user = await User.findOne({ username, password })

    if (!user)
      return false

    return sign({
      author_id: user._id
    },
      931556926000
    )

  } catch (error) {
    console.log('error', error)
    return false
  }

}

module.exports = { auth, }

export const toDays = milis => Math.floor(milis / (1000 * 60 * 60 * 24))

export const toHours = milis =>
  Math.floor((milis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

export const toMinutes = milis =>
  Math.floor((milis % (1000 * 60 * 60)) / (1000 * 60))

export const toSeconds = milis => Math.floor((milis % (1000 * 60)) / 1000)

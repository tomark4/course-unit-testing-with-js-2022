module.exports.buildUser = (
  id = 1,
  name = 'jhon',
  address = 'petare',
  age = 39
) => {
  return { id, name, address, age }
}

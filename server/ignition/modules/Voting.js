const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules')
const constructorsArgs = require('../../arguments')

module.exports = buildModule('Voting', (m) => {
  const votingContract = m.contract('Voting', constructorsArgs)

  // m.call(votingContract, 'name of the function', [])

  return { votingContract }
})

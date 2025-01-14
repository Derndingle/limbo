import { BehodlerDevEnvFastifyInstance } from '../types'

export default function (fastify: BehodlerDevEnvFastifyInstance, _, done): void {
  fastify.get('/get-deployment-addresses', getDeploymentAddresses)
  done()

  function getDeploymentAddresses() {
    if (fastify.behodlerDevEnv?.active) {
      return fastify.behodlerDevEnv?.deployedAddresses
        ? fastify?.createInfoResponse?.('deployment addresses fetched', {
            contracts: fastify.behodlerDevEnv?.deployedAddresses,
          })
        : fastify?.createInfoResponse?.('no deployment addresses found')
    } else {
      return fastify?.createInfoResponse?.('dev env not started')
    }
  }
}

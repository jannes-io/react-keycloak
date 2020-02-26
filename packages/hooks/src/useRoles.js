import { useKeycloak } from '@react-keycloak/web'

const useRoles = clientId => {
  const { keycloak } = useKeycloak()
  if (keycloak === undefined || keycloak.tokenParsed === undefined) {
    return []
  }

  const resourceAccess = keycloak.tokenParsed.resource_access
  if (clientId === undefined) {
    const concatClientRoles = (acc, [clientId, { roles }]) => ({
      ...acc,
      [clientId]: roles
    })
    return Object.entries(resourceAccess).reduce(concatClientRoles, {})
  }
  return resourceAccess.clientId.roles
}

export default useRoles

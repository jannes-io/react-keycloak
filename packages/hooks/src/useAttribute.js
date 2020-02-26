import { useKeycloak } from '@react-keycloak/web'

const useAttribute = attribute => {
  const { keycloak } = useKeycloak()
  if (keycloak === undefined || keycloak.tokenParsed === undefined) {
    return undefined
  }

  return keycloak.tokenParsed[attribute]
}

export default useAttribute

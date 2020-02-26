// Type definitions for @react-keycloak/hooks 0.1.0
// Project: https://github.com/panz3r/react-keycloak
// Definitions by: Jannes Drijkoningen <https://github.com/jannes-io>
// TypeScript Version: 3.4

export function useAttribute(attributeName: string): string | undefined

export interface IClientRoles {
  [clientId: string]: string[]
}

export function useRoles(clientId: string): string[]
export function useRoles(): IClientRoles

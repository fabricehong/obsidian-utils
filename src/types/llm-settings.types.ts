export interface LLMOrganization {
    id: string;        // ID interne unique (UUID)
    name: string;      // Nom affiché à l'utilisateur
    apiKey: string;
    baseUrl: string;
    supportedModels: string[];
}

export interface LLMConfiguration {
    id: string;        // ID interne unique (UUID)
    name: string;      // Nom affiché à l'utilisateur
    organisationId: string;  // Référence à l'ID interne de l'organisation
    model: string;
}

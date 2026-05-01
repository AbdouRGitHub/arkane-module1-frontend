import type {AnomalyLevel} from "#/enums/anomaly.enum.ts";

export type AnomalyItem = {
    code_anomalie: string;
    niveau: AnomalyLevel;
    recommandation: string;
};

export type Anomaly = {
    siren: string;
    siret?: string;
    code_client_erp?: string;
    raison_sociale_interne: string;
    raison_sociale_insee?: string;
    anomalies: AnomalyItem[];
};
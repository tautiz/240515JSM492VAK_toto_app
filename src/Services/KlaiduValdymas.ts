import { NotificationService } from './NotificationService';

// Bazinė klaidos klasė
export class PagrindineKlaida extends Error {
    constructor(
        public pranesimas: string,
        public kodas: string = 'BENDRA_KLAIDA',
        public papildomaInfo: Record<string, any> = {}
    ) {
        super(pranesimas);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

    public gautiKlaida() {
        return {
            kodas: this.kodas,
            pranesimas: this.pranesimas,
            papildomaInfo: this.papildomaInfo,
            laikas: new Date().toISOString()
        };
    }
}

// Specifinės klaidų klasės
export class ValidacijosKlaida extends PagrindineKlaida {
    constructor(pranesimas: string, papildomaInfo: Record<string, any> = {}) {
        super(pranesimas, 'VALIDACIJOS_KLAIDA', papildomaInfo);
    }
}

export class AuthKlaida extends PagrindineKlaida {
    constructor(pranesimas: string, papildomaInfo: Record<string, any> = {}) {
        super(pranesimas, 'AUTH_KLAIDA', papildomaInfo);
    }
}

export class UzklausosKlaida extends PagrindineKlaida {
    constructor(pranesimas: string, papildomaInfo: Record<string, any> = {}) {
        super(pranesimas, 'UZKLAUSOS_KLAIDA', papildomaInfo);
    }
}

// Klaidų valdymo servisas
export class KlaiduValdymas {
    private static instance: KlaiduValdymas;
    private klaidos: Array<Record<string, any>> = [];

    private constructor() {}

    public static getInstance(): KlaiduValdymas {
        if (!KlaiduValdymas.instance) {
            KlaiduValdymas.instance = new KlaiduValdymas();
        }
        return KlaiduValdymas.instance;
    }

    public apdorotiKlaida(klaida: PagrindineKlaida | Error): void {
        const klaidosInfo = klaida instanceof PagrindineKlaida
            ? klaida.gautiKlaida()
            : {
                kodas: 'SISTEMOS_KLAIDA',
                pranesimas: klaida.message,
                laikas: new Date().toISOString()
            };

        this.klaidos.push(klaidosInfo);
        console.error('Klaida:', klaidosInfo);

        // Čia galite pridėti papildomą klaidų apdorojimo logiką
        // Pvz., siųsti pranešimą į klaidų stebėjimo sistemą
        this.pranestapiKlaida(klaidosInfo);
    }

    private pranestapiKlaida(klaidosInfo: Record<string, any>): void {
        // Implementuokite pranešimų logiką
        // Pvz., naudojant NotificationService
        const pranesimas = `${klaidosInfo.kodas}: ${klaidosInfo.pranesimas}`;
        // Čia galite naudoti jūsų esamą NotificationService
        NotificationService.getInstance().error(pranesimas);
    }

    public gautiKlaidas(): Array<Record<string, any>> {
        return this.klaidos;
    }

    public isvalytiKlaidas(): void {
        this.klaidos = [];
    }
}

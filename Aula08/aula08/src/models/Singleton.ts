class CentralDeTrafego {
    private static instance: CentralDeTrafego;

    private constructor() {
        console.log('Central de Tráfego iniciada');
    }

    static getInstance(): CentralDeTrafego {
        if (!CentralDeTrafego.instance) {
          CentralDeTrafego.instance = new CentralDeTrafego();  
        }
        return CentralDeTrafego.instance;
    }

    emitirAlerta(mensagem: string) {
        console.log('Alerta: ${mensagem}');
    }
}

//uso
const central1 = CentralDeTrafego.getInstance();
const central2 = CentralDeTrafego.getInstance();

central1.emitirAlerta('Acidente na Rodovia!');

console.log(central1 === central2); // true (mesma instância)


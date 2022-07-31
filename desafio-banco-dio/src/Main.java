
public class Main {

	public static void main(String[] args) {
		
		Cliente joao = new Cliente();
		joao.setNome("João");
		
		Conta cc = new ContaCorrente(joao);
		Conta poupanca = new ContaPoupanca(joao);
		
		cc.depositar(100);
		cc.transferir(poupanca, 100);
				
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();

	}

}

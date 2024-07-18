class BankAccount {
    private balance: number = 0;
    protected AccountHolder: string = "";

    constructor(AcHolder: string){
        this.AccountHolder = AcHolder;
    }
    
    deposit(balance: number){
        this.balance = balance;
    };

    withDraw(amount: number){
        if(this.balance < amount){
            console.log("Insufficient Balance")
        } else {
            this.balance -= amount;
            console.log("Withdraw Successful: " + amount)
        };
    };
};

const newAcc = new BankAccount("Ghulam Mustafa")

class JsBank extends BankAccount {
    showAccountHolder(AccountHolder: string){
        this.AccountHolder = AccountHolder;
    };
};

const acc2 = new BankAccount("Ausaf")
console.log(acc2);
acc2.deposit(200)
acc2.withDraw(100)
console.log(acc2);

const acc1 = new JsBank("GM")
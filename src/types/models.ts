interface Bank {
    name: string;
    logo: string;
}

export interface CreditOffer extends Bank {
    amount: number;
}

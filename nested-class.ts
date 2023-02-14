class Customer{
    public validateAddress(customerAddress: string): boolean{
        class Address{
            address: string;
            constructor(address: string){
                this.address = address;
            }
            public validate(): boolean {
            //body
            }
        }
        let address: Address = new Address(customerAddress);
        return address.validate();
    }
}
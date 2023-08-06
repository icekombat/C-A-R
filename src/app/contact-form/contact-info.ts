
export interface ContactInfo{
name: string,
email: string,
country: {readonly id:number,readonly country:string },
companyCheckBox: boolean,
companyName: string,
  goals:number[],
message: string
}

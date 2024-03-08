const CurrencyFormatter = new Intl.NumberFormat(undefined,{
    currency:"INR",style:"currency"
})


export function formatCurrency( number : number){
      return  CurrencyFormatter.format(number)
}
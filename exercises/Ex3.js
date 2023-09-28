document.body.innerHTML = 'ma name is afk'
'ma name is afk'
document.body.innerHTML = 'ma name is'+' afk'
'ma name is afk'
document.body.innerHTML = 'Total cost: $'+ (5+3)
'Total cost: $8'
document.body.innerHTML = `Total cost: $${3+5}`
'Total cost: $8'
alert`Total cost: $${3+5}`
undefined
alert`Total cost: $${3+5}`;
undefined
alert(`Total cost: $${3+5}`);
undefined
'Total cost:$' + (599+295)/100
'Total cost:$8.94'
`Total cost:$${(599+295)/100}`
'Total cost:$8.94'
alert(`Total cost:$${(599+295)/100}`)

alert(`Total cost:$${(599+295)/100}\n Thank you, come agaain!`)

`Items (${2+2}): $${(2*2095+2*799)/100}`
`Shipping & Handling: $${(499+499)/100}`
`Total before Tax: $${(2*2095+2*799+499+499)/100}`
`Estimate Tax: $${(Math.round((2*2095+2*799+499+499)*0.1)/100)}`

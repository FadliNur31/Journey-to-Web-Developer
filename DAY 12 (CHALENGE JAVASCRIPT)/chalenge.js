function generate(A){
    return A[Math.floor(Math.random()* 9)];
}
const tigaKataLucu = (A,B,C)=>{
    console.log(`${generate(A)} ${generate(B)} ${generate(C)}`)
}
A  = ['Reyna', 'Brimstone', 'Alex', 'Naurah', 'Haikal', 'Sueb', 'Tafsili', 'Nabil', 'Sage']
B = ['Keselek', 'Sedot', 'Minum', 'Cium', 'Nampar', 'Nendang', 'Ngocok', 'Naik', 'Maini']
C = ['Biji Kelempong', 'Baygon', 'Tuak Niken', 'Samcodin', 'Sapi', 'Bulu Nonet', 'Pesawat Kertas', 'Anies', 'Kecap']

tigaKataLucu(A,B,C)
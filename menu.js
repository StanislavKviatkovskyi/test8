const prompt = require('prompt-sync')()
let person
let exit

let myorder = {
    orderQuantity : "",
    Prise : "",
    DeliveryPrise : "",
    SummaPrise : "",
    ToAdress : "",
}

const patternMenu = [
    {
        title:'Xenta Absenta',
        price: 128900/100,
        category: 'Абсент',
    },
    {
        title:'Baron Gaston 1952',
        price: 6200000/100,
        category: 'Коньяк',
    },
    {
        title:'Tosolini Most Uve Miste',
        price: 1326400/100,
        category: 'Горілка',
    },{
        title:'Flensburger Weizen',
        price: 7300/100,
        category: 'Пиво',
    },
    {
        title:'Dom Perignon Vintage Rose',
        price: 2121400/100,
        category: 'Шампанське',
    },
    {
        title:'Chateau Montrose 2005',
        price: 1735000/100,
        category: 'Вино',
    }
]

start()

function start(){
    console.log("Ласкаво просимо!!! Зареєструйтесь:")
    const name = prompt("Введіть своє ім'я ") 
    const phone = prompt("Введіть свій номер телефону ") 
    const email = prompt("Введіть свою електрону адресу ") 
    const adres = prompt("Введіть своє місце проживання ") 

    person = {
        name: name,
        phone: phone,
        email: email,
        adres: adres
    }
    chooseMenu()
}

function chooseMenu(){
    console.log("Що хочете робити:")
    console.log(" 1 - Переглянути інформацію свого акаунта")
    console.log(" 2 - Переглянути меню")
    console.log(" 3 - Мої замовлення")
    console.log(" 4 - Вийти з програми")
    selectChoose()
}

function selectChoose(){
    const choose = prompt("- ")
    switch(choose){
        case "1":
            console.table(person)
            exit = prompt("")
            chooseMenu()
            break
        case "2":
            menuBar()
            break
        case "3":
            console.table(myorder)
            exit = prompt("")
            chooseMenu()
            break
        case "4":
            process.exit(0)
            break
    }
}

function menuBar(){
    console.table(patternMenu)
    console.log("Натисніть 6 щоб повернутись до головного меню")
    console.log("Оберіть (index) вашого замовлення: ")
    chooseOrder()
}

function chooseOrder(){
    let chooseO = prompt("- ")
    switch(chooseO){
        case "0":
            Order(patternMenu[0].title, patternMenu[0].price)
            break
        case "1":
            Order(patternMenu[1].title, patternMenu[1].price)
            break
        case "2":
            Order(patternMenu[2].title, patternMenu[2].price)
            break
        case "3":
            Order(patternMenu[3].title, patternMenu[3].price)
            break
        case "4":
            Order(patternMenu[4].title, patternMenu[4].price)
            break
        case "5":
            Order(patternMenu[5].title, patternMenu[5].price)
            break
        case "6":
            chooseMenu()
            break
    }
}

function Order(x, y){
    console.log("Вітаю вас, ", person.name)
    let num = parseInt(prompt("Вкажіть к-ть товару: "))
    console.log("Ваше замовлення: ")
    console.log(x, ", к-ть: " + num)
    let pT = y*num
    let pD = 5000/100
    let sT = pT + pD

    console.log("ціна ", pT)
    console.log("ціна D", pD)
    console.log("ціна S", sT)

    console.log("Кур'єр підїде до", person.adres)
    console.log("Дякую за замовлення", person.name, "До скорих зустрічей!")

    myorder.orderQuantity = x + " , к-ть: " + num
    myorder.Prise = y*num
    myorder.DeliveryPrise = 5000/100
    myorder.SummaPrise = pT + pD
    myorder.ToAdress = "Кур'єр підїде до " + person.adres

    exit = prompt("")
    chooseMenu()
}

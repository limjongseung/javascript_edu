const email = "codecamp@gmail.com"
// undefined
email.includes("@");
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
let useMail =email.split("@")[0]
// undefined
useMail
// 'codecamp'
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
let maskingMail = []
// undefined
    maskingMail.push(useMail[0])
// 1
 maskingMail.push(useMail[1])
// 2
 maskingMail.push(useMail[2])
// 3
 maskingMail.push(useMail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
 maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("")
// 'code****'
maskingMail.join("") + "@" +company
// 'code****@gmail.com'
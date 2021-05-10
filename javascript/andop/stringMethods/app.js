let result;
let comment= "Lorem Ipsum is slechts,een proeftekst uit het drukkerij,- en zetterijwezen. Lorem Ipsum is de, standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus, te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
result = comment.length;



result= comment.indexOf('proeftekst')
result= comment.lastIndexOf('proeftekst')

result=comment.search('drukkerij')


result=comment.slice(71,comment.length)
result=comment.slice(86,150)

result=comment.substr(86,150)
result=comment.substring(86,150)

result=comment.substring(86,-1)


result=comment.replace('Lorem','213670')


result=comment.replace(/proef/g, 'MARIAM')



let numbers="2345 abcd 16589 efghj kfjgoitbl 01258795 djfnvdhguoh 02796324"
result=numbers.replace(/([a-zA_Z])\w+/g,'MARIAM')
result=numbers.replace(/([0-9])\w+/g, 'MARIAM')


result=comment.toUpperCase()
result=comment.toLowerCase()

comment="mariam     saddiqa     1234    568    ujhkf"
result=comment.trim();
result=comment.trimLeft()
result=comment.trimRight()



let str1="mariam"
let str2="saddiqa"
let num="123"

result= str1.concat(str2)
str1=result.concat(num)

console.log(str1)
result=num.concat('456')


let data= "mariam,amna,ayesha,atika,asma,tahir,umer"

result=data.split(',')










console.log(result)
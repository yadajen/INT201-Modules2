function ops(n1,n2,n3) {
    console.log(arguments)//special object
    console.log(arguments.length)//รู้ได้ว่าparameterส่งมากี่ตัว
    for (const a of arguments) {
        console.log(a)
    }
    arguments[0] =555 //เปลี่ยนค่าของn1
    console.log(n1)
}

ops('a',true,3)
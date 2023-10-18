function ops(n1 =0,n2 = false,n3 ='unknown') {
    console.log(n1,n2,n3)

}

ops(1,undefined,'yada') //1 false yada
ops(undefined,undefined,undefined)//0 false unknown
ops(555, true, 'js')//555 true js
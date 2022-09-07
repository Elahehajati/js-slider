let turn=0
let _windowwidth=document.getElementsByClassName('window')[0].clientWidth
let _span=document.querySelectorAll('.timer>span>span')
_span[0].style.transform='scale(1)'
let _figcount=document.querySelectorAll('.buss>figure')
document.getElementsByClassName('buss')[0].style.width=(_windowwidth*(_figcount.length)+'px')
document.getElementsByClassName('firstimg')[0].style.width=(_windowwidth +'px')
// console.log(_windowwidth)
_figcount.forEach((val)=>{
    val.style.width=_windowwidth + 'px'
})
function _moveright(){
    turn++
    _move()
}
function _moverleft(){
    turn--
    _move()
}
function _move(){
    if(turn>=1){
        document.getElementsByClassName('buss')[0].style.zIndex='2'
        document.getElementById('left').style.display='block'
    }else{
        document.getElementById('left').style.display='none'
    }
    if(turn==_figcount.length){
        document.getElementById('left').style.display='none'
        setTimeout(()=>{
            turn=0
            // console.log(turn)
            document.getElementsByClassName('buss')[0].style.transition='0s'
            setTimeout(()=>{
                document.getElementsByClassName('buss')[0].style.transform='translateX(-'+(turn++) *_windowwidth+'px)'
                document.getElementById('left').style.display='none'
                turn=0
                _span[0].style.transform='scale(1)'
                setTimeout(()=>{
                    document.getElementsByClassName('buss')[0].style.transition='.7s'
                } , 10)

            } , 1)

        }, 700)
    }
     document.getElementsByClassName('buss')[0].style.transform='translateX(-'+turn *_windowwidth+'px)'
     _span.forEach(eli)
     _span[turn].style.transform='scale(1)' 
}
setInterval(slidmove , 4000)
function slidmove(){
turn++
_move()
}
function eli(val){
val.style.transform='scale(0)'
}
function clickcycle(a){
// console.log(a.getAttribute('data-num'))
turn=a.getAttribute('data-num')
_move()
}
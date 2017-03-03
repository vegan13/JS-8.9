function tree(ilosc) {
    for (var n = 1; n <= ilosc; n++){
        var star = '';
        for (var i = 1; i <= n*2-1; i++){
            star = star + '* ';
        }
        console.log(star);
    }
}

tree(15);
tree(10);
tree(5);
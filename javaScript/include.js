function vowelsAndConsonants(s) {
    var a = "aeiou";
    var c = '';
    for (var i = 0; i < s.length; i++) {
        if (a.includes(s[i])) {
            console.log(s[i])
        }
        else {
            c += s[i] + '\n';

        }

    }
    console.log(c)

}
vowelsAndConsonants("hello");

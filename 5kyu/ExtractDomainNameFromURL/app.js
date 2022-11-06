/* 5 kyu *****************************/
/* Extract the domain name from a URL*/
/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

// PREP

// Parameters: url in the form of a String.  May start with https://, http://, or www. Length indeterminate. Domain will vary.

// Returns: return a String of the url in the case it was provided, but only as the given domain name. Remove anything before or after that domain name (e.g. remove https://, www, ., com, etc.)

// Examples:
/* url = http://google.com -> google
 * url = http://google.co.jp -> google
 * url = http://github.com/carbonfive/raygun -> github
 * url = http://www.zombie-bites.com -> zombie-bites
 * url = https://www.cnet.com -> cnet
*/

// Pseudo code: 
/*
    function domainName(url) {
        // replace elements of the string that occur before the domain name that we don't need with a '.' character ('.' character will always separate domain name from remainder of url)
        // split the string into an array using that character as the delimiter
        // filter the array to single out the elements that have defined values, delimiter will create empty elements in array if those elements are at the start of the string
        // single out index 0 of the array as it should be the domain name
        // return index 0 of resulting filtered array
    }
*/


function domainName(url){
    // let str = url.replace('http://', '.').replace('https://', '.').replace('www.', '.').replace('/', '.');
    // let arr = str.split('.');
    // arr = arr.filter(e => e);
    // return arr[0]
    let str = url.replace('http://', ' ').replace('https://', ' ').replace('www.', ' ').replace('/', ' ').replace('.', ' ');
    return str.split(' ').filter(e => e)[0];
}

// Run Tests
console.log(domainName('http://google.com'), 'google');
console.log(domainName('http://google.co.jp'), 'google');
console.log(domainName('http://github.com/carbonfive/raygun'), 'github');
console.log(domainName('http://www.zombie-bites.com'), 'zombie-bites');
console.log(domainName('https://www.cnet.com'), 'cnet');
console.log(domainName('imattking.com'), 'imattking');

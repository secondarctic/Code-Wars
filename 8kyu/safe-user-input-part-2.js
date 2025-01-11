/* You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/

// Using replaceAll(); **************************************** This solution only works in N.15 or later 
function htmlspecialchars(formData) {
    let str = formData.toString();
    str = str.toString();
    if (str.length === 0) {
        return str
    }
    str = str.replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
    return str;
  }
// Run Tests
console.log( (htmlspecialchars('<h2>Hello World</h2>') === '&lt;h2&gt;Hello World&lt;/h2&gt;') );
console.log( (htmlspecialchars('How was "The Matrix"?  Did you like it?') === 'How was &quot;The Matrix&quot;?  Did you like it?') );
console.log( (htmlspecialchars('Hello, how would you & I fare?') === 'Hello, how would you &amp; I fare?') );
console.log( (htmlspecialchars('<script>alert(\'Website Hacked!\');</script>') === '&lt;script&gt;alert(\'Website Hacked!\');&lt;/script&gt;') );
console.log( (htmlspecialchars('<h2> & Hello &  World & </h2>') === ('&lt;h2&gt; &amp; Hello &amp;  World &amp; &lt;/h2&gt;') ) );
console.log();

// Loop method *************************************************** only works on one '&' character
function htmlSpec2(formData) {
    formData = formData.replace('&', '&amp;');
    for(let i = 0; i < formData.length; i++) {
        formData = formData.replace('<','&lt;').replace('>','&gt;').replace('"','&quot;');
    }
    return formData;
}

// Run Tests
console.log( (htmlSpec2('<h2>Hello World</h2>') === '&lt;h2&gt;Hello World&lt;/h2&gt;') );
console.log( (htmlSpec2('How was "The Matrix"?  Did you like it?') === 'How was &quot;The Matrix&quot;?  Did you like it?') );
console.log( (htmlSpec2('Hello, how would you & I fare?') === 'Hello, how would you &amp; I fare?') );
console.log( (htmlSpec2('<script>alert(\'Website Hacked!\');</script>') === '&lt;script&gt;alert(\'Website Hacked!\');&lt;/script&gt;') );
console.log( (htmlSpec2('<h2> & Hello &  World & </h2>') === ('&lt;h2&gt; &amp; Hello &amp;  World &amp; &lt;/h2&gt;') ) );
console.log();

// One line method - Sort of ****************************************************************************
function htmlSpecOneLine(formData) {
    formData = formData.split('&').join('&amp;');
    return formData.split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
}

// Run Tests
console.log( (htmlSpecOneLine('<h2>Hello World</h2>') === '&lt;h2&gt;Hello World&lt;/h2&gt;') );
console.log( (htmlSpecOneLine('How was "The Matrix"?  Did you like it?') === 'How was &quot;The Matrix&quot;?  Did you like it?') );
console.log( (htmlSpecOneLine('Hello, how would you & I fare?') === 'Hello, how would you &amp; I fare?') );
console.log( (htmlSpecOneLine('<script>alert(\'Website Hacked!\');</script>') === '&lt;script&gt;alert(\'Website Hacked!\');&lt;/script&gt;') );
console.log( (htmlSpecOneLine('<h2> & Hello &  World & </h2>') === ('&lt;h2&gt; &amp; Hello &amp;  World &amp; &lt;/h2&gt;') ) );

// console.log();
// let str = 'ATATATATATAT';
// console.log(str.split('A'));
// console.log(str.split('A').join('U'));
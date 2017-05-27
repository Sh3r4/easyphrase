# easyphrase

Get it as a cli tool via NPM:

`npm install -g easyphrase`

Or get it the JS to add the generator to your website by cloning this repo or via NPM:

`npm install easyphrase`

You can find the repo at Github: [https://github.com/TimmsIO/easyphrase][gh]

The NPM package is here: [https://www.npmjs.com/package/easyphrase][npm]

There is a live demo here: [http://timms.io/utilities/easyphrase][epld]

## Mission Statement

Easyphrase sets out to be a simple passphrase generator to promote better security practices.
 It is intended to make it easy for administrators to encourage and demonstrate strong passphrases in corporate environments.
 Easyphrase should be easy to use, and produce passwords that are strong against brute force and dictionary based attacks while reducing the effects of security fatigue on the end user.

## Features

Easyphrase uses a modified version of the [EFF's dice passphrase generator][eff] technique for generating strong passwords.
 To keep the method "fun", easyphrase outputs the results of die throws and dictionary lookups for a more engaging experience.
 Easyphrase can also generate passphrases in a non-verbose manner.

As an opt-out function, easyphrase will insert a random numeric character at a random index in the generated passphrase.

Easyphrase is also capable of generating passphrases in a list of any length.

## Generator Arguments


>-s, --silent        Output only the generated password
>
>-q, --quantity \<n\>  The quantity of passwords to output, as an integer
>
>-l, --less-secure   Do not include the randomly placed integer

## Sample Output

### Standard Output

``` text
$easyphrase
ROLLING!
Dice Roll Results:  62326; 25341; 46656; 55243; 53312; 62526;
Rolls Generated these words:   trench, scored, enforced, tile, sneer, refinish
Your new password is:
tr7enchscoredenforcedtilesneerrefinish
```


### Silent, Multiple, Less Paranoid Output

``` text
$ easyphrase -slq 2
treadmillsubsonicstereodirectlytacticsimpeding
unitscruffypungentstingilyengagingwalrus
```

## The Web Interface

easyphrase can be added to a webpage in one of two ways:

### The easy but ugly way

I am not a web designer. Adding easyphrase to your website this way will prove that.

All you have to do is add this element to your webpage and easyphrase will build all the fields and form elements it needs to run:

``` html
<div id="easyphrase"></div>
```

### The slightly harder but prettier way

All of the DOM element ids that easyphrase searches for can be overridden. If an element with the correct id exists on your page, easyphrase will bind to it and use it instead of generating a new one.

If easyphrase cannot find any of the DOM element ids it needs, it will generate the default one in the `id="easyphrase"` element.
 Effectively, this means you can override as many or as few of the defaults as you want.

Here are the IDs to override and their purpose:

| ID                               | Purpose                                                                     |
|----------------------------------|-----------------------------------------------------------------------------|
| id="easyphrase-output-element"   | Output of the generator function will be added to this element's .innerText |
| id="easyphrase-generate-button"  | Triggers the generator function                                             |
| id="easyphrase-copy-button"      | Copies the single last generated password to clipboard                      |
| id="easyphrase-silent-checkbox"  | Turn off/on verbose mode                                                    |
| id="easyphrase-lessSec-checkbox" | Turn off/on insertion of a random number into the phrase                    |
| id="easyphrase-quantity-input"   | Specify a numeric quantity of passphrases to generate                       |



## Thanks

The underpinning method used to generate passwords is based on the [EFF's dice passphrase generator][eff].

 Thanks to the hard working folks at the EFF for their fight to keep the internet free and safe.

To maintain attribution of this wordlist, the following should be added to all compiled files:

``` text
The included word list is modified from that provided by the Electronic Frontiers Foundation.
The original list and its intended uses can be found here: https://www.eff.org/dice
The author of this software claims no ownership of the list.
The list is used in good faith for no commercial purpose in order to promote a more secure web.
```

## License: MIT

``` text
MIT License

Copyright (c) 2017 Morgan Timms

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[gh]: https://github.com/TimmsIO/easyphrase "easyphrase repo on GitHub"
[eff]: https://www.eff.org/dice "Electronic Frontiers Foundation Dice Based Password Generator"
[npm]: https://www.npmjs.com/package/easyphrase "easyphrase NPM package page"
[epld]: http://timms.io/utilities/easyphrase "easyphrase live demo"
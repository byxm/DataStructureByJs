/*
 * @Describtion: 
 * @Date: 2020-01-05 15:58:22
 * @LastEditTime : 2020-01-05 16:00:41
 */


export function splitWords(words: string) {
    var re = /\s*\b/g;
    var re2 = /[A-Z]/g;
    function convert(propertyName) {
        function upperToLower(match) {
            return match.toLowerCase();
        }
        return propertyName.replace(re2, upperToLower);
    }
    const string = convert(words);
    var output = [];
    output = string.split(re);
    var output2 = [];
    for (var i = 0; i < output.length; i++) {
        if (output[i] !== ',' && output[i] !== ';' && output[i] !== '.') output2.push(output[i]);
    }
    return output2;
}
